const express = require("express");
const bcrypt = require("bcrypt");
const jsToken = require("jsonwebtoken");
const mysql = require('mysql2')
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'OldMan1990',
    database: process.env.DB_NAME || 'shoppiest_db',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    queueLimit: 0,
    connectionLimit: 10,
    ssl: process.env.DB_HOST ? { rejectUnauthorized: false } : false
})
const promisedPool = pool.promise();
app.get('/api/products', async(req, res)=>{
    try {
        const [data] = await promisedPool.query('SELECT * FROM products');
        res.json(data)
    } catch(error){
        res.status(500).send({error:error.message})
    }
})
app.get('/api/products/:id', async (req, res)=>{
    try{
        const productId = req.params.id;
        const [rows] = await promisedPool.query('SELECT * FROM products WHERE id = ?', [productId]);
        if(rows.length > 0){
            return res.json(rows[0]);
        }else {
            return res.status(404).json({message: 'Product not found'})
        }
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})
app.post('/api/register', async (req, res)=>{
    try{
        const {username, email, password} = req.body;
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const [data] = await promisedPool.query(
            'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
                [username, email, hashedPassword]
        )
        res.status(201).send({
            message: "User registered successfully",
            userId: data.insertId
        })
    } catch (e) {
        res.status(500).send({error:e.message})
    }
})
app.post('/api/login', async (req, res)=>{
    try{
        const {email, password} = req.body;
        const [users] = await promisedPool.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )
        if(users.length === 0){
            return res.status(401).send({error:"E-mail or password is wrong"})
        }
        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if(!isMatch){
            return res.status(401).send({error:"User does not exist"})
        } else {
            const token = jsToken.sign(
                {userId: user.id, email: user.email},
                'shoppiest_super_secret_key_2026',
                { expiresIn: '1d'}
            )
            res.status(200).send({
                message: "User login is successfully",
                token: token,
                userId: user.id
            })
        }
    }catch (error) {
        res.status(500).send({error:error.message})
    }
})
app.post('/api/wishlist', async (req, res)=>{
    try{
        const {user_id, product_id} = req.body;
        const [createdWishData] = await promisedPool.query(
            `SELECT * FROM wishlist WHERE user_id = ? AND product_id = ?`,
            [user_id, product_id]
        )
        if (createdWishData.length > 0){
            await promisedPool.query(
                'DELETE FROM wishlist WHERE user_id = ? AND product_id = ?',
                [user_id, product_id]
            )
            return res.status(200).send({
                message: "Product successfully removed from wishlist",
                wishData: createdWishData.product_id,
                isLiked: false
            })
        }else{
            await promisedPool.query(
                'INSERT INTO wishlist (user_id, product_id) VALUES (?, ?)',
                [user_id, product_id]
            )
            return res.status(200).json({
                message: "Product added to wishlist",
                isLiked: true
            });
        }

    }catch(error){
        res.send({error:error.message})
    }
})
app.get('/api/wishlist/:user_id', async (req, res)=>{
    try {
        const {user_id}= req.params;
        const [wishData] = await promisedPool.query(
            'SELECT product_id FROM wishlist WHERE user_id = ?',
            [user_id]
        )
        const likedProducts = wishData.map((p) => p.product_id);
        res.status(200).send({
            message: "Wishlist fetched successfully",
            wishlist: likedProducts,
        })
    }catch(error){
        console.log("Wishlist GET Error:", error.message);
        res.status(500).json({error:error.message})
    }
})
app.get('/', (req, res) => {
    res.send("Shoppiest API Server is Running Successfully!");
});
app.post('/api/cart', async (req, res)=>{
    try{
        const {user_id, product_id, quantity} = req.body;
        const [data] = await promisedPool.query(
            'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
            [user_id, product_id]
        )
        if (data.length > 0){
            await promisedPool.query(
                'UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?',
                [quantity, user_id, product_id]
            )
        } else{
            await promisedPool.query(
                'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
                [user_id, product_id, quantity]
            )
            return res.status(200).json({
                message: "Product added to cart",
            });
        }
        res.status(200).send({
            message: 'Cart updated successfully',
        })
    } catch(error){
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
})
app.get('/api/cart/:user_id', async(req, res)=>{
    try{
        const {user_id}= req.params;
        const [data] = await promisedPool.query(
            `SELECT 
                cart.id AS cart_id, 
                cart.quantity, 
                products.name, 
                products.price,
                products.img_link,
                products.width,
                products.height
            FROM cart 
            INNER JOIN products ON cart.product_id = products.id 
            WHERE cart.user_id = ?`,
            [user_id]
        )
        res.status(200).send({
            message: "Cart fetched successfully",
            cart: data
        })
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
})
app.delete('/api/cart/:cart_id', async (req, res)=>{
    try{
        const {cart_id} = req.params;
        const [data] = await promisedPool.query(
            'DELETE FROM cart WHERE id = ?',
            [cart_id]
        )
        if (data.affectedRows === 0){
            return res.status(404).json({
                message: "Cart does not exist",
            })
        }
        return res.status(200).send({
            message: "Cart deleted successfully",
            deleteCart: data
        })
    }catch(err){
        console.log(err)
        res.status(500).send({error:err.message})
    }
})
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})
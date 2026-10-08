import "../App.css"
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FAQ(){
    return (
        <div className="faq-main">
            <Navbar/>
            <h1 style={{
                fontSize: '27px',
                marginTop: '30px'
            }}>Frequently Asked Questions</h1>
            <div className="req-res">
                <h3>1. How do I create an account?</h3>
                <p>
                    To sign up, click the “Sign Up”
                    button on the homepage, enter
                    your email and password, and
                    follow the instructions. You’ll
                    receive a confirmation email to
                    activate your account.
                </p>
            </div>
            <div className="req-res">
                <h3>2. I forgot my password. What should I do?</h3>
                <p>
                    On the login page, click
                    “Forgot Password?” and enter
                    your email address. You’ll
                    receive a link to reset your password.
                </p>
            </div>
            <div className="req-res">
                <h3>3. How can I add a product to my cart?</h3>
                <p>
                    On the product page, click the
                    “Add to Cart” button. The item
                    will appear in your cart, visible
                    at the top right corner of the site.
                </p>
            </div>
            <div className="req-res">
                <h3>4. What payment methods do you accept?</h3>
                <p>
                    We accept Visa, MasterCard, PayPal,
                    and Cash on Delivery (COD). You can
                    select your preferred payment method
                    during checkout.
                </p>
            </div>
            <div className="req-res">
                <h3>5. How long does delivery take?</h3>
                <p>
                    Delivery times vary by location.
                    Within the city, orders usually
                    arrive in 1–3 business days. For
                    other regions, delivery may take
                    3–7 business days.
                </p>
            </div>
            <div className="req-res">
                <h3>6. Can I return a product?</h3>
                <p>
                    Yes. You can return products within
                    14 days of purchase, provided they
                    are unused and in their original
                    packaging.
                </p>
            </div>
            <div className="req-res">
                <h3>
                    7. What should I do if
                    search isn’t working?
                </h3>
                <p>
                    First, check your internet connection.
                    Refresh the page. If the issue continues,
                    contact our support team via the
                    “Contact Us” page.
                </p>
            </div>
            <div className="req-res">
                <h3>
                    8. Why doesn’t the site display
                    properly on my phone?
                </h3>
                <p>
                    Clear your mobile browser cache
                    and reload the page. For the best
                    experience, use the latest version
                    of Chrome or Safari.
                </p>
            </div>
            <div className="req-res">
                <h3>9. How do I contact customer support?</h3>
                <p>
                    You can fill out the form on the
                    “Contact Us” page or call our support.
                </p>
            </div>
            <div className="req-res">
                <h2>
                    For unanswered questions,
                    you can contact us via the
                    "Contact Us" page. Thanks
                    from now and have a nice day!
                </h2>
            </div>
            <Footer/>
        </div>
    )
}

export default FAQ
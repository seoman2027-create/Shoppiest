import "../App.css"
import screenshot from "../Photos/Screenshot_example.png"
import { useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PaymentInfo(){
    useEffect(()=>{
        document.body.classList.add( "p_i_body");
        return() => {
            document.body.classList.remove( "p_i_body");
        };
    },[])
    return(
        <div className="p-i_main">
            <Navbar />
            <h1 style={{textAlign:"center"}}>Payment methods</h1>
            <div className="p-i-last">
                <div className="p-i_first">
                    <img
                        src={screenshot}
                        alt="Screenshot"
                        style={{
                            width: "80%",
                            margin:"20px"
                        }}
                    />
                </div>
                <div className="p-i_second">
                    <h2 style={{color:"black", textAlign:"center"}}>Payment details</h2>
                    <input
                        className="p-i_input"
                            style={{
                            }}
                            type="text"
                            maxLength="16"
                            placeholder="Enter your card number"
                    />
                    <input
                        className="p-i_input"
                        style={{
                            textTransform: "uppercase"
                        }}
                        type="text"
                        placeholder="Enter cardholder name"
                    />
                    <div className="p-i-s_input">
                        <input
                            className="p-i_input"
                            style={{
                                marginRight:"5px"
                            }}
                            type="date"
                            placeholder="MM/YY"
                        />
                        <input
                            className="p-i_input"
                            style={{
                                marginLeft:"5px"
                            }}
                            type="password"
                            maxLength="3"
                            placeholder="CVC"
                        />
                    </div>
                    <input
                        type="submit"
                        className="p-i_submit"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PaymentInfo;
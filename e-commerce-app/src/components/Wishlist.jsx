import "../App.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

function Wishlist({theme, setTheme}) {
    return (
        <div className={"wish-main"}>
            <Navbar theme={theme} setTheme={setTheme} />
            <Footer />
        </div>
    )
}

export default Wishlist;
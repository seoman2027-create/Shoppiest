import "../App.css"
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile(){
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("shoppiest_token");
        navigate("/");
        window.location.reload();
    }
    return(
        <div className="prof-main-div">
            <Navbar/>
            <h1
                className={"profile-header"}
            >
                Account settings
            </h1>
            <div className="prof-first-div">
                <div className="prof-first-div-1">
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px"
                    }}>
                        <label className="f-n-label">
                            First name <sup>*</sup>
                        </label>
                        <input
                            className="p-input"
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px"
                    }}>
                        <label className="l-n-label">
                            Last name <sup>*</sup>
                        </label>
                        <input
                            className="p-input"
                        />
                    </div>
                </div>
                <div className="prof-first-div-2">
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px"
                    }}>
                        <label>
                            E-mail <sup>*</sup>
                        </label>
                        <input
                            className="p-input"
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "0",
                        padding: "10px"
                    }}>
                        <label>
                            Mobile Number <sup>*</sup>
                        </label>
                        <input
                            className="p-input"
                        />
                    </div>
                </div>
                <div className="prof-first-div-3">
                    <div>
                        <label
                            style={{
                                marginBottom: "3px"
                            }}
                        >Gender</label>
                        <form
                            className={"prof-form"}
                            style={{
                            }}>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                />
                                Female
                            </label>
                        </form>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "10px 20px"
                    }}>
                        <label>ID</label>
                        <input
                            className="p-input"
                        />
                    </div>
                </div>
                <div
                    className="prof-first-div-4"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px"
                }}
                >
                    <label className="">Residental Address</label>
                    <input
                        type="textarea"
                        style={{
                            height: "100px",
                            minWidth: "350px"
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <input
                        className="prof-button"
                        onClick={() => alert("Changes saved")}
                        value="Save changes"
                    />
                    <button
                        onClick={handleLogout}
                        className="prof-button"
                    >Logout</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Profile;










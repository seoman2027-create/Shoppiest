import "../App.css"
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile(){
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    const deleteImage = () => {
        if (image) {
            URL.revokeObjectURL(image);
        }
        setImage(null);
    }
    useEffect(()=>{
        document.body.classList.add("profile");
        return () => {
            document.body.classList.remove("profile");
        }
    })
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
                <button className="prof-button" onClick={() => alert("Changes saved")}>
                    Save changes
                </button>
            </div>
            <Footer/>
        </div>
    )
}


export default Profile;










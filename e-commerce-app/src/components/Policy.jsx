import "../App.css"
import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function PrivacyPolicy() {
    useEffect(() => {
        document.body.classList.add("policy");
        return () => {
            document.body.classList.remove("policy");
        }
    })
    return (
        <div className="main">
            <Navbar/>
            <div className="p-first-div">
                <h1>Privacy Policy</h1>
                <p>We're committed to protecting your
                    privacy and ensuring transparency
                    about how we collect, use and safeguard
                    your personal information
                    on our educational platform
                </p>
                <p>Last updated: April 5, 2026</p>
            </div>
            <div className="p-second-div">
                <h2>Introduction</h2>
                <p>
                    At Shoppiest, we value your privacy and
                    are committed to protecting your personal
                    information. This Privacy Policy explains
                    how we collect, use, and safeguard your
                    data when you interact with our platform.
                </p>
            </div>
            <div className="p-third-div">
                <h2>Information We Collect</h2>
                <ul>
                    <li>Personal details such as name,
                        email, and shipping address.
                    </li>
                    <li>
                        Payment information processed
                        securely through trusted providers.
                    </li>
                    <li>
                        Usage data including pages visited,
                        items viewed, and actions taken on
                        our site.
                    </li>
                </ul>
            </div>
            <div className="p-fourth-div">
                <h2>How We Use Your Information</h2>
                <ul>
                    <li>
                       To process orders and deliver products.
                    </li>
                    <li>
                        To improve our website’s functionality
                        and user experience.
                    </li>
                    <li>
                        To provide customer support and
                        respond to inquiries.
                    </li>
                    <li>
                        To send updates, promotions, or
                        important notices (only if you opt in).
                    </li>
                </ul>
            </div>
            <div className="p-fifth-div">
                <h2>
                    Data Protection
                </h2>
                <p>
                    We implement industry‑standard security
                    measures to protect your information
                    from unauthorized access, alteration,
                    or disclosure. Payment details are
                    encrypted and never stored directly
                    on our servers.
                </p>
            </div>
            <div className="p-sixth-div">
                <h2>
                    Sharing of Information
                </h2>
                <p>
                    We do not sell or trade your personal
                    data. Information may only be shared
                    with trusted third‑party services
                    (such as payment processors or
                    shipping providers) strictly for
                    order fulfillment.
                </p>
            </div>
            <div className="p-seventh-div">
                <h2> Your Rights</h2>
                <ul>
                    <li>
                        You can request access to
                        your personal data.
                    </li>
                    <li>
                        You can update or delete
                        your information at any time.
                    </li>
                    <li>
                        You can opt out of promotional
                        communications.
                    </li>
                </ul>
            </div>
            <div className="p-eighth-div">
                <h2>
                    Changes to This Policy
                </h2>
                <p>
                    We may update this Privacy Policy
                    from time to time. Any changes will
                    be posted on this page with the
                    updated date.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy;
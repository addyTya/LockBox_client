import React from "react";
export default function About(){
    return (<>
        <div className="about">
            <h3>About LockBox</h3>
            <p>


LockBox is a secure and reliable password manager designed to safeguard your passwords with advanced encryption techniques. It encrypts your sensitive data using the AES algorithm from CryptoJS and securely stores it in a MySQL database. The frontend is built using ReactJS, while the backend is powered by NodeJS, with Axios handling internal API calls for seamless communication between the client and server.

LockBox features a tab-based navigation system, powered by BrowserRouter, allowing users to switch between saving passwords and retrieving them effortlessly. To ensure your privacy, LockBox keeps passwords hidden by default, revealing them only upon user action.</p>
        </div>
    </>)
}
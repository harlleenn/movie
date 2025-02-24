import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage () {
    const navigate = useNavigate();

    return (
        <div>
            <input placeholder=" Enter name"/>
            <input placeholder="Enter password"/>
        <button onClick={() => navigate("/home")}>Submit</button>
        </div>
    )
}
export default LoginPage;
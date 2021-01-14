import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { withRouter } from "react-router-dom";
import "./prof.css"



const UserProfile = () => {
    const context = useContext(AuthContext);

    return context.isAuthenticated ? (

        <div className="acc">
            <h1 className="text-center"> Account</h1>
            <h4>Username:</h4>
            <h2>{context.userName}</h2>
        </div>

    ) : (

            <div className="acc">
                <h1>Welcome to MovList!</h1>
                <h3>Please Sign In / Sign Up To Start Using This Site :)</h3>
            </div>

        );
};

export default withRouter(UserProfile);
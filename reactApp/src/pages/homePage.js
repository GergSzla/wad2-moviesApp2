import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { withRouter } from "react-router-dom";
import "./homePage.css"



const HomePage = () => {
     const context = useContext(AuthContext);

     return context.isAuthenticated ? (

          <div className="welcomeMsg">
               <h1>Welcome to MovList, {context.userName}!</h1>
          </div>

     ) : (

               <div className="welcomeMsg">
                    <h1>Welcome to MovList!</h1>
                    <h3>Please Sign In / Sign Up To Start Using This Site :)</h3>
               </div>

          );
};

export default withRouter(HomePage);
import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import{ Form, Button, Card, Alert } from 'react-bootstrap'


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>
      
        <Card.Body className = " text-center mt-5 ">
          <h1 id="headerSU" className="text-center mb-4"> Register</h1>

            <Form.Group className="text-left" id = "unFieldSU">
              <Form.Label> Username</Form.Label>
              <Form.Control  value={userName} placeholder="Username" onChange={e => {setUserName(e.target.value);}}></Form.Control>
            </Form.Group>

            <Form.Group className="text-left" id = "pwFieldSU">
              <Form.Label> Password</Form.Label>
              <Form.Control  value={password} type="password" placeholder="Password" onChange={e => {setPassword(e.target.value);}}></Form.Control>
            </Form.Group>

           <Form.Group className="text-left" id = "pwReFieldSU">
              <Form.Label> Password Again</Form.Label>
              <Form.Control value={passwordAgain} type="password" placeholder="Confirm Password" onChange={e => {setPasswordAgain(e.target.value);}}></Form.Control>
            </Form.Group>

          <Button id ="btnReg" onClick={register} className = "text-center w-50 " type = "submit" > Sign Up</Button>

          <div  className = "w-100 text-center mt-2">
           Have an Account ? <Link className = "link" to = "/login" > Login</Link>
          </div>
          
        </Card.Body>
    </>
  );
};

export default SignUpPage;
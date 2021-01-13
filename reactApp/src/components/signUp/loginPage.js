import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import { Form, Button } from 'react-bootstrap'


const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const login = () => {
    context.authenticate(userName, password);
  };
  
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>

      <h1 className="text-center mb-4">Login</h1>

      <Form.Group className="text-left" id="password">
        <Form.Label> Username</Form.Label>
        <Form.Control id="username" placeholder="Username" onChange={e => { setUserName(e.target.value); }}></Form.Control>
      </Form.Group>

      <Form.Group className="text-left" id="password">
        <Form.Label> Password</Form.Label>
        <Form.Control id="password" type="password" placeholder="Password" required onChange={e => { setPassword(e.target.value); }}></Form.Control>
      </Form.Group>

      <Button onClick={login} className="text-center w-50 " type="submit" > Log in</Button>

      <div className="w-100 text-center mt-2">
        Need an account ? <Link className="link" to="/signup" > Sign up</Link>
      </div>
    </>
  );
};

export default LoginPage;
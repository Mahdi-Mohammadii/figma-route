import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";


const Section = styled.section`
    display: flex;
  `;
const Form = styled.form`
    width: min-content;
    margin: 8% auto;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 20px;
  `;
const Label = styled.label`
    color: #1f2e35;
  `;
const Div = styled.div`
    margin-top: 10px;
  `;

const LoginPage = () => {
  const [remember, setRemember] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();



  function rememberHandler() {
    setRemember(!remember);
  }

  function tokenGenerator(e) {
    e.preventDefault();
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i <= 12; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars[randomNumber];
    }
    setToken(password);
    if (remember) {
      localStorage.setItem("token", password);
    } else {
      sessionStorage.setItem("token", password);
    }
    return navigate('/');
  }
  return (
    <>
      <Section>
        <Form onSubmit={tokenGenerator}>
          <h3 className="Login__h3">Login</h3>
          <Div>
            <Label>Username</Label>
            <input type="text" id="username" name="username" />
          </Div>
          <Div>
            <Label>Password</Label>
            <input type="password" id="password" name="password" />
          </Div>
          <Div>
            <Label>Remember Me</Label>
            <input
              type="checkbox"
              checked={remember}
              onChange={rememberHandler}
            />
          </Div>
          <Div>
            <input type="Submit" className="header__nav__button" />
          </Div>
        </Form>
        {/*<Form onSubmit={tokenGenerator}>*/}
        {/*  <h3 className="Login__h3">Regester</h3>*/}
        {/*  <Div>*/}
        {/*    <Label>Username</Label>*/}
        {/*    <input type="text" />*/}
        {/*  </Div>*/}
        {/*  <Div>*/}
        {/*    <Label>Password</Label>*/}
        {/*    <input type="password" id="password" name="password" />*/}
        {/*  </Div>*/}
        {/*  <Div>*/}
        {/*    <Label>Confirm Password</Label>*/}
        {/*    <input type="password" />*/}
        {/*  </Div>*/}
        {/*  <Div>*/}
        {/*    <input type="Submit" className="header__nav__button" />*/}
        {/*  </Div>*/}
        {/*</Form>*/}
      </Section>
    </>
  );
};

export default LoginPage;

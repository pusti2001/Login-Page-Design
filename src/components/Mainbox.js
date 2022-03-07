import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import plogo from "../assets/plogo.svg";
import Input from './Input';
import usericon from "../assets/usericon.svg";
import passkey from "../assets/passkey.svg";

const Mainbox = () => {
  return (
    <Containershad>
        <Container>
            <LogoWrapper>
                <img src={plogo}/>
            </LogoWrapper>
            <Form>
                <h3>Login</h3>
                <h4>Sign in to your account</h4>
                <div>
                    <img src={usericon}/>
                    <Input placeholder="Username" type="text"/>
                </div>
                <div>
                    <img src={passkey}/>
                    <Input placeholder="Password" type="password"/>
                </div>
                <Button>Login</Button>
                <a href='#'>I forgot my password. Click here to reset</a>
                <Reg>Register New Account</Reg>
            </Form>
        </Container>
    </Containershad>
  )
}

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

    h3{
        font-weight: 800;
        font-size: 30px;
        color: #7D9AFF;
        margin-bottom: 1px;
    }
    h4{
        font-weight: 800;
        font-size: 13px;
        font-style: normal;
        font-weight: normal;
        color: #888686;
        margin-bottom: 2rem;
    }
    a{
        font-weight: 800;
        font-size: 13px;
        font-style: normal;
        font-weight: normal;
        color: #888686;
        margin-bottom: 2rem;
    }
    div{
        display: flex;
        flex-direction: row;
        background: #e9edff;
        padding: 2.5px;
        border-radius: 3px;
        &:hover{
            transform: translateY(-3px);
        }
        margin: 5px;
        max-width: 350px;
        min-width: 275px;
        height: 29px;
        border-bottom: 3px solid rgba(125, 154, 255, 0.5);;
    }
    img{
        height: 15px;
        width: 30px;
        margin-top: 7px;
    }
`
const Reg = styled.button`
    width: 77%;
    max-width: 350px;
    min-width: 275px;
    height: 33px;
    padding: 0 1rem;
    border: 2px solid #888686;
    margin: 0.5rem 0;
    background-color: white;
    border-radius: 3px;
    color: #888686;
    font-style: normal;
    font-weight: 600;
    transition: all 0.2 ease-in;

    &:hover{
        transform: translateY(-3px);
    }
`
const Button = styled.button`
    width: 77%;
    max-width: 350px;
    min-width: 275px;
    height: 33px;
    padding: 0 1rem;
    border: none;
    margin: 0.5rem 0;
    background-color: #7D9AFF;
    border-radius: 3px;
    color: white;
    font-style: normal;
    font-weight: 600;
    transition: all 0.2 ease-in;

    &:hover{
        transform: translateY(-3px);
    }
`

const LogoWrapper = styled.div `
    background-color: transparent;
    img{
        height: 2.5rem;
        width: 4rem;
        margin-top: 35px;
    }
`

const Container = styled.div `
    position: absolute;
    height: 450px;
    width: 400px;
    bottom: 8px;
    right: 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
`;

const Containershad = styled.div `
    position: absolute;
    height: 450px;
    width: 400px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #7D9AFF;
    border-radius: 3px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
`;

export default Mainbox

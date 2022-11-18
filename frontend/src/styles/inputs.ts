import styled from 'styled-components';
import { FaTelegram } from 'react-icons/fa';

export const LoginInput = styled.input`
  font-family: inherit;
  width: 60%;
  padding: 1rem;
  font-size: 30px;
  border: none;
  margin: 1rem;
  outline: inherit;
  :focus{
    border:#bbb6c6 solid 4px;
  }
  @media screen and (max-width: 800px){
    font-size: 20px;
  }
  @media screen and (max-width: 550px){
    width: 80%;
    font-size: 15px;
  }
`;

export const LoginButton = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  height: 3rem;
  width: 15rem;
  border-radius: 1rem;
  font-size: 20px;
 
  margin: 1rem;
  background-color: royalblue;
  border: none;
  color: lightcyan;
  :hover{
    cursor: pointer;
    background-color: deepskyblue;

  }
  @media screen and (max-width: 800px){
    font-size: 15px;
    width: 12rem;
    height: 2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  @media screen and (max-width: 550px){
    width: 40%;
    font-size: 15px;
  }
`;

export const MessageInput = styled.input`
  font-family:  'Quicksand', sans-serif;
  padding: 0 1rem;
  width: 60%;
  font-size: 20px;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  
  @media screen and (max-width: 550px){
    margin-left: 10px;
    padding: 0 0.5rem;
    font-size: 15px;
    height: 2rem;
  }
`;
export const SendIcon = styled(FaTelegram)`
  cursor: pointer;
  margin: 1rem;
  color: #6c52a0;
`;

import styled from 'styled-components';

export const ChatAppBody = styled.div`
  display: flex;
  height:100vh;
  width: 100%;
  background-color: #c2bcce;
  justify-content: center;
  align-items: center;
`;

export const ChatAppContainer = styled.div`
  display: flex;
  height: 80%;
  width: 70%;
  border-radius: 2rem;
  background-color: #f2f1f4;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px){
    justify-content: center;
  }

  @media screen and (max-width: 750px){  
    height: 95%;
    width: 80%;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  font-family:  'Quicksand', sans-serif;
`;

export const Header = styled.div`
  height: 8.9rem;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #cecece 1px solid;
  width: 100%;
  
  @media screen and (max-width: 900px){
    font-size: 20px;
  }
`;

export const OnlineUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OnlineUser = styled.div`
  border-bottom: #cecece 1px solid;
  display: flex;
  text-align: center;
  height: 4rem;
  width: 100%;
  font-size: 30px;
  min-height: 4rem;
  align-items: center;
  justify-content: flex-start ;
  padding-left:10px;
  
  :hover{
    color: plum;
  }

  @media screen and (max-width: 1000px){
    font-size: 20px;
  }
`;

export const ChatsBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 30%;
  border-radius:  2rem 0 0 2rem;
  border-right: #cecece 1px solid;
  font-family:  'Quicksand', sans-serif;

  @media screen and (max-width: 550px){
    display: none;
    font-size: 10px;
  }
  @media screen and (max-width: 700px){
    font-size: 10px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 8rem;
  width: 100%;
  border-bottom: #cecece 1px solid;
  @media screen and (max-width: 600px ){
    height: 4rem;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50rem;
  width: 100%;
  font-family:  'Quicksand', sans-serif;
  overflow: auto;
`;

export const MessagingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  border-radius:  0 2rem 2rem 0;
  @media screen and (max-width: 550px){
    width: 70vw;
    border-radius: 2rem;
  }
`;

export const Chatting = styled.div`   
  font-size: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:  'Quicksand', sans-serif;
  @media screen and (max-width: 600px ){
    font-size: 17px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  border-radius:  0 0 2rem 0;
  border-top: #cecece 1px solid;
`;

import styled from 'styled-components';

export const ProfileNameHeader = styled.text`
  font-size: 30px; 
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:  'Quicksand', sans-serif;
  @media screen and (max-width: 600px ){
    font-size: 17px;
  }
`;

export const MessageBox = styled.text<{ own: boolean }>`
  font-family:  'Quicksand', sans-serif;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius:${({ own }) => (own ? '0.5rem 0.5rem 0 0.5rem' : '0.5rem 0.5rem 0.5rem 0')};
  background-color: ${({ own }) => (own ? '#bbb6c6' : '#6c52a0')};
  align-self: ${({ own }) => (own ? 'flex-end' : 'flex-start')};
  color: ${({ own }) => (own ? null : '#f2f1f4')};
  margin: 1rem 2rem;
  text-align: center;
  min-height: 4rem;
 
  animation-name: createMessage;
  animation-duration: 1s;
  @keyframes createMessage {
    from {opacity: 0;}
    to {opacity: 100%;}
  }
  
  @media screen and (max-width: 1000px){
    padding: 0 0.5rem;
    margin: 0.5rem 1rem;
    min-height: 3rem;
  }
`;

export const ProfileName = styled.text<{ own: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({ own }) => (own ? 'flex-end' : 'flex-start')};
  text-align: center;
  margin: 0 1rem;
  color: ${({ own }) => (own ? 'darkgray' : '#51348f')};;
  font-size: 12px;
  animation-name: createMessage;
  animation-duration: 0.5s;
  @keyframes createMessage {
    from {opacity: 0;}
    to {opacity: 100%;}
  }
  
`;

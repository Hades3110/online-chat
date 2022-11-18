import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MessagesContext } from '../context/MessagesContext';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';

import { LoginContainer  } from '../styles/containers'
import { LoginInput, LoginButton } from '../styles/inputs'

const socket = io('http://localhost:3000');

const Login = () => {
    const { setLiveUser } = useContext(MessagesContext);
    const [newUserName, setNewUserName] = useState<string>('');
    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => (event.key === 'Enter' ? addLiveUser() : null);

    const createLoginUser = () => {
        socket.emit('online', { userName: newUserName });
    };
    const addLiveUser = () => {
        if (newUserName) {
            setLiveUser((prevState) => ({
                ...prevState,
                loginUserName: newUserName,
                isLogin: true,
                loginUserId: (Math.random() * 100).toFixed(0),
            }));
            createLoginUser();
        } else {
            toast.error('Please, type a name!', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <LoginContainer>
            <LoginInput
                placeholder="enter your name"
                value={newUserName}
                onKeyDown={handleEnter}
                onChange={((event: React.ChangeEvent<HTMLInputElement>) => setNewUserName(event.target.value))}
            />

            {/* eslint-disable-next-line react/button-has-type */}
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <LoginButton onClick={() => addLiveUser()}>
                Login
            </LoginButton>
        </LoginContainer>
    );
};
export default Login;

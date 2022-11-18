import React, { useState, useContext } from 'react';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import { MessagesContext } from '../../context/MessagesContext';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

import { SendIcon, MessageInput } from '../../styles/inputs'
import { FooterContainer } from '../../styles/containers'

const socket = io('http://localhost:3000');

const MessagingFooter = () => {
    const { liveUser } = useContext(MessagesContext);
    const [messageContent, setMessageContent] = useState<string>('');
    const { loginUserId: id, loginUserName: name } = liveUser;

    const sendMessage = () => {
        if (messageContent) {
            socket.emit('message', { messageContent, id, name });
            setMessageContent('');
        } else {
            toast.error('Please, type a message! ', {
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

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => (event.key === 'Enter' ? sendMessage() : null);
    return (
        <FooterContainer>
            <MessageInput
                value={messageContent}
                onChange={(event) => setMessageContent(event.target.value)}
                onKeyDown={handleEnter}
                placeholder="type message here"
            />
            <SendIcon
                size={45}
                onClick={() => sendMessage()}
            />
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
        </FooterContainer>
    );
};

export default MessagingFooter;

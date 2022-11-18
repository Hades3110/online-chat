import React, { useContext } from 'react';
import { MessagesContext } from '../../context/MessagesContext';

import { ChatsBoxContainer, Header, OnlineUsers, OnlineUser } from '../../styles/containers'

const ChatsBox = () => {
    const { onlineUsers } = useContext(MessagesContext);
    return (
        <ChatsBoxContainer>
            <Header>Online Users</Header>
            <OnlineUsers>{onlineUsers.map((user) => <OnlineUser>{`${user.userName} 👋 `}</OnlineUser>)}</OnlineUsers>
        </ChatsBoxContainer>
    );
};
export default ChatsBox;

import React from 'react';
import MessagingHeader from './MessagingHeader';
import MessagingFooter from './MessagingFooter';
import Messages from './Messages';
import { MessagingBoxContainer } from '../../styles/containers'

const MessagingBox = () => (
    <MessagingBoxContainer>
        <MessagingHeader />
        <Messages />
        <MessagingFooter />
    </MessagingBoxContainer>
);
export default MessagingBox;


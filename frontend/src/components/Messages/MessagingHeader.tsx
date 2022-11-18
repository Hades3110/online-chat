import React, { useContext } from 'react';
import { MessagesContext } from '../../context/MessagesContext';

import { HeaderContainer, Chatting } from '../../styles/containers';
import { ProfileNameHeader } from '../../styles/texts'

const MessagingHeader = () => {
    const { liveUser } = useContext(MessagesContext);
    const { loginUserName } = liveUser;

    return (
        <HeaderContainer>
            <ProfileNameHeader>
                {`Welcome ${loginUserName} 👋`}
            </ProfileNameHeader>
            <Chatting />
        </HeaderContainer>
    );
};
export default MessagingHeader;

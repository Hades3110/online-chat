import React, {useContext, useRef, useEffect, RefObject} from 'react';
import { MessagesContext } from '../../context/MessagesContext';

import { MessagesContainer,  } from '../../styles/containers';
import { MessageBox, ProfileName } from '../../styles/texts';

const Messages = () => {
    const messagesRef: RefObject<HTMLDivElement> = useRef(null);
    const { allUserMessages, liveUser } = useContext(MessagesContext);
    const { loginUserId } = liveUser;
    useEffect(() => {
        if (messagesRef && messagesRef.current) {
            const element = messagesRef.current;
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: 'smooth',
            });
        }
    }, [messagesRef, allUserMessages]);
    return (
        <MessagesContainer ref={messagesRef}>
            {allUserMessages
                .map((message) => (
                    <>
                        <MessageBox
                            own={loginUserId === message.id}
                        >
                            {message.messageContent}
                        </MessageBox>
                        <ProfileName own={loginUserId === message.id}>{message.name}</ProfileName>
                    </>
                ))}
        </MessagesContainer>
    );
};
export default Messages;

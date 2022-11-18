import React, { useContext } from 'react';
import { ChatsBox, Login, MessagingBox } from './components';
import { ChatAppBody, ChatAppContainer } from './styles/containers';
import { MessagesContext } from './context/MessagesContext';

function App() {
    const { liveUser } = useContext(MessagesContext);

    return (
        <ChatAppBody>
            <ChatAppContainer>
                <ChatsBox />
                {liveUser.isLogin ? <MessagingBox /> : <Login />}
            </ChatAppContainer>
        </ChatAppBody>
    );
}

export default App;

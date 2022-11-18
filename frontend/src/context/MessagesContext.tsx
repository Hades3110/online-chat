import React, {createContext, useState, useEffect, ReactNode} from 'react';
import io from 'socket.io-client';

interface ChatProp {
    children: ReactNode;
}

interface AllUserMessages {
    messageContent: string;
    id: string;
    name: string;
}

interface OnlineUsers {
    userName: string;
}

interface LiveUser {
    isLogin: boolean;
    loginUserName: string;
    loginUserId: string;
}

interface Context {
    allUserMessages: AllUserMessages[];
    setAllUserMessages: React.Dispatch<React.SetStateAction<AllUserMessages[]>>;
    liveUser: LiveUser;
    setLiveUser: React.Dispatch<React.SetStateAction<LiveUser>>,
    setOnlineUsers: React.Dispatch<React.SetStateAction<OnlineUsers[]>>,
    onlineUsers: OnlineUsers[],
}
export const MessagesContext = createContext<Context>({} as Context);
const socket = io('http://localhost:3000');

const Chat = ({ children }: ChatProp) => {
    const [allUserMessages, setAllUserMessages] = useState<AllUserMessages[]>([]);
    const [onlineUsers, setOnlineUsers] = useState<OnlineUsers[]>([]);
    const [liveUser, setLiveUser] = useState({ isLogin: false, loginUserName: '', loginUserId: '' });

    useEffect(() => {
        socket.on('message', ({ messageContent, id, name }) => {
            setAllUserMessages((prevState) => [...prevState, { messageContent, id, name }]);
        });
    }, []);

    useEffect(() => {
        socket.on('online', ({ userName }) => {
            setOnlineUsers((prevUsers) => [...prevUsers, { userName }]);
        });
    }, []);

    return (
        <MessagesContext.Provider
            value={{
                allUserMessages,
                setAllUserMessages,
                liveUser,
                setLiveUser,
                setOnlineUsers,
                onlineUsers,
            }}
        >
            {children}
        </MessagesContext.Provider>
    );
};
export default Chat;

import React, { useEffect, useRef } from "react";
import { Message, useGetMessages } from "../api/chats/GetMessages";
import TimeAgo from './TimeAgo';
// UserAvatar component
const UserAvatar: React.FC = () => {
    return (
        <div className="avatar pb-5">
            <img src="user_avatar.png" alt="User Avatar" style={{ width: '60px' }} />
        </div >
    );
};

// GPTAvatar component
const GPTAvatar: React.FC = () => {
    return (
        <div className="avatar" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src="pp_gpt.png" alt="GPT Avatar" style={{ width: '90px' }} />
        </div>
    );
};

const MessagesCanvas: React.FC = () => {

    const { data: messagesData, isPending: messagesDataLoading } = useGetMessages()
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            // Delay scroll operation to ensure the page is fully rendered
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 0);
        }
    }, [messagesData])
    return (
        <>
            <div className="left-1/4 fixed inset-x-3 pr-40 pl-10 bottom-20 overflow-y-auto h-5/6">
                {!messagesDataLoading && <ul>
                    {messagesData?.reverse()?.map((message: Message, index) => (
                        <li key={index} className={message.role === "USER" ? "text-left" : "text-right"}>
                            <div>
                                <div>
                                    {message.role === "USER" ? <UserAvatar /> : <GPTAvatar />}
                                </div>
                            </div>

                            <div className={message.role === "USER" ? "bg-slate-200 rounded-lg p-3" : " rounded-lg pr-10 p-3 bg-blue-100"}>
                                {message.text}
                            </div>
                            <div className="pl-5 pr-5">
                                <TimeAgo timestamp={message.created_at} />
                            </div>
                            <br />
                            <br />
                        </li>
                    ))}
                    <div ref={messagesEndRef} />
                </ul>}
            </div>
        </>
    )
}
export default MessagesCanvas;
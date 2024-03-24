import React, { useEffect, useRef } from "react";
import { Message, useGetMessages } from "../api/chats/GetMessages";

const MessagesCanvas: React.FC = () => {

    const { data: messagesData, isPending: messagesDataLoading } = useGetMessages()
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messagesData])
    return (
        <>
            <div className="left-1/3 fixed inset-x-1/4 bottom-20 overflow-y-auto h-5/6">
                {!messagesDataLoading && <ul>
                    {messagesData?.reverse()?.map((message: Message, index) => (
                        <li key={index} className={message.role === "USER" ? "text-left" : "text-right"}>
                            {message.role}
                            <br />
                            {message.text}
                            <br />
                            {message.created_at}
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
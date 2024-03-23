import React from "react";
import { Message, useGetMessages } from "../api/chats/GetMessages";

const MessagesCanvas: React.FC = () => {

    const { data: messagesData, isPending: messagesDataLoading } = useGetMessages()
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
                </ul>}
            </div>
            {/* <div className="left-1/2 fixed top-1/2">
                Message Canvas
            </div> */}
        </>
    )
}
export default MessagesCanvas;
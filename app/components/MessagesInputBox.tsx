import React, { FormEvent, useEffect, useState } from "react";
import { useCreateMessage } from "../api/chats/CreateMessage";
import { useQueryClient } from "@tanstack/react-query";

const MessagesInputBox: React.FC = () => {
    const [message, setMessage] = useState('');
    const { data: messageData, mutate: mutateCreateChat, isPending: messageLoading } = useCreateMessage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await mutateCreateChat(message);
            setMessage("");
        } catch (error) {
            console.error("Error creating chat:", error);
        }
    };

    return (
        <>
            <div className="chat-input-container left-1/3 bottom-0 fixed pb-5 flex p-2">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={message}
                        onChange={handleChange}
                        placeholder="Type your message..."
                        className="chat-input mr-2 rounded-lg text-center border border-gray-500 p-2"
                        style={{ width: '39vw' }}
                        disabled={messageLoading}
                    />
                    <button type="submit"
                        className={!messageLoading ? "submit-button bg-black text-white py-2 px-4 rounded-xl text-center" : "bg-slate-300 backdrop-blur-0 text-black py-2 px-4 rounded-xl text-center"}
                        disabled={messageLoading || message.length < 10}
                    >
                        {messageLoading ? ("Loading...") : ("Submit")}
                    </button>
                </form>
            </div >
        </>
    )

}

export default MessagesInputBox;
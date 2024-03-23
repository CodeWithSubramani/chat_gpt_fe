import React, { FormEvent, useEffect, useState } from "react";
import { useCreateMessage } from "../api/chats/CreateMessage";

const MessagesInputBox: React.FC = () => {
    const [message, setMessage] = useState('');
    const { data: messageData, mutate: mutateCreateChat, isLoading: messageLoading } = useCreateMessage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };



    const handleSubmit = async () => {
        try {
            console.log("messageData before Mutate", messageData);
            await mutateCreateChat(message);
            console.log("messageData after Mutate", messageData);
            setMessage("");
        } catch (error) {
            console.error("Error creating chat:", error);
        }
    };

    return (
        <>
            <div className="chat-input-container left-1/3 bottom-0 fixed pb-5 flex p-2">
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    className="chat-input mr-2 rounded-lg text-center border border-gray-500"
                    style={{ width: '33vw' }}
                    disabled={messageLoading}
                />
                <button
                    onClick={handleSubmit}
                    className="submit-button bg-black text-white py-2 px-4 rounded-xl"
                    disabled={messageLoading}
                >
                    {messageLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </>
    )

}

export default MessagesInputBox;
import React, { useState } from "react";

const MessagesInputBox: React.FC = () => {
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async () => {
        setMessage('');
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
                />
                <button onClick={handleSubmit} className="submit-button bg-black text-white py-2 px-4 rounded-xl">
                    Submit
                </button>
            </div>
        </>
    )

}

export default MessagesInputBox;
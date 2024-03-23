import React from 'react';

interface SideChatBarProps {
  chats: string[];
}

const SideChatBar: React.FC<SideChatBarProps> = ({ chats }) => {
  return (
    <div className="side-chat-bar fixed h-full w-1/5 left-0 top-0 overflow-y-auto">
      <h2 className="text-xl text-white p-4">Chats</h2>
      <div className="h-full overflow-y-auto">
        <ul>
          {chats.map((chat, index) => (
            <li className="bg-gray-100 ml-2 p-2" key={index}>
              {chat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default SideChatBar;

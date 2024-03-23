'use client'
import React, { useState } from 'react';
import { Chat, useGetChats } from '../api/chats/GetChats';

interface SideChatBarProps {
  chats: string[];
}

const SideChatBar: React.FC<SideChatBarProps> = ({ chats }) => {


  const { data: chatsData, isLoading: chatsLoading } = useGetChats();
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const handleCollapse = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  return (
    <>
      <h2 className="text-xl text-white p-4 fixed left-0 top-0">Chats</h2>
      {isSideBarOpen ?
        <>

          <div className="h-full overflow-y-auto">
            <div className="side-chat-bar fixed h-full w-1/5 left-0 top-30 overflow-y-auto">
              <ul>
                {chatsData?.map((chat: Chat, index) => (
                  <li className="bg-gray-100 ml-2 p-2" key={index}>
                    <button>
                      {chat.name}
                    </button>
                  </li>
                ))}
                <button
                  className='fixed left-0 bottom-0 p-4'
                  onClick={handleCollapse}>{!isSideBarOpen ? "Expand" : "Collapse"}</button>
              </ul>
            </div>
          </div>
        </> :
        <>
          <button
            className='fixed left-0 bottom-0 p-4'
            onClick={handleCollapse}>{!isSideBarOpen ? "Expand" : "Collapse"}
          </button>
        </>
      }
    </>
  );
}


export default SideChatBar;

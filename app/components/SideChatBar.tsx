'use client'
import React, { useState } from 'react';
import { Chat, useGetChats } from '../api/chats/GetChats';



const SideChatBar: React.FC = () => {


  const { data: chatsData, isPending: chatsLoading } = useGetChats();
  const [isSideBarOpen, setSideBarOpen] = useState(true)

  const handleCollapse = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  return (
    <>
      <h2 className="text-xl text-white p-4 fixed left-0 top-0">Chats</h2>

      <h2 className='w-full bottom-0 p-4 pt-10 fixed bg-gray-100'>.</h2>
      {isSideBarOpen ?
        <>
          <div className="h-full overflow-y-auto">
            <div className="side-chat-bar fixed h-full w-1/6 left-0 top-30 overflow-y-auto">
              {!chatsLoading &&
                <ul>
                  {chatsData?.map((chat: Chat, index) => (
                    <li className="bg-gray-100 ml-2 p-2" key={index}>
                      <button>
                        {chat.name}
                      </button>
                    </li>
                  ))}
                  <button
                    className='fixed left-0 bottom-0 p-4 px-20'
                    onClick={handleCollapse}>{!isSideBarOpen ? "Expand" : "Collapse"}</button>
                </ul>}
            </div>
          </div>
        </> :
        <>
          <button
            className='fixed left-0 bottom-0 p-4 px-20 '
            onClick={handleCollapse}>{!isSideBarOpen ? "Expand" : "Collapse"}
          </button>
        </>
      }
    </>
  );
}


export default SideChatBar;

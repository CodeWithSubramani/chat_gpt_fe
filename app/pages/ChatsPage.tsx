import React from "react";
import Header from "../components/Header";
import SideChatBar from "../components/SideChatBar";
import MessagesPage from "./MessagesPage";

const ChatsPage = () => {
    return (
        <>
            <Header title="Welcome to GFCCP-GPT" />
            <SideChatBar />
            <MessagesPage />
        </>

    )
}

export default ChatsPage;
import React, { useState } from "react";
import MessagesInputBox from "../components/MessagesInputBox";
import MessagesCanvas from "../components/MessagesCanvas";

const MessagesPage: React.FC = () => {

    return (
        <>
            <MessagesCanvas />
            <MessagesInputBox />
        </>
    )

}

export default MessagesPage;
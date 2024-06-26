
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/app/constants";
export const chat_id: string = '8f141c6e-2382-4014-82d0-2b858f9a85fd'

export interface Message {
    id: string;
    text: string;
    chat_id: string;
    role: string;
    created_at: string;
    modified_at: string;
}
export const getMessages = async (): Promise<Message[]> => {
    try {

        const response = await fetch(
            `${API_URL}/messages/chat_id/${chat_id}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json;charset=UTF-8",
                },
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch assets");
        }
        const data: Message[] = await response.json();
        console.log(data, chat_id, "messages for this chat_id");
        return data;

    } catch (error) {
        console.error("Error fetching chats:", error);
        throw error;
    }
}

export const useGetMessages = () => {
    const { data, isPending } = useQuery({
        queryKey: ["messages"],
        queryFn: getMessages
    });
    return { data, isPending }
}
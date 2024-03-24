import { API_URL } from "@/app/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Message, chat_id } from "./GetMessages";

export const createMessage = async (text: string): Promise<Message> => {
    try {
        const response = await fetch(
            `${API_URL}/messages`,
            {
                method: "POST",
                body: JSON.stringify({
                    text: text,
                    chat_id: chat_id
                }),
                headers: {
                    "Content-type": "application/json;charset=UTF-8",
                },
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch assets");
        }
        const data: Message = await response.json();
        console.log(data, "message");
        return data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }

}

export const useCreateMessage = () => {
    const queryClient = useQueryClient()
    const { data, mutate, isPending } = useMutation({
        mutationFn: createMessage,
        onSuccess: async (successData) => {
            console.log("create message", successData);
            queryClient.invalidateQueries()
        },

    });
    return { data, mutate, isPending }
}
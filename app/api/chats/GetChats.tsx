import { useQuery } from 'react-query';
import { API_URL } from '../../constants';

export interface Chat {
    id: string;
    name: string;
    description: string;
    modified_at: string;
    created_at: string;
    upload_id: string;
}

export const getChats = async (): Promise<Chat[]> => {
    try {
        const response = await fetch(
            `${API_URL}/chats`,
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
        const data: Chat[] = await response.json();
        console.log(data, "chats");
        return data;
    } catch (error) {
        console.error("Error fetching chats:", error);
        throw error;
    }
};


export const useGetChats = () => {
    const { data, isLoading } = useQuery('chats', getChats, {
        onSuccess: async (successData) => {
            console.log("create order", successData);
        },
    });

    return { data, isLoading };
};
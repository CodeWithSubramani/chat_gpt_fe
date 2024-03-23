'use client'
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import SideChatBar from "./components/SideChatBar";
import ChatsPage from "./pages/chats";

export default function Home() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChatsPage />
      </QueryClientProvider>
    </>
  );
}

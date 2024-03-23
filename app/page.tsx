'use client'
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import SideChatBar from "./components/SideChatBar";

export default function Home() {

  const chats = [];

  for (let i = 1; i <= 100; i++) {
    chats.push(`Chat ${i}`);
  };
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header title="Welcome to GFCCP-GPT" />
        <SideChatBar chats={chats} />
      </QueryClientProvider>
    </>
  );
}

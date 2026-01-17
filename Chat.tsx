import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MoreVertical, Send, ShieldCheck, AlertCircle } from "lucide-react";

const chatData = {
  name: "Priya Sharma",
  image: "/src/assets/profile-1.jpg",
  online: true,
  verified: true,
  messages: [
    { id: 1, sender: "other", text: "Hey! I saw we matched on Roomie Match.", time: "10:30 AM" },
    { id: 2, sender: "user", text: "Hi! Yes, nice to meet you 😄", time: "10:32 AM" },
    { id: 3, sender: "other", text: "Looking around Indiranagar or Koramangala.", time: "10:35 AM" },
  ],
};

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chatData.messages);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b">
        <Link to="/messages">
          <ArrowLeft />
        </Link>

        <img src={chatData.image} className="w-10 h-10 rounded-full" />

        <div className="flex-1">
          <div className="flex items-center gap-1 font-semibold">
            {chatData.name}
            {chatData.verified && <ShieldCheck className="w-4 h-4 text-green-500" />}
          </div>
          <p className="text-xs text-gray-500">
            {chatData.online ? "Online" : "Offline"}
          </p>
        </div>

        <MoreVertical />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m) => (
          <div key={m.id} className={`mb-3 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${m.sender === "user"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-900"
                }`}
            >
              {m.text}
              <div className="text-[10px] opacity-60 mt-1 text-right">
                {m.time}
              </div>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white border-t">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border rounded-full outline-none"
        />
        <button
          onClick={sendMessage}
          disabled={!message.trim()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white disabled:opacity-40"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Chat;

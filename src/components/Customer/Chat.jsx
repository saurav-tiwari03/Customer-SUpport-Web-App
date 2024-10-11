import { useParams } from "react-router-dom";

export function Chat() {
  const {id} = useParams();
  console.log(id);

  const messages = [
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "agent",
      time: "10:00 AM",
    },
    {
      id: 2,
      text: "I have an issue with my account.",
      sender: "customer",
      time: "10:02 AM",
    },
    {
      id: 3,
      text: "Sure! Can you provide more details?",
      sender: "agent",
      time: "10:03 AM",
    },
    {
      id: 4,
      text: "I cannot log in. It says my password is incorrect.",
      sender: "customer",
      time: "10:04 AM",
    },
    {
      id: 5,
      text: "Let me check that for you. One moment please.",
      sender: "agent",
      time: "10:05 AM",
    },
    {
      id: 6,
      text: "It seems like your account is locked due to multiple failed attempts.",
      sender: "agent",
      time: "10:07 AM",
    },
    {
      id: 7,
      text: "Oh, I see. Can it be unlocked?",
      sender: "customer",
      time: "10:08 AM",
    },
    {
      id: 8,
      text: "Yes, I will unlock it for you. Please wait a moment.",
      sender: "agent",
      time: "10:09 AM",
    },
    {
      id: 9,
      text: "Your account is now unlocked. Try logging in again.",
      sender: "agent",
      time: "10:11 AM",
    },
    {
      id: 10,
      text: "Thank you! It worked.",
      sender: "customer",
      time: "10:12 AM",
    },
    {
      id: 11,
      text: "You're welcome! Is there anything else I can assist you with?",
      sender: "agent",
      time: "10:13 AM",
    },
  ];

  return (
    <div className="flex flex-col w-full pr-2 mt-14">
      {/* Chat Window */}
      <div className="flex-grow h-[70vh] p-4 border rounded-lg bg-gray-100 space-y-4 overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "customer" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.sender === "customer"
                  ? "bg-[#3eabd6] text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              <p>{message.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 mr-1">
                  {message.time}
                </span>
                <span>{message.sender}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-grow border rounded-lg p-2 mr-2"
          placeholder="Type your message..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

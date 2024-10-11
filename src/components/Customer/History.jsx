import { Link } from "react-router-dom";

export default function History() {
  // Dummy chat history data
  const chatHistory = [
    { id: 1, text: "Chat with John Doe", time: "10:00 AM" },
    { id: 2, text: "Chat with Jane Smith", time: "11:15 AM" },
    { id: 3, text: "Chat with Mark", time: "2:30 PM" },
    { id: 4, text: "Chat with Lisa", time: "3:45 PM" },
    { id: 5, text: "Chat with Steve", time: "4:00 PM" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[80vh] w-[40vh]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>
        <Link to="/customer">New Chat</Link>
      </div>
      <ul className="space-y-2">
        {chatHistory.length > 0 ? (
          chatHistory.map((chat) => (
            <li key={chat.id} className="flex justify-between border-b pb-2">
              <span>{chat.text}</span>
              <Link to={`/customer/chat/${chat.id}`} className="text-gray-500">
                View Chat
              </Link>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No chat history found.</li>
        )}
      </ul>
    </div>
  );
}

import { useState } from "react";
import { Button } from "../ui/button";

export default function SideBar() {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy chat history data
  const chatHistory = [
    "Chat with John Doe - 10:00 AM",
    "Chat with Jane Smith - 11:15 AM",
    "Chat with Mark - 2:30 PM",
    "Chat with Lisa - 3:45 PM",
    "Chat with Steve - 4:00 PM",
  ];

  // Filtered results based on search term
  const filteredResults = chatHistory.filter((chat) =>
    chat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[25%] p-4 bg-gray-100 h-[85vh] border-r-2 border-gray-300">
      {/* Toggle buttons */}
      <div className="flex justify-between mb-4">
        <Button
          className={`${
            isHistoryVisible
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } border border-blue-500 rounded-lg py-2 px-4 w-full mr-2`}
          onClick={() => setIsHistoryVisible(true)}
        >
          Chat History
        </Button>

        <Button
          className={`${
            !isHistoryVisible
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } border border-blue-500 rounded-lg py-2 px-4 w-full`}
          onClick={() => setIsHistoryVisible(false)}
        >
          Search
        </Button>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        {isHistoryVisible ? (
          <div>
            <h3 className="text-lg font-semibold mb-2">Chat History</h3>
            <ul className="space-y-2">
              {chatHistory.map((chat, index) => (
                <li key={index} className="border-b pb-2">
                  {chat}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul className="space-y-2">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <li key={index} className="border-b pb-2">
                    {result}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

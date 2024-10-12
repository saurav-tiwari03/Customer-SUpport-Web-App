/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTickets } from "@/hooks/getTickets";

function Modal({ title, content, onClose, onSearch }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl mb-4">{title}</h2>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search requests"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={onSearch}
        />
        <div className="mb-6">{content}</div>
        <Button
          onClick={onClose}
          className="bg-red-500 text-white rounded hover:bg-red-500"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default function RequestTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const [status, setStatus] = useState("resolved");

  const { getTickets, data, loading } = useGetTickets();
  const navigate = useNavigate();

  useEffect(() => {
    getTickets({ status });
  }, [getTickets, status]);

  const redirectHandler = (id) => {
    navigate(`/agent/ticket/${id}`);
    handleCloseModal();
  };

  const handleSearch = (requests) => {
    return requests.filter((request) =>
      request.issueTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleOpenModal = (type) => {
    setStatus(type);

    setModalContent({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Requests`,
      content: loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {handleSearch(data).map((request) => (
            <div
              key={request._id}
              className="flex gap-2 justify-between w-full bg-[#d1d5db] px-2 py-1 rounded m-1"
            >
              <li>
                <strong>Title:</strong> {request.issueTitle} <br />
                <strong>Username:</strong> {request.username} <br />
                <strong>Status:</strong> {request.status}
              </li>
              <Button
                onClick={() => redirectHandler(request._id)}
                className="text-blue-500 font-semibold"
              >
                View Chat
              </Button>
            </div>
          ))}
        </ul>
      ),
    });
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSearchQuery(""); 
  };
  const {id} = useParams();

  const updateStatusRequest = (data) => {
    if (data === "") return;
    console.log("Selected Status:", data,id);
  };

  return (
    <div className="flex gap-4 ">
      <Button
        onClick={() => handleOpenModal("assigned")}
        className="bg-[#3eabd6] rounded text-[#19355e] text-lg border-2 border-[#19355e]"
      >
        Assigned Request
      </Button>
      <Button
        onClick={() => handleOpenModal("pending")}
        className="bg-[#3eabd6] rounded text-[#19355e] text-lg border-2 border-[#19355e]"
      >
        Pending Request
      </Button>
      <Button
        onClick={() => handleOpenModal("resolved")}
        className="bg-[#3eabd6] rounded text-[#19355e] text-lg border-2 border-[#19355e]"
      >
        Resolved Request
      </Button>
      <div className="flex items-center gap-2">
        <span>Status :</span>
        <select
          name="status"
          id="status"
          onChange={(e) => updateStatusRequest(e.target.value)}
          value={status}
        >
          <option value="">Select Status</option>
          <option value="assigned">Assigned</option>
          <option value="unassigned">Unassigned</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {isOpen && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={handleCloseModal}
          onSearch={(e) => setSearchQuery(e.target.value)}
        />
      )}
    </div>
  );
}

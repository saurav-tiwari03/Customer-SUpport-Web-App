/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function Modal({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[500px]">
        <h2 className="text-xl mb-4">{title}</h2>
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
  const [status, setStatus] = useState(false);

  const assignedRequests = [
    { id: 132, description: "Issue with login credentials." },
    { id: 232, description: "Unable to reset password." },
  ];

  const pendingRequests = [
    { id: 122, description: "Payment gateway not working." },
    { id: 2534, description: "Cannot update profile picture." },
  ];

  const resolvedRequests = [
    { id: 1422, description: "Fixed error in email notification system." },
    { id: 287, description: "Resolved 404 error on dashboard page." },
  ];
  const navigate = useNavigate();

  const redirectHandler = (id) => {
    navigate(`/agent/chat/${id}`);
    handleCloseModal();
  };

  const handleOpenModal = (type) => {
    switch (type) {
      case "assigned":
        setModalContent({
          title: "Assigned Requests",
          content: (
            <ul>
              {assignedRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex gap-2 justify-between w-full bg-[#d1d5db] px-2 py-1 rounded m-1"
                >
                  <li>{request.description}</li>
                  <Button
                    onClick={() => redirectHandler(request.id)}
                    className="text-blue-500 font-semibold"
                  >
                    View Chat
                  </Button>
                </div>
              ))}
            </ul>
          ),
        });
        break;
      case "pending":
        setModalContent({
          title: "Pending Requests",
          content: (
            <ul>
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex gap-2 justify-between w-full bg-[#d1d5db] px-2 py-1 rounded m-1"
                >
                  <li>{request.description}</li>
                  <Button
                    onClick={() => redirectHandler(request.id)}
                    to="/agent/chat/:id"
                    className="text-blue-500 font-semibold"
                  >
                    View Chat
                  </Button>
                </div>
              ))}
            </ul>
          ),
        });
        break;
      case "resolved":
        setModalContent({
          title: "Resolved Requests",
          content: (
            <ul>
              {resolvedRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex gap-2 justify-between w-full bg-[#d1d5db] px-2 py-1 rounded m-1"
                >
                  <li>{request.description}</li>
                  <Button
                    onClick={() => redirectHandler(request.id)}
                    to="/chat/:id"
                    className="text-blue-500 font-semibold"
                  >
                    View Chat
                  </Button>
                </div>
              ))}
            </ul>
          ),
        });
        break;
      default:
        break;
    }
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
        <span className="">Status : </span>
        <Button
          onClick={() => setStatus(!status)}
          className={` rounded  text-lg  ${
            status
              ? "bg-green-500 hover:bg-green-500"
              : "bg-red-500 hover:bg-red-500"
          }`}
        >
          {status ? "Active" : "Inactive"}
        </Button>
      </div>

      {isOpen && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

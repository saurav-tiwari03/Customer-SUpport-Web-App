import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";

export default function CustomerInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Button with user icon */}
      <Button className="text-xl" onClick={handleToggleDropdown}>
        <FaRegUserCircle />
      </Button>

      {/* Dropdown for customer info */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
          <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Customer ID:</strong> 123456</p>
        </div>
      )}
    </div>
  );
}

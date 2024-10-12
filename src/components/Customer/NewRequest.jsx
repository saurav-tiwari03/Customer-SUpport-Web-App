import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import useRaiseTicket from "@/hooks/raiseTicket";

export function NewRequest() {
  const [selectedProblem, setSelectedProblem] = useState('');
  const [otherProblem, setOtherProblem] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('UserData'));
    if (storedUserData && storedUserData.role) {
      setUserData(storedUserData);
    }
  }, []);
  const problems = [
    'Network Error',
    'Error in Payment',
    'Delivery Date',
    'Others',
  ];

  const { raiseTicket } = useRaiseTicket();

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
    if (event.target.value !== 'Others') {
      setOtherProblem('');
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const issueTitle = selectedProblem === 'Others' ? otherProblem : selectedProblem;
    const username = userData?.customer?.username || "Unknown User"; // Fallback if username is not available

    const requestData = {
      issueTitle,
      username,
    };

    console.log(requestData);

    try {
      await raiseTicket(requestData);
      setSelectedProblem('');
      setOtherProblem('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg w-[50%] shadow-md">
      <h2 className="text-lg font-semibold mb-4">New Request</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="problem" className="block mb-2 font-medium">Select a Problem:</label>
          <select
            id="problem"
            value={selectedProblem}
            onChange={handleProblemChange}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">-- Select a Problem --</option>
            {problems.map((problem, index) => (
              <option key={index} value={problem}>
                {problem}
              </option>
            ))}
          </select>
        </div>

        {/* Input field for "Others" */}
        {selectedProblem === 'Others' && (
          <div className="mb-4">
            <label htmlFor="otherProblem" className="block mb-2 font-medium">Please specify:</label>
            <Textarea
              type="text"
              id="otherProblem"
              value={otherProblem}
              onChange={(e) => setOtherProblem(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={!selectedProblem || (selectedProblem === 'Others' && !otherProblem)}
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${!selectedProblem || (selectedProblem === 'Others' && !otherProblem) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

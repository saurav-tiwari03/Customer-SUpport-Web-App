import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export function NewRequest() {
  const [selectedProblem, setSelectedProblem] = useState('');
  const [otherProblem, setOtherProblem] = useState('');

  // List of main problems
  const problems = [
    'Network Error',
    'Error in Payment',
    'Delivery Date',
    'Others',
  ];

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
    if (event.target.value !== 'Others') {
      setOtherProblem('');
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const requestData = {
      problem: selectedProblem,
      otherDetails: selectedProblem === 'Others' ? otherProblem : null,
    };

    // Log the data to the console
    console.log('Request Data:', requestData);
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
          disabled={!selectedProblem}
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${!selectedProblem ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

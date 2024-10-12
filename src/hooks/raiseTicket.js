import axios from "axios";
import { useState } from "react";

export default function useRaiseTicket() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null)
  
  const raiseTicket = async ({ issueTitle, username }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`http://localhost:3000/customer-support/ticket`,{ issueTitle, username });
      console.log(response.data.data.ticket);
      setData(response.data.data.ticket);
    } catch (error) {
      console.log(error);
      setError(error.message)
    } finally {
      setLoading(false);
    }
  };

  return { raiseTicket,loading,error,data };
}

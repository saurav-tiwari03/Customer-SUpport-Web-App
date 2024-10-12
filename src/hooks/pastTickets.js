import axios from "axios";
import { useState } from "react"

export const usePastTickets = () => {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [data,setData] = useState([]);

  const pastTickets = async ({ username, agentId, status, searchText }) => {
    setLoading(true);
    setError(null);

    try {
      const statusQuery = status !== null ? status : ''; 
      const response = await axios.get(
        `http://localhost:3000/customer-support/ticket?username=${username}&agentId=${agentId}&status=${statusQuery}&searchText=${searchText}`
      );

      setData(response.data.data.tickets);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  

  return {pastTickets,loading,error,data}
}
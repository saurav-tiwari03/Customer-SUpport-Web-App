import axios from "axios";
import { useState, useCallback } from "react";

export const useGetTickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getTickets = useCallback(async ({ username, agentId, status }) => {
    setLoading(true);
    setError(null);

    try {
      const statusQuery = status !== null ? status : '';
      const response = await axios.get(
        `http://localhost:3000/customer-support/ticket?username=${username}&agentId=${agentId}&status=${statusQuery}`
      );
      console.log(response.data.data.tickets);
      setData(response.data.data.tickets);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getTickets, loading, error, data };
};

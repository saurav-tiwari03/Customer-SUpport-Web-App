import axios from "axios";
import { useState, useCallback } from "react";

export const usePastTickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const pastTickets = useCallback(async ({ username, agentId, status, searchText }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:3000/customer-support/ticket`, {
        params: {
          username,
          agentId,
          status: status !== null ? status : null,
          searchText
        }
      });
      

      setData(response.data.data.tickets);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { pastTickets, loading, error, data };
};

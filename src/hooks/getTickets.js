import axios from "axios";
import {  useState } from "react";

export const useGetTickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getTickets = async ({ username, agentId, status, searchText }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:3000/customer-support/ticket`, {
        params: {
          username,
          agentId,
          status: status || null,  
          searchText
        }
      });

      console.log('Fetched tickets for status:', status, response.data.data.tickets);

      setData(response.data.data.tickets || []); 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { getTickets, loading, error, data };
};

import axios from "axios";
import { useState } from "react";

export const useUpdateTicket = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const updateTicket = async({id,status,agentId}) => {
    setLoading(true);
    setError(null);
    if(status === "unassigned") {agentId = null}
    try {
      const response = await axios.put(`http://localhost:3000/customer-support/ticket/${id}`, {status, agentId});
      console.log('Update ticket : ',response.data.data.ticket);
      setData('Done');
    } catch (error) {
      setError(error);
    }
  }

  return {updateTicket,error,loading,data};
}
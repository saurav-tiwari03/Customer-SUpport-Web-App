import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function useLoginHook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const login = async ({ role, email, id }) => {
    setLoading(true);
    setError(null); 

    try {
      // const response = await axios.post("/api/login", { role, email, id });
      // setData(response.data); // Store the response data
      // console.log('Login successful:', response.data);
      console.log('useLogin hook Data ==> ',{role,email,id});
      localStorage.setItem('UserData', JSON.stringify({role,email,id}));
      setData('Login successful:');
      navigate(`/${role}`)

    } catch (error) {
      setError(error.response ? error.response.data : 'An error occurred');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
}

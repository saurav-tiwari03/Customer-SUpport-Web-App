import { Route, Routes } from "react-router-dom";
import AgentLogin from "./pages/Auth/AgentLogin";
import AgentRegister from "./pages/Auth/AgentRegister";
import CustomerLogin from "./pages/Auth/CustomerLogin";
import CustomerRegister from "./pages/Auth/CustomerRegister";
import Agent from './pages/Agent/Agent';
import Customer from "./pages/Customer/Customer";
import { Button } from "./components/ui/button";
import { useState } from "react";
export default function App() {
  const [user, setUser] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between bg-[#3eabd6] mx-4 rounded mt-1 p-4">
        <div className="flex items-center justify-center flex-grow">
          <img src="\image.png" alt="Logo" width={100} className="mr-4" />
          <h1 className="text-3xl font-Roboto font-semibold text-[#19355e]">
            Customer Support Web App
          </h1>
        </div>
        <div className="flex items-center">
          {user ? (
            <Button onClick={() => setUser(false)}>Login</Button>
          ) : (
            <div className="flex items-center">
              <p className="mr-2">Hello {user}</p>
              <Button onClick={() => setUser(true)}>Log out</Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/auth/agent/login" element={<AgentLogin />} />
          <Route path="/auth/agent/register" element={<AgentRegister />} />
          <Route path="/auth/customer/login" element={<CustomerLogin />} />
          <Route path="/auth/customer/register" element={<CustomerRegister />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/chat/:id" element={<Customer />} />
        </Routes>
      </div>
    </div>
  );
}

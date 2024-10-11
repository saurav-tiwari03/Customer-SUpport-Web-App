import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import useLoginHook from "@/hooks/login";
import { useState } from "react";


export default function AgentLogin() {
  const [email,setEmail] = useState('');
  const [agentId,setAgentId] = useState('');
  const {login,error,data} = useLoginHook();

  const submitHandler = (e) => {
    e.preventDefault();
    login({role:"agent",email,id:agentId})
    if(data) {
      console.log(data);
    } 
    if(error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div>
        <h1 className="text-4xl font-Roboto my-1 font-semibold text-[#19355e]">Agent Login</h1>
      </div>
      <div className="border-2 border-black p-4 w-[500px] rounded">
        <form className="flex flex-col w-full space-y-4" onSubmit={submitHandler}>
          {/* Email Field */}
          <div className="flex items-center justify-between">
            <Label className="text-xl w-[120px]" htmlFor="email">Email</Label>
            <Input type="email" name="email" className="w-[300px]" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
          </div>

          {/* Customer ID Field */}
          <div className="flex items-center justify-between">
            <Label className="text-xl w-[120px]" htmlFor="customerId">Agent ID</Label>
            <Input type="text" name="customerId" className="w-[300px]" placeholder="Enter agent ID" onChange={e => setAgentId(e.target.value)}/>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <Button className="border-2 border-[#3eabd6] text-[#19355e] rounded hover:bg-[#3eabd6] hover:text-white duration-300" >Submit</Button>
            <Link to="/auth/agent/register" className="hover:underline" >Register</Link>
          </div>
        </form>
        <div className="mt-4">
          <p>
            If you are a Customer of Branch International{" "}
            <Link to="/auth/customer/login" className="hover:underline">
              Click here:{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

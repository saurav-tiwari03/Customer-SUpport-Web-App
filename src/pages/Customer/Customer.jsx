import {  useParams } from "react-router-dom"; // Import useParams to get the chat ID
import History from "@/components/Customer/History";
import NewRequest from "@/components/Customer/NewRequest";
import Chat from "@/components/Customer/Chat"; // Import the Chat component

export default function Customer() {
  const { id } = useParams(); 

  const show = id;

  return (
    <div>
      <div className="flex w-full">
        <div className="m-1 h-full">
          <History show={show} />
        </div>
        <div className="flex items-center justify-center w-[70vw] h-[70vh]">
          {id ? (
            <div className="mt-14 flex items-center justify-center w-[70vw] h-[70vh]">
              <Chat /> 
            </div>
          ) : (
            <NewRequest /> 
          )}
        </div>
      </div>
    </div>
  );
}

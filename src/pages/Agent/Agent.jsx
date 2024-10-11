import Chat from "@/components/Agent/Chat";
import CustomerInfo from "@/components/Agent/CustomerInfo";
import Notify from "@/components/Agent/Notify";
import RequestTab from "@/components/Agent/RequestTab";
import SideBar from "@/components/Agent/SideBar";


export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-Roboto my-1 font-semibold text-[#19355e] text-center">
          Agent Panel
        </h1>
      </div>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <RequestTab />
            <div className="flex items-center gap-2">
              <CustomerInfo />
              <Notify />
            </div>
          </div>
          <Chat />
        </div>
      </div>
    </div>
  );
}

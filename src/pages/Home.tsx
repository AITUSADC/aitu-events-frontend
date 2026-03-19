import { useState } from "react";
import BottomNav from "../components/BottomNav";
import type { Tab } from "../components/BottomNav";
import Events from "./Events";
import Profile from "./Profile";
import MyTickets from "./MyTickets";

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("events");

  const renderPage = () => {
    switch (activeTab) {
      case "profile": return <Profile />;
      case "events":  return <Events />;
      case "tickets": return <MyTickets />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-sm mx-auto relative">
      {renderPage()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Home;
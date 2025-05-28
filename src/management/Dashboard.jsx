import React from "react";
import ManageSide from "./ManageSide";
import HomeDash from "./HomeDash";
import TopBar from "./TopBar";

function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <TopBar />
        <div className="flex">
          <ManageSide />
          <HomeDash />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

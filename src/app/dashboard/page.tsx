"use client";

import { useState } from "react";
import TemplatePage from "./components/template";
import { SearchDashboard } from "./components/search-dashboard";


const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplatePage searchInput={searchInput as string} />
    </div>
  );
};

export default Dashboard;
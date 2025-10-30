"use client";

import { useState } from "react";

import { SearchDashboard } from "./components/search-dashboard";
import TemplatePage from "./[templateSlug]/page";


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
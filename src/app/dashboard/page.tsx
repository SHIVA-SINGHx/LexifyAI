"use client";

import { useState } from "react";

import { SearchDashboard } from "./components/search-dashboard";
import TemplatePage from "./[templateSlug]/page";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const [selectedTemplate, setSelectedTemplate] = useState<string | undefined>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplatePage
        params={{ templateSlug: selectedTemplate }}
        searchInput={searchInput}
      />
    </div>
  );
};

export default Dashboard;
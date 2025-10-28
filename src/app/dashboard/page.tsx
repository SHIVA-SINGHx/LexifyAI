import React from 'react';
import SearchDashboard from './components/search-dashboard';
import { Template } from './components/template';

// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

const Page = () => {
//   const { userId } = auth();

  // Redirect to sign-in if user is not logged in
//   if (!userId) {
//     redirect("/sign-in");
//   }

  return (
    <div>
      <SearchDashboard />
      <Template/>
    </div>
  );
}

export default Page;

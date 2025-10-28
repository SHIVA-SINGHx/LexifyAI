import React from 'react';
import { SearchIcon } from "lucide-react";

const SearchDashboard = () => {
  return (
    <div className='mx-5 py-5'>
      <div className='flex flex-col md:flex-row gap-2 mt-5 py-6 px-4'>
        <div className='flex gap-2 items-center p-2 border border-gray-300 rounded-full shadow-md transition duration-200 hover:shadow-lg'>
          <SearchIcon className="text-gray-500" />
          <input 
            type="text"
            placeholder='Search...' 
            className='bg-transparent outline-none text-black placeholder-gray-400'
          />
        </div>
      </div>
    </div>
  );
}

export default SearchDashboard;

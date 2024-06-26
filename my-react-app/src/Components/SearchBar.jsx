import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 pl-10 pr-4 border rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute left-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;

"use client";
import * as React from "react";

function SearchInput({
  placeholder = "Search for movies or TV series",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className={`flex items-start gap-4 md:gap-8 pr-4 md:pr-6 lg:pr-9 ${className}`}
    >
      <label htmlFor="search" className="sr-only">
        search
      </label>

      <svg
        className="w-6 h-6 md:w-8 md:h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          fill="#FFF"
        />
      </svg>

      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className="outline-0 pb-4 ps-2 w-full
         text-18 md:text-24 caret-red-500
         border-b border-transparent
         transition-all duration-100
         hover:border-b-blue-500 focus-visible:border-b-white"
      />
      <button className="sr-only">Submit</button>
    </form>
  );
}

export default SearchInput;

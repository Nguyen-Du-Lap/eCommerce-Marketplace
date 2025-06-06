"use client";

import Container from "@/components/custom/Container";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { useState } from "react";

export default function Learn() {
  const [value, setValue] = useState("");
  const { getItem, setItem, removeItem } = useLocalStorage("value");
  return (
    <Container>
      <div className="tutorial-shorts">
        <h1 className="mb-2 text-3xl font-bold">useLocalStorage</h1>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-row gap-4">
          <button onClick={() => setItem(value)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Set</button>
          <button onClick={() => alert(getItem())} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get</button>
          <button onClick={removeItem} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove</button>
        </div>
      </div>
    </Container>
  );
}

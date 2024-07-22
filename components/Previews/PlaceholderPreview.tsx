"use client";

import React from 'react'; // Import React
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input"; // Correct import path

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What are the key challenges in healthcare management?",
    "How can AI improve patient care in healthcare management?",
    "What role does data analytics play in healthcare management?",
    "Discuss the impact of telemedicine on healthcare management.",
    "How can healthcare management systems be made more efficient?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Lumin AI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
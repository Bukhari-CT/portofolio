import Navbar from "@/components/Navbar";
import React from "react";

export default function MyApp() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <main className="w-full h-screen font-bodyFont overflow-x-hidden overflow-y-scroll">
        <Navbar />
      </main>
    </div>
  );
}

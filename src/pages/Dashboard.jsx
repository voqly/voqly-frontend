import React from "react";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Protected content goes here.</p>
      </div>
    </div>
  );
}



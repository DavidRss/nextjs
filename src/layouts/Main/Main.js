import React from "react";

export default function Main({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div className="main-bg -z-10" />
      {children}
    </div>
  );
}

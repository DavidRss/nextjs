import React from "react";

export default function Main({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {children}
    </div>
  );
}

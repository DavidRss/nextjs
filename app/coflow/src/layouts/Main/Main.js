import React from 'react'

export default function Main({ children }) {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col justify-between">{children}</div>
  )
}

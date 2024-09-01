import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-2xl mb-6">Page Not Found</p>
    <p className="text-lg text-center mb-8">
      The page you are looking for does not exist. <br /> You may have mistyped the address or the page may have moved.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-twitter-blue text-white rounded-full text-lg hover:bg-twitter-light-blue transition"
    >
      Go back to Home
    </Link>
  </div>
  )
}

import React from 'react'
import { SearchIcon } from './Icon'

export default function Searchbar() {
  return (
    <div className="flex items-center space-x-4 p-3 mx-3 mb-3 bg-gray-100 rounded-full">
    <SearchIcon/>
    <input 
      type="text"
      placeholder="Search Twitter"
      className="placeholder-gray-500 bg-transparent focus:outline-none w-full"/>
  </div>
  )
}
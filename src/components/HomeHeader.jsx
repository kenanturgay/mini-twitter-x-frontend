import React from 'react'
import { StarIcon } from './Icon'

export default function HomeHeader() {
  return (
    <div className="sticky z-50 top-0 bg-white w-full flex justify-between p-4 border-b items-center">
          <h1 className="text-xl font-black">
            Home
          </h1>
          <StarIcon/>
          </div>
  )
}
import React from 'react'
import { SettingsIcon, ThreeDotsIcon } from './Icon'
import TrendListItem from './TrendListItem'

export default function TrendsList() {
  return (
    <div className='bg-gray-100 rounded-xl p-4 m-3'>
        <div className='flex justify-between items-center'>
          <div className='text-lg font-black'>Trends for you</div>
          <SettingsIcon/>
        </div>
        <TrendListItem/>
        <TrendListItem/>
        <TrendListItem/>
    </div>
  )
}

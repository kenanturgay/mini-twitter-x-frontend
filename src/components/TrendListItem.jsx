import React from 'react'
import { ThreeDotsIcon } from './Icon'

export default function TrendListItem() {
  return (
    <div className='flex items-center justify-between my-3'>
            <div>
                <div className='text-gray-500 text-xs'>
                    Trending in Germany
                </div>
                <div className='text-base font-bold'>
                    Revolution
                </div>
                <div className='text-gray-500 text-xs'>
                    50.4K Tweets
                </div>
            </div>
            <div className='w-3'>
                <ThreeDotsIcon  ></ThreeDotsIcon>
            </div>
        </div>
  )
}

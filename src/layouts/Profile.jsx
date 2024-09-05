import React, { useContext } from 'react'
import sufle from '../assets/usersprofilepictures/sufle.jpeg'
import avatar from '../assets/usersprofilepictures/profilepic.png'
import { UserContext } from '../UserContext'
import { LocationIcon, LinkIcon, BirthdayIcon,DateIcon } from '../components/Icon'
export default function Profile() {
  const {userData} = useContext(UserContext);
  return (
    <div>
      <div className="sticky top-0 bg-white w-full flex justify-between p-4 border-b items-center">
        <h1 className="text-xl font-black">Profile</h1>
      </div>
      <div className='relative'>
        <img src={sufle} alt="Kapak Fotoğrafı" className="w-full" />
        <img className='absolute rounded-full w-36 -bottom-16 left-6 p-0.5 bg-white border' src={avatar} alt="Profil Resmi" />
      </div>
      <div className='flex'>
        <button className='ml-auto border border-gray-600 rounded-full h-10 w-28 mt-4 mr-4 font-bold'>Edit Profile</button>
      </div>
      <div className='ml-5'>
      <div className='mt-5 font-bold text-xl'>{userData}</div>
      <div className='text-sm text-gray-600'>@{userData}</div>
      <div className='mt-3'>Full-Stack Developer Trainee <span className='text-twitter-blue'>@WorkInTech</span></div>
      </div>
      <div className='mx-5 flex justify-between mt-3'>
        <div className='flex text-sm items-center text-gray-600'>
        <LocationIcon className='w-5 mr-1'/>
        <span>İstanbul, Türkiye</span>
        </div>
        <div className='flex text-sm items-center text-gray-600'>
        <LinkIcon className='w-5 mr-1'/>
        <span className='text-twitter-blue'><a href="https://www.linkedin.com/in/byyilmaz/" target="_blank">LinkedIn</a></span>
        </div>
        <div className='flex text-sm items-center text-gray-600'>
        <BirthdayIcon className='w-5 mr-1'/>
        <span>Born June 24, 1996</span>
        </div>
        <div className='flex text-sm items-center text-gray-600'>
        <DateIcon className='w-5 mr-1'/>
        <span>Joined May 2011</span>
        </div>
      </div>
      <div className='flex flex-start gap-6 ml-5 mt-3'>
          <div className='text-gray-600'>
            <span className='font-bold text-black'>67</span> Following
          </div>
          <div className='text-gray-600'>
            <span className='font-bold text-black'>47</span> Followers
          </div>
      </div>
      <div className='flex mt-5 text-lg border-b-2'>
      <button className='pb-3 w-1/4 font-bold border-b-4 border-underline-blue'>Tweets</button>
      <button className='pb-3 w-1/4 '>Tweets & replies</button>
      <button className='pb-3 w-1/4 '>Media</button>
      <button className='pb-3 w-1/4 '>Likes</button>
      </div>
      
    </div>

  )
}

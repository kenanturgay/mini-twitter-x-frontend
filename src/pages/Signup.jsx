
import leftside from '../assets/signup/back-twitter.png';
import tw_icon from '../assets/icons/twitter-logo.png';
import google_icon from '../assets/signup/google-icon.png'
import apple_icon from '../assets/signup/apple-icon.png'
import { useNavigate } from 'react-router-dom';
import Signupbox from '../layouts/Signupbox';
import { useState } from 'react';



export default function Signup() {
 const [showModal,setShowModal] = useState(false);
    const navigate = useNavigate();

    const openSignUpBox = () => {
        setShowModal(true)
    }

    const closeSignUpBox = () => {
        setShowModal(false)
    }

    const handleLogin = () => {
        navigate('/login');
  };
  return (
    <div className="flex max-w-screen max-h-screen">
        <div className='w-[1114px] h-screen '>
       <img className='h-full' src={leftside} alt="Signup Profile" />
       </div>
       <div className='mt-auto mb-auto ml-10'>
        <img src={tw_icon} alt="" />
        <h1 className='font-bold text-6xl my-6'>Happening now</h1>
        <h3 className='font-bold text-4xl my-6'>Join Twitter today</h3>
        <div className="flex-row w-[416px]">
            <h6 className='flex justify-center items-center my-4 font-medium border rounded-full w-10/12 h-12 py-2 text-center'><img src={google_icon} alt="" /> Sign up with Google</h6>
            <h6 className='flex justify-center items-center my-4 font-medium border rounded-full w-10/12 h-12 py-2 text-center'>
            <img src={apple_icon} alt="" />Sign up with Apple</h6>
            <button onClick={openSignUpBox} className='h-12 font-medium border rounded-full w-10/12 py-2 text-center'>Sign up with phone or email</button>
        </div>
        <div className='w-9/12 my-4 text-sm'>
            By signing up you agree to the <span className='text-twitter-light-blue'>Terms of Service</span> and <span className='text-twitter-light-blue'>Privacy Policy</span>, including <span className='text-twitter-light-blue'>Cookie Use</span>.
        </div>
        <div>
            Already have an Account <button onClick={handleLogin}className='text-twitter-light-blue'>Log in</button>
        </div>
        
    </div>
    {showModal &&
    <Signupbox closeSignUpBox={closeSignUpBox}/>}
    </div>
  )};
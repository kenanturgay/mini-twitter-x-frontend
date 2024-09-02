import React, { useState } from 'react'
import tw_icon from '../assets/icons/twitter-logo.png'
import { useForm } from 'react-hook-form';
import { useAxios, REQ_TYPES } from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
//import Lottie from "lottie-react";
////import like from '../assets/animations/like.json'
import LoginAnimation from '../assets/animations/LoginAnimation';


export default function Signupbox({closeSignUpBox }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSuccess, setIsSuccess] = useState(false); 
    const [apiError, setApiError] = useState('');

    const [doRequest, data, loading, error] = useAxios();
    const navigate = useNavigate();
    const onSubmit = async (formData) => {
      try {
        const response = await doRequest({
          reqType: REQ_TYPES.POST,
          endpoint: 'profile/register',
          payload: {
            username: formData.username,
            password: formData.password,
            email: formData.email,
          },
        });
        setIsSuccess(true);
         setTimeout(() => {
          navigate('/login');
      }, 2000); 
      } catch (err) {
        console.error('Signup failed:', err);
        setApiError('The username or email you entered is already in use.');
        
      }
    };
  
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            {isSuccess ?  <div className='flex items-center gap-1 bg-white p-4 py-2 rounded-full '><LoginAnimation></LoginAnimation><span className='text-bold'>Successfully signed up! Redirecting to Login...</span></div>:
            <div className='relative w-[512px] min-h-[500px] rounded-3xl bg-white'>
                <button 
                    className='absolute top-3 right-5 h-5 w-5'
                    onClick={closeSignUpBox}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                </button>
                <div className='flex flex-col mx-auto w-10/12'>
                    <div className='flex justify-center mt-10 mb-2'>
                        <img src={tw_icon} alt="Twitter Icon" />
                    </div>
                    <div className='text-bold text-3xl my-3'>
                        Create Your Account
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>
                            <input
                                id="username"
                                type="text"
                                placeholder='User Name'
                                {...register('username', { required: 'Username is required' })}
                                className="mb-2 mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
                        </div>
                        
                        <div>
                            <input
                                id="email"
                                type="email"
                                placeholder='E-Mail'
                                {...register('email', { required: 'Email is required' })}
                                className="mb-2 mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div>
                            <input
                                id="password"
                                type="password"
                                placeholder='Password'
                                {...register('password', { required: 'Password is required' })}
                                className="mb-2 mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-3 py-3 rounded-full bg-twitter-light-blue text-white text-lg cursor-pointer mb-4 hover:bg-twitter-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-twitter-blue"
                        >
                            Sign Up
                        </button>
                        {apiError && <p className="text-sm text-red-600 mt-2">{apiError}</p>}
                    </form>
                </div>
            </div>}
        </div>
    );
}
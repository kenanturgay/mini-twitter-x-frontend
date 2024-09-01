// LoginForm.jsx
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAxios, REQ_TYPES } from '../hooks/useAxios'; 
import { UserContext } from '../UserContext';

export default function LoginForm() {
  const {token, setToken, setUserData} = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [doRequest, data, loading, error] = useAxios();

  const onSubmit = async (formData) => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.POST,
        endpoint: 'profile/login',
        payload: {
          username: formData.username,
          password: formData.password,
        },
      });
      setToken(response.token);
      setUserData(formData.username)
      console.log(response);
      
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className="flex flex-col w-full mb-4">
        <input
          type="text"
          id="username"
          placeholder="User Name"
          className="mb-2 mt-2 p-3 border border-gray-300 rounded-md w-full"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}

        <input
          type="password"
          id="password"
          placeholder="Password"
          className="mb-2 mt-2 p-3 border border-gray-300 rounded-md w-full"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>
      <button
        className="w-full py-3 rounded-full bg-twitter-blue text-white text-lg cursor-pointer mb-4 hover:bg-twitter-light-blue"
        type="submit"
        disabled={loading} 
      >
        {loading ? 'Logging in...' : 'Log In'} 
      </button>
      {error && <p className="text-red-500 text-sm">Login failed. Please try again.</p>}
    </form>
  );
}

import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className="flex flex-col w-full mb-4">
        <input
          type="text"
          id="username"
          placeholder="Email Address"
          className="mb-2 mt-2 p-3 border border-gray-300 rounded-md w-full"
          {...register('username', { required: 'Email Address is required' })}
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
      <button className="w-full py-3 rounded-full bg-twitter-blue text-white text-lg cursor-pointer mb-4" type="submit">
        Log In
      </button>
    </form>
  );
}

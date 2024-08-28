import icon from '../assets/twitter-logo.png'

export const Login = () => {
  return (
    <div className="w-[350px] mx-auto mt-[5%] p-5 flex flex-col items-start">
      <img src={icon} alt="Twitter Logo" className="max-w-[13%] h-auto mb-4" />
      <h1 className="font-semibold mb-4 text-3xl">Log in to Twitter</h1>
      <div className="flex flex-col w-full mb-4">
        <input
          type="text"
          id="username"
          placeholder="Email Address"
          className="mb-2 p-3 border border-gray-300 rounded-md w-full"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button className="w-full py-3 rounded-full bg-twitter-blue text-white text-lg cursor-pointer mb-4">
        Log In
      </button>
      <div className="w-full flex justify-between text-sm">
        <a href="#forgot-password" className="text-twitter-blue">
          Forgot password?
        </a>
        <a href="#sign-up" className="text-twitter-blue">
          Sign up to Twitter
        </a>
      </div>
    </div>
  )
}
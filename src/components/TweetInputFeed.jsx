
import { useState } from "react";
import tweetOptions from "../assets/icons/tweet_options.png"
import avatar from "../assets/userpics/profilepic.png"

export default function TweetInputFeed({handleTweet}) {
const [tweetContent, setTweetContent] = useState('');

const handleChange = (e) =>{
  setTweetContent(e.target.value)
}

  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-2">
            <div className="min-w-9">
              <img src={avatar} alt="Profile" className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="py-2 mb-3">
                <input
                  onChange={handleChange}
                  value={tweetContent}
                  type="text" 
                  placeholder="What's happening"
                  className="w-full focus:outline-none focus:border-none text-xl"/>
              </div>
              <div className="flex justify-between my-1 items-center">
                <img src={tweetOptions} alt="tweetOptions" className="aspect-auto h-5" />
                <button onClick={()=> handleTweet(tweetContent)} className="p-2 w-20 rounded-full bg-twitter-blue text-white text-sm cursor-pointer hover:bg-twitter-light-blue">Tweet</button>
              </div>
            </div>
          </article>
  )
}

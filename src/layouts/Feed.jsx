import { useEffect, useState } from "react";
import { useAxios, REQ_TYPES } from '../hooks/useAxios';
import TweetCard from "../components/TweetCard";
import HomeHeader from "../components/HomeHeader";

import avatar from "../assets/userpics/profilepic.png"
import tweetOptions from "../assets/icons/tweet_options.png"
import TweetInputFeed from "../components/TweetInputFeed";


export default function Feed() {

  const [doRequest, data, loading, error] = useAxios();
  const [tweets, setTweets] = useState([]);

  //Sayfa Açıldığında Tweetleri getirmesi için.--------------------------------------------------------
  const fetchTweets = async () => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.GET,
        endpoint: 'tweet',
      });
      setTweets(response.data.reverse());
    } catch (err) {
      console.error('Veri Çekilemedi:', err);
    }
  };

  const handleDelete = (id) => {
    setTweets(tweets.filter(tweet => tweet.id !== id));
  };


  useEffect(() => {
    fetchTweets();
},[]);

//------------------------------------------------------------------------------------
//Tweet At

const handleTweet = async (tweetContent,setTweetContent) => {
  try {
    const response = await doRequest({
      reqType: REQ_TYPES.POST,
      endpoint: 'tweet',
      payload: {
        content: tweetContent,
      },
    });
    setTweetContent('');
    fetchTweets();
    console.log(response);
  } catch (err) {
    console.error('Veri Çekilemedi:', err);
  }
}


  return (
        <main>
          <HomeHeader/>
          <TweetInputFeed handleTweet={handleTweet}/>
        {tweets.map((tweet,index)=>(
          <TweetCard 
            onDelete={handleDelete}
            index={index}
            key={tweet.id}
            id={tweet.id}
            username={tweet.username}
            content={tweet.content}
            likeCount={tweet.likes}
            rtCount={tweet.retweets}
            replyArray={tweet.replies} />))
         }
        </main>
  )
}

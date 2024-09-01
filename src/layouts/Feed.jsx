import { useEffect, useState } from "react";
import TweetCard from "../components/TweetCard";
import { useAxios, REQ_TYPES } from '../hooks/useAxios';

export default function Feed() {
  const [doRequest, data, loading, error] = useAxios();
  const [tweets, setTweets] = useState([]);

useEffect(() => {
  const fetchTweets = async () => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.GET,
        endpoint: 'tweet',
      });
      setTweets(response.data);

    } catch (err) {
      console.error('Veri Çekilemedi:', err);
    }
  };

    fetchTweets();
},[]);
  return (
        <main >
        {tweets.map((tweet)=>(
          <TweetCard 
            key={tweet.id}
            id={tweet.id}
            username={tweet.username}
            content={tweet.content}
            likeCount={tweet.likes}
            rtCount={tweet.retweets}
            replyCount={tweet.replies.length} />))
         }
        </main>
        

  )
}

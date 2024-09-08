import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useAxios, REQ_TYPES } from "../hooks/useAxios";


 const {token, setToken, userData, setUserData, likedTweets, setLikedTweets}= useContext(UserContext)

export const apiService = () => {
  const [doRequest] = useAxios(); 

  const handleLike = async (id) => {
    const twIndex = likedTweets.indexOf(id);
    
    if (twIndex === -1) {
        try {
            const response = await doRequest({
              reqType: REQ_TYPES.POST,
              endpoint: `tweet/like/${id}`,
            });
            setLikedTweets((prevItems) => [...prevItems, id]);
            const newLikeCount = await fetchLikeCount(id); 
            setLikeCounter(newLikeCount); 
      
        } catch (err) {
            console.error('Veri Çekilemedi:', err);
        }
    } else {
        try {
            const response = await doRequest({
              reqType: REQ_TYPES.DELETE,
              endpoint: `tweet/like/${id}`,
            });
            setLikedTweets((prevItems) => prevItems.filter((tweet) => tweet !== id));
            const newLikeCount = await fetchLikeCount(id); 
            setLikeCounter(newLikeCount); 
        } catch (err) {
            console.error('Veri Çekilemedi:', err);
        }
    }
};

  const fetchTweetLikes = async (id) => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.GET,
        endpoint: `tweet/${id}`,
      });
      return response.data.likes;
    } catch (err) {
      console.error('Beğeni sayısı alınamadı:', err);
      throw err;
    }
  };

  const deleteTweet = async (id) => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.DELETE,
        endpoint: `tweet/${id}`,
      });
      return response;
    } catch (err) {
      console.error('Tweet silinemedi:', err);
      throw err;
    }
  };

  return {
    handleLike,
    fetchTweetLikes,
    deleteTweet,
  };
};

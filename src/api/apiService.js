import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useAxios, REQ_TYPES } from "../hooks/useAxios";


 const {token, setToken, userData, setUserData, likedTweets, setLikedTweets}= useContext(UserContext)

export const apiService = () => {
  const [doRequest] = useAxios(); 

  const likeTweet = async (id) => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.POST,
        endpoint: `tweet/like/${id}`,
      });
      return response;
    } catch (err) {
      console.error('Like işlemi başarısız:', err);
      throw err;
    }
  };

  const unlikeTweet = async (id) => {
    try {
      const response = await doRequest({
        reqType: REQ_TYPES.DELETE,
        endpoint: `tweet/like/${id}`,
      });
      return response;
    } catch (err) {
      console.error('Unlike işlemi başarısız:', err);
      throw err;
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
    likeTweet,
    unlikeTweet,
    fetchTweetLikes,
    deleteTweet,
  };
};

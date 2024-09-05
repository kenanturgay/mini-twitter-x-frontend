import { ReplyIcon, RetweetIcon, ShareIcon, StatsIcon, ThreeDotsIcon } from './Icon';
import highlighthashtags from '../utils/highlighthashtags'
import { useContext, useEffect, useRef, useState } from 'react';
import { REQ_TYPES, useAxios } from '../hooks/useAxios';
import DeleteIcon from '../assets/icons/DeleteIcon';
import EditIcon from '../assets/icons/EditIcon';
import LikeIcon from '../assets/icons/LikeIcon';
import { UserContext } from '../UserContext';
import profilePictures from '../assets/usersprofilepictures/profilepictures';
import avatar from '../assets/usersprofilepictures/profilepic.png'

const image = false;


export default function TweetCard({onDelete,index,id,username,content,likeCount,rtCount,replyArray}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //Düzenle-Sil Menüsü
    const [doRequest, data, loading, error] = useAxios(); //Tweet Aksiyonları için
    const [likeCounter, setLikeCounter] = useState(likeCount);
    const {userData, likedTweets, setLikedTweets} = useContext(UserContext);

    

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

    const fetchLikeCount = async (id) => {
        try {
            const response = await doRequest({
                reqType: REQ_TYPES.GET,
                endpoint: `tweet/${id}`,
            });
            return response.data.likes; 
        } catch (err) {
            console.error('Beğeni sayısı alınamadı:', err);
            return 0; 
        }
    };
    
    const isLiked = likedTweets.includes(id);
   
//Düzenle-Sil Menüsü   
    const menuRef = useRef(null);
    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
      };
    
      const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', closeMenu);
        return () => {
          document.removeEventListener('mousedown', closeMenu);
        };
      }, []);

//--Like ile 0'a atacağın like 1 e çekiliyor mu kontrol et
const zeroExcluder = (numbers) => {
    if (numbers===0) {
        return ''
    }
    else return numbers
}

    const handleDelete = async (id) =>{
        try {
            const response = await doRequest({
                reqType: REQ_TYPES.DELETE,
                endpoint: `tweet/${id}`,
            });
            onDelete(id)
        } catch (err) {
            console.error('Silinemedi:', err);
     
        }
    }

  return (
    <article id={id} className="flex space-x-3 border-b border-gray-extraLight px-4 pt-2 hover:bg-gray-50">
        <div className="relative flex ">
            <img src={username ? profilePictures[username] : avatar} alt="Profile" className="w-12 h-12 rounded-full" />
            
        </div>
        <div className="flex-1">
            <div className="flex items-center  justify-between">
                <div className="flex items-center ">
                    <span className="font-bold">{username ? username : userData}</span>
                    <span className="ml-2 text-gray-dark">@{username ? username : userData}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
                </div>
                <div className='relative'>
                <button onClick={toggleMenu} className='p-3 rounded-full hover:bg-tw-hover'>
                <ThreeDotsIcon/>
                </button>
                {isMenuOpen && (
                <div ref={menuRef} className="absolute font-bold bg-white shadow-2xl rounded-lg py-2 mt-2 w-32 z-50">
                    <button className="flex gap-2 items-center w-full text-left px-4 py-2 hover:bg-gray-100"><EditIcon/>Düzenle</button>
                    <button onClick={()=> handleDelete(id)} className="flex gap-2 items-center w-full text-left px-4 py-2 hover:bg-gray-100"><DeleteIcon/>Sil</button>
                </div>
        )}
                </div>
            </div>
            <p className=" text-gray-800">{highlighthashtags(content)}</p>
            {image && <img src={image} className="my-2 rounded-xl max-h-96" />}
            <ul className='flex justify-between mt-3 mb-1 w-full' >
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tw-hover cursor-pointer'>
                        <ReplyIcon className="w-3 h-3" />
                    </div>
                    <span className='min-w-[48px] group-hover:text-twitter-light-blue cursor-pointer'>{zeroExcluder(replyArray.length)}</span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tweet-retweet group-hover:bg-opacity-10 cursor-pointer'>
                        <RetweetIcon className="w-3 h-3" />
                    </div>
                    <span className='min-w-[48px] group-hover:text-twitter-light-blue cursor-pointer'>{zeroExcluder(rtCount)}</span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <button onClick={()=> handleLike(id)}className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:text-red-800 group-hover:bg-tweet-like group-hover:bg-opacity-10 cursor-pointer'>
                    {isLiked ? <LikeIcon color='red' lineColor='red' /> : <LikeIcon color='white' lineColor='currentColor' />}
                    </button>
                    <span className='min-w-[48px]  group-hover:text-twitter-light-blue cursor-pointer'>{zeroExcluder(likeCounter)}</span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tw-hover cursor-pointer'>
                        <ShareIcon className="w-3 h-3" />
                    </div>
                    <span className='min-w-[48px] group-hover:text-twitter-light-blue cursor-pointer'></span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tw-hover cursor-pointer'>
                        <StatsIcon className="w-3 h-3" />
                    </div>
                    <span className='min-w-[48px] group-hover:text-twitter-light-blue cursor-pointer'></span>
                </li>
            </ul>
        </div>
    </article>
  )
}

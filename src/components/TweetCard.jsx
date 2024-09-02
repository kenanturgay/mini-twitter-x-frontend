import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon, StatsIcon, ThreeDotsIcon } from './Icon';
import highlighthashtags from '../utils/highlighthashtags'
const image = false;


export default function TweetCard({index,id,username,content,likeCount,rtCount,replyCount}) {

const zeroExcluder = (numbers) => {
    if (numbers===0) {
        return ''
    }
    else return numbers
}

  return (
    <article id={id} className="flex space-x-3 border-b border-gray-extraLight px-4 py-2">
        <div className="min-w-9">
        <img src={`https://picsum.photos/id/${index+15}/100/100`} alt="Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex-1">
            <div className="flex items-center  justify-between">
                <div className="flex items-center ">
                    <span className="font-bold">{username}</span>
                    <span className="ml-2 text-gray-dark">@{username}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
                </div>
                <ThreeDotsIcon/>
            </div>
            <p className=" text-gray-800">{highlighthashtags(content)}</p>
            {image && <img src={image} className="my-2 rounded-xl max-h-96" />}
            <ul className='flex justify-between mt-3 mb-1 w-10/12' >
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tw-hover cursor-pointer'>
                        <ReplyIcon className="w-3 h-3" />
                    </div>
                    <span className='group-hover:text-twitter-light-blue cursor-pointer'>{zeroExcluder(replyCount)}</span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tweet-retweet group-hover:bg-opacity-10 cursor-pointer'>
                        <RetweetIcon className="w-3 h-3" />
                    </div>
                    <span className='group-hover:text-twitter-light-blue cursor-pointer'>{rtCount}</span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tweet-like group-hover:bg-opacity-10 cursor-pointer'>
                        <LikeIcon className="w-3 h-3" />
                    </div>
                    <span className='group-hover:text-twitter-light-blue cursor-pointer'>{likeCount}</span>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tw-hover cursor-pointer'>
                        <ShareIcon className="w-3 h-3" />
                    </div>
                </li>
                <li className='flex items-center space-x-1 text-gray-800 group'>
                    <div className='flex items-center justify-center w-7 h-7 p-1 rounded-full group-hover:bg-tw-hover cursor-pointer'>
                        <StatsIcon className="w-3 h-3" />
                    </div>
                </li>
            </ul>
        </div>
    </article>
  );
};

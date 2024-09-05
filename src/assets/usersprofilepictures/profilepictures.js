import tweets from './tweets.json' assert { type: 'json' };
const uniqueList = [
  ...new Set(
    tweets.flatMap(tweet => [
      tweet.username,
      ...tweet.replies.map(reply => reply.username)
    ])
  )
];
uniqueList.sort();

const profilePictures = {  }
for (let i = 0; i < uniqueList.length; i++) {

  profilePictures[uniqueList[i]] = `https://picsum.photos/id/${i+15}/100/100`
  ;
}
console.log(profilePictures)
export default profilePictures;

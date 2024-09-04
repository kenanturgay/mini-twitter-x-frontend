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

const profileObject = {  }
for (let i = 0; i < uniqueList.length; i++) {

profileObject[uniqueList[i]] = `https://picsum.photos/id/${i+15}/100/100`
  ;
}

console.log(profileObject)



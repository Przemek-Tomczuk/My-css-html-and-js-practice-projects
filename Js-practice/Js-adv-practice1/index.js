var email = "Aaron@freemote.com ";
var password = "helloworld";

var tweets = [
    {content: 'im hungry', timestamp: Date.now() - 10000}, 
    {content: 'just got to mcdonalds', timestamp: Date.now() - 5000},
    {content: 'finished eating', timestamp: Date.now()}
];

function encrypt(pw) {
    return pw.split('').map(char => char.charCodeAt(0) + 10).join('')
}
let formattedEmail = email.toLowerCase().trim()
let encrypted = encrypt(password)

var tweetObject = {}
for (var tweet of tweets) {
    console.log(tweet.content)
    tweetObject[tweet.timestamp] = tweet.content;
}
console.log(tweetObject)

var requestObject = {
    email: formattedEmail,
    password: encrypted,
    tweets: tweetObject
}

console.log(JSON.stringify(requestObject))
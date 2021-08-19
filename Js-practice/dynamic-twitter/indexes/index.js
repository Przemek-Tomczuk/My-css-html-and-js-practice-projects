var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};
var query = new URLSearchParams(window.location.search)
var user = query.get("user")
let numberOfUser = eval(user)


document.getElementById("background").style.backgroundImage = "url(" + numberOfUser.coverPhotoURL +")";
$("<p id='headName'></p>").html(numberOfUser.displayName + "<p id='ss'> ✔</p>").appendTo("#name");
$("<p id='tweetNum'></p>").html("13.6K Tweets").appendTo("#name");

var img = document.createElement("img")
img.src = numberOfUser.avatarURL;
var src = document.getElementById("profPicture");
 src.appendChild(img);

$("<p></p>").attr('id', 'nameOfProfile').html(numberOfUser.displayName + "<p id='ss'> ✔</p>").appendTo("#profile")
$("<p></p>").attr("id", "username").html(numberOfUser.userName).appendTo("#profile");
$("<p></p>").attr("id", "joined").html("📅 Joined "+numberOfUser.joinedDate).appendTo("#profile");
$("<p></p>").attr("id", "followers").html("<strong>"+numberOfUser.followingCount + "</strong>" + "<p id='grey'> Following</p>").appendTo("#profile");
$("<p></p>").attr("id", "followers").html("<strong>"+(numberOfUser.followerCount / 1000000)+"M"+"</strong>" + "<p id='grey'> Followers</p>").appendTo("#profile");
$("<p></p>").attr("id", "tweeted-tweets").html("Tweets").appendTo("#underProfile"); 
$("<p></p>").attr("id", "tweeted").html("Tweets & Replies").appendTo("#underProfile"); 
$("<p></p>").attr("id", "tweeted").html("Media").appendTo("#underProfile"); 
$("<p></p>").attr("id", "tweeted").html("Likes").appendTo("#underProfile"); 


var tweetBlock = document.getElementById("tweet-blocks")

    for (var tweet of numberOfUser.tweets){
        var rowDiv = document.createElement('div');
        rowDiv.classList.add("tweetDiv")
        var tweetImg = document.createElement("img");
        tweetImg.classList.add("avatar")
        tweetImg.src = numberOfUser.avatarURL;
        rowDiv.appendChild(tweetImg);
        $("<p></p>").attr('id', 'name-nameLine').html(numberOfUser.displayName + "<p id='ss'> ✔</p>").appendTo(rowDiv)
        $("<p></p>").attr("id", "mail-nameLine").html(numberOfUser.userName).appendTo(rowDiv);
        $("<p></p>").attr("id", "mail-timeLine").html("· 38m").appendTo(rowDiv);
        $("<p></p>").attr("id", "mail-dotLine").html("···").appendTo(rowDiv);
        $("<p></p>").attr("id", "tweetContent").html(tweet.text).appendTo(rowDiv)
        $("<p></p>").attr("id", "underpost-1").html("💬 5.2K").appendTo(rowDiv);
        $("<p></p>").attr("id", "underpost").html("↪ 7.7K").appendTo(rowDiv)
        $("<p></p>").attr("id", "underpost").html("❤️ 65.2K").appendTo(rowDiv);
        $("<p></p>").attr("id", "underpost").html("📁").appendTo(rowDiv)
        tweetBlock.appendChild(rowDiv)
    }
    


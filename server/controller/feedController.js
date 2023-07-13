
const feedPost = require('../model/feedItem')

let feedPosts = [];
let feedPost1 = feedPost.createfeedPost("Marist College Updates Dining Hall!", "Chef Cheryl speaks on the new food options here at the Marist Dining Hall", "https://www.marist.edu/", "/images/news_pic.jpg");
let feedPost2 = feedPost.createfeedPost("Lil Uzi Vert releases his long awaited album, the Pink Tape", "Lil Uzi dropped his much anticipated album containing 26 songs and features from various artists like Travis Scott and Babymetal.", "https://pitchfork.com/reviews/albums/lil-uzi-vert-pink-tape/", "/images/liluzi.jpeg");
let feedPost3 = feedPost.createfeedPost("Travis Scott will have a launch party for his new album at the Pyramids of Giza", "Fans of Travis Scott can buy tickets to see his new album, 'Utopia' launch at the Pyramids of Giza", "https://www.complex.com/music/a/tracewilliamcowen/travis-scott-utopia-pyramids-of-giza", "/images/travis.jpeg");
feedPosts.push(feedPost1);
feedPosts.push(feedPost2);
feedPosts.push(feedPost3);

exports.getfeedPosts = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	console.log(feedPosts);
	res.send(JSON.stringify(feedPosts));
}

exports.savefeedPost = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let newfeedPost = feedPost.createfeedPost(req.body.Title, req.body.Body, req.body.linkurl, req.body.imageurl);
    feedPosts.push(newfeedPost);
    res.send(JSON.stringify(feedPosts));
}

/*exports.savefeedPost = function(req, res) {
	let newfeedPost = feedPost.createfeedPost(req.body.Title, req.body.Body, req.body.linkurl, req.body.imageurl);
	feedPosts.push(newfeedPost);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts);
}*/

exports.getfeedPost = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedPosts[req.params.feedPostId]);
}

exports.deletefeedPost = function(req, res) {
	feedPosts.splice(req.params.feedPostId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts);
}

exports.updatefeedPost = function(req, res) {
	// get the existing feedPost from the array
	var updatedfeedPost = feedPosts[req.params.feedPostId];
	//console.log(updatedfeedPost);
	// check to see what has been passed and update the local copy
	console.log(req.body);
	if(req.body.Title)
		updatedfeedPost.Title = req.body.Title;
	if(req.body.Body)
		updatedfeedPost.Body = req.body.Body;
	if(req.body.linkurl)
		updatedfeedPost.linkurl = req.body.linkurl;
	if(req.body.imageurl)
		updatedfeedPost.imageurl = req.body.imageurl;

	// save the local copy of the feedPost back into the array
	feedPosts[req.params.feedPostId] = updatedfeedPost;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts[req.params.feedPostId]);
}
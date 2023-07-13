function feedPost(Title, Body, linkurl, imageurl) {
    this.Title = Title;
    this.Body = Body;
    this.linkurl = linkurl;
    this.imageurl = imageurl;
}

exports.createfeedPost = function createfeedPost(Title, Body, linkurl, imageurl) {
    return new feedPost (Title, Body, linkurl, imageurl)
}
document.getElementById('portal_button').addEventListener('click', event => {
    goToLocation('https://my.marist.edu/');
  })

let feedNumber1 = {
  Title: 'Marist College Updates Dining Hall!',
  Body: 'Chef Cheryl speaks on the new food options here at the Marist Dining Hall',
  linkUrl: 'https://www.marist.edu/',
  imageUrl: '/images/news_pic.jpg'
}

let feedNumber2 = {
  Title: 'Lil Uzi Vert releases his long awaited album, the "Pink Tape"',
  Body: 'Lil Uzi dropped his much anticipated album containing 26 songs and features from various artists like Travis Scott and Babymetal.',
  linkUrl: 'https://pitchfork.com/reviews/albums/lil-uzi-vert-pink-tape/',
  imageUrl: '/images/liluzi.jpeg'
}

let feedNumber3 = {
  Title: 'Travis Scott will have a launch party for his new album at the Pyramids of Giza',
  Body: 'Fans of Travis Scott can buy tickets to see his new album, "Utopia" launch at the Pyramids of Giza',
  linkUrl: 'https://www.complex.com/music/a/tracewilliamcowen/travis-scott-utopia-pyramids-of-giza',
  imageUrl: '/images/travis.jpeg'
}

var currentStories = [feedNumber1, feedNumber2, feedNumber3]

window.addEventListener("load", () => {
  for(var i=0; i < currentStories.length; i++){
    displayFeed(currentStories[i]);

  }
});

function displayFeed(currentStories){
  let feed = document.getElementById('newsfeed');
  feed.innerHTML += "<span><img class ='myImage' src ='" + currentStories.imageUrl +"'>" +"</span>";
  feed.innerHTML += "<span><h2><a href+'" + currentStories.linkUrl+ "'> " + currentStories.Title + "</a></h2></span>"
  feed.innerHTML += "<span>" +currentStories.Body + "</span>";
  feed.innerHTML += "<hr />"
}


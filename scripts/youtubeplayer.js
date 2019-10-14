// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var videoId = 'mzlrnifTl6k';
var startSeconds = 0;
var endSeconds = 134;

var playerConfig = {
    height: '390',
    width: '640',
    videoId: videoId,
    playerVars: {
        start: startSeconds,
        end: endSeconds,
    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', playerConfig);   
  
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute() 
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player.loadVideoById({
        videoId: videoId,
        startSeconds: startSeconds,
        endSeconds: endSeconds
    })
  }
}

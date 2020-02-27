// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var t0=0;
var t1=1;
var t=0.5;
var len;
var ytPlayer;
var ready2=function(){
  len = ytPlayer.getDuration();
  t0 = 0; t = 0.5; t1 = 1;
  jump(t);
  //play(t);
}
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
       'sample', // 埋め込む場所の指定
        {
           width: 640, // プレーヤーの幅
          height: 390, // プレーヤーの高さ
            videoId: '0jldBaTeXYI' // YouTubeのID
      }
   );
  setTimeout(ready2,4000);
}

var jump=function(t){
  ytPlayer.seekTo(len*t);
}
var play=function(){
  ytPlayer.playVideo();
}
$(function(){
 t=
 $('#b' ).click(function() {[t0,t,t1]=[t0,(t0+t)/2,t];jump(t);});
 $('#f' ).click(function() {[t0,t,t1]=[t,(t+t1)/2,t1];jump(t);});
 $('#bb').click(function() {[t0,t,t1]=[0,t/2,t];jump(t);});
 $('#ff').click(function() {[t0,t,t1]=[t,t/2+1/2,1];jump(t);});
});

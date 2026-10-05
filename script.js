console.log("Welcome to Spotify");
let songIndex = 0;
let audio = new Audio('Ek-Mutho-Swapno.mp3');
let MasterPlay = document.getElementById("playSong");




let songs = [
    {songName:"Ek Mutho Swapno",filePath:"file:///C:/Users/Dipika/OneDrive/Desktop/MyProjects/MusicApplication/Ek-Mutho-Swapno.mp3",coverPath:"covers/2.jpg"},
  
]





MasterPlay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        MasterPlay.classList.remove('fa-play-circle-o');
        MasterPlay.classList.add('fa-pause-circle-o');
    }else{
        audio.pause();
        MasterPlay.classList.remove('fa-pause-circle-o');
    
        MasterPlay.classList.add('fa-play-circle-o');

    }
});


myProgressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})
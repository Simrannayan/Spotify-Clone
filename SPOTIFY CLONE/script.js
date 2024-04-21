let masterplay=document.getElementById("masterplay");
let audioElement=new Audio('songs/1.mp3');
let songindex=1;
let songPlay=Array.from(document.getElementsByClassName('songplay'));
let gif=document.getElementById('gif');
let previous=document.getElementById("previous");
let next=document.getElementById("next");
let mastersongname=document.getElementById("mastersongname");
let duration1=document.getElementById("duration1");
let songs=["Rang Lageya","Khwab Dekhe Sexy Lady","Do Dhari Talwar","Naiyoo Lagda","Apna Bana Le","Bulleya","Malang Sajna","Mujhe Pyar Hua tha","Khaab","Rihaayi"];

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    duration1.value=progress;
})
duration1.addEventListener('change',()=>{
    audioElement.currentTime=duration1.value*audioElement.duration/100;
})
const makeplayall=()=>{
    songPlay.forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
previous.addEventListener("click",()=>{
    if(songindex<=1){
        songindex=1;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    mastersongname.innerText=songs[songindex-1];
    gif.style.opacity=1;   
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})
next.addEventListener("click",()=>{
    if(songindex>=10){
        songindex=1;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    mastersongname.innerText=songs[songindex-1];
    gif.style.opacity=1;   
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})
let prev=0,temp;
songPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        makeplayall();
        songindex=parseInt(e.target.id);
        if(prev==songindex && audioElement.played){
            audioElement.pause();
            gif.style.opacity=0;   
            masterplay.classList.remove("fa-pause-circle");
            masterplay.classList.add("fa-play-circle");
            prev=0;
        }
        else{
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src=`songs/${songindex}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            mastersongname.innerText=songs[songindex-1];
            gif.style.opacity=1;   
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            prev=songindex;
        }
        temp=e.target;
    }) 
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mastersongname.innerText=songs[songindex-1];
        gif.style.opacity=1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        temp.classList.remove("fa-play-circle");
        temp.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        temp.classList.remove("fa-pause-circle");
        temp.classList.add("fa-play-circle");
    }
})
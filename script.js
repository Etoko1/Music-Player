const songs=[
	"bensound-clearday.mp3",
	"bensound-retrosoul.mp3",
    "bensound-sunny.mp3",
    "bensound-thelounge.mp3"

]

function createSongList(){
	const list=document.createElement("ol");
	for (var i =0;i <songs.length ; i++) {
		const item=document.createElement("li");
		item.appendChild(document.createTextNode(songs[i]));

		list.appendChild(item);
	}
	return list
}

var songList =document.getElementById("songList");
songList.appendChild(createSongList());

songList.addEventListener("click",function(e){
	const  clickedItem= e.target;
	const source=document.getElementById("source");
	source.src ="songs/" +clickedItem.innerText;
	//console.log(clickedItem.innerText);
	var currentPlaying=document.getElementById("currentPlayingSong");
	currentPlaying.innerText="Current Playing:"
	var currentsong=document.getElementById("currentSong");
	currentsong.innerText=clickedItem.innerText;

	player.load();
	player.play();
});

function playAudio(){
	if(player.readyState){
		player.play();
	}
}

function pauseAudio(){
	player.pause();
}

const slider=document.getElementById("volumeSlider");
slider.addEventListener("input",function(e){
	const volume=e.target.value;
	player.volume=volume;
	
})

function updateProgress(){
  if (player.currentTime>0){
  	const progressBar=document.getElementById("progress");
   progressBar.value=(player.currentTime/player.duration)*100
}

}
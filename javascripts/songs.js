// initialize an array

var songs = [];


// add to the array using [songs.length] --- ([i] increases as songs are added)

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// add songs to the beginning and end of the array

songs.unshift("No Sleep Till Brooklyn > by Beastie Boys on the album Licensed to Ill");
songs.push("Empire State of Mind > by Jay-Z on the album The Blueprint 3");


// loop through the array and replace ">" with "-"

for (var i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace(/>/g, "-");
	console.log(songs[i]);
}


/* loop through the array, replace special characters, and add the songs to the DOM in the 
listContent main content area */

for (var i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace(/[!@(*]/g, "");
	console.log(songs[i]);
	var song = songs[i].slice(0,songs[i].indexOf("by")-2);
	var artist = songs[i].slice(songs[i].indexOf("by")+3, songs[i].indexOf(" on "));
	var album = songs[i].slice(songs[i].indexOf("album")+6, songs[i].length+1);
	document.getElementById("main").innerHTML += `<div class="musicEntry">
		<p>${song}</p>
		<ul>
			<li>${artist}</li>
			<li>${album}</li>
			<li>Genre</li>
		</ul>
		<button class="delete">Delete</button>
	</div>`;
}
identifyButtons();


// allow users to input data and add to the main section of the list view
// signal user if a field is empty
// clear fields on submission

document.getElementById("addButton").addEventListener("click", addMusic);
function addMusic(event) {
	song = document.getElementById("addSongText").value;
	artist = document.getElementById("addArtistText").value;
	album = document.getElementById("addAlbumText").value;
	if (song == "" || artist == "" || album == "") {
		alert("Please enter values in each field before submitting.")
	}
	songs.push(song + artist + album);
	document.getElementById("main").innerHTML += `<div class="musicEntry">	
		<p>${song}</p>
			<ul>
				<li>${artist}</li>
				<li>${album}</li>
				<li>Genre</li>
			</ul>
			<button class="delete">Delete</button>
	</div>`;
	document.getElementById("addSongText").value = "";
	document.getElementById("addArtistText").value = "";
	document.getElementById("addAlbumText").value = "";
	identifyButtons();
}


// hide segments of the page based on user interaction with the navigation menu

document.getElementById("hideAdd").addEventListener("click", hideListView)
function hideListView(event) {
	document.getElementById("listContent").classList.remove("hidden");
	document.getElementById("addMusicContainer").classList.add("hidden");
}
document.getElementById("hideList").addEventListener("click", hideAddView);
function hideAddView(event) {
	document.getElementById("addMusicContainer").classList.remove("hidden");
	document.getElementById("listContent").classList.add("hidden");
}

// traverses through the button array each time a button is added in order to add the 
	// appropriate event listener

function identifyButtons(){
	for (var i = 0; i < songs.length; i++) {
		document.getElementsByClassName("delete")[i].addEventListener("click", erase);
	}
}


// allow users to delete a musicEntry row from the DOM

function erase(event) {
	console.log("Click!")
	this.parentNode.parentNode.removeChild(this.parentNode);
}


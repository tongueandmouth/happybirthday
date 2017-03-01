// TODO: Store reference to the circle, all element with class .container, and the audio source
// This time, use the querySelector method
var circle = document.querySelector(".circle"); 
var containers = Array.from(document.querySelectorAll(".container")); 
var audio = new Audio('Rick_Astley_-_Never_Gonna_Give_You_Up.ogg');


// TODO: Make a function that toggles the class .active on all containers, 
// thus sliding in the two halves of the text
function slideText() {
	/* YOUR CODE HERE*/
	containers.forEach(function(container){
		container.classList.toggle('active');
	})
}

//TODO: On mouseover, slide the text in and play audio
circle.addEventListener('mouseover', function(e) {
	/*YOUR CODE HERE*/
	slideText();
	audio.play();
	document.body.classList.toggle('BgClass')
});

//TODO: On mouseout, slide the text out, stop audio, AND reset audio
circle.addEventListener('mouseout', function(e) {
	/*YOUR CODE HERE*/
	slideText();
	audio.stop();
	document.body.classList.toggle('BgClass')
});
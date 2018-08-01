// YOUR TASK: Add more pictures!
var x = ["./imgs/puppy1.jpeg","./imgs/puppy2.jpeg","./imgs/puppy3.jpeg","./imgs/puppy4.jpg"]
var currentIndex = 0;

function showNextPicture() {

	var s= document.getElementsByTagName("img");
	s[0].src= x[currentIndex];
	currentIndex++;
	if (currentIndex ==4 ){
		currentIndex=0
	}





  }

  // YOUR TASK: Finish this function!

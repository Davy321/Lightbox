var imgSrc = "";

function enlargeImage(imgNum){
	switch (imgNum){
	case 1: 
		imgSrc = "images/arabian.jpg";
		break;
	case 2: 
		imgSrc = "images/dog.jpg";
		break;
	case 3: 
		imgSrc = "images/horse.jpg";
		break;
	case 4: 
		imgSrc = "images/horseandpony.jpg";
		break;
	case 5: 
		imgSrc = "images/pinto.jpg";
		break;
	case 6: 
		imgSrc = "images/tb.jpg";
		break;
	default:
		console.log("what");
	}
	
	document.getElementById("lightboxImage").src = imgSrc;
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("positionBigImage").style.display = "block";
}

function closeLightbox(){
	document.getElementById("lightbox").style.display = "none";
	document.getElementById("positionBigImage").style.display = "none";
}
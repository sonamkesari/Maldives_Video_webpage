



function play()
{
	document.getElementById('backvideo').style.display= "block";
	document.getElementById('playbtn').style.display="none";
	document.getElementById('pausebtn').style.display="block";
	document.getElementById('backvideo').play();




}

function pause()
{
	
		document.getElementById('backvideo').pause();

	document.getElementById('playbtn').style.display="block";
	document.getElementById('pausebtn').style.display="none";

}
window.onload = function() {
	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = '#708090';
	ctx.fillRect(window.innerWidth-1000, 0, 1000, window.innerHeight);

	ctx.font = "20px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Welcome.",15,40);
}
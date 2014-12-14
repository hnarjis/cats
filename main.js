var Game = function() {
	var context;
	var timeout = 400;

    function init() {
    	var canvas = document.getElementById('canvas');
	    canvas.height = canvas.parentNode.clientWidth * 0.75 * (canvas.height/canvas.width);  
	    canvas.width = canvas.parentNode.clientWidth * 0.75;
	    context = canvas.getContext('2d');
	    loop();
    }

    function loop() {
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	    draw();
	    setTimeout(loop, timeout);
	}

	function draw() {
		context.strokeStyle = 'white';
    	context.fillStyle = 'white';

    	// Face
	    context.beginPath();
		context.arc(700, 300, 50, 0, Math.PI * 2);
		context.stroke();

		// Left ear
		context.beginPath();
		context.lineTo(700 + 50 * Math.cos(-150 * (Math.PI/180)), 300 + 50 * Math.sin(-150 * (Math.PI/180)));
		context.lineTo(700 + 70 * Math.cos(-135 * (Math.PI/180)), 300 + 70 * Math.sin(-135 * (Math.PI/180)));
		context.lineTo(700 + 50 * Math.cos(-120 * (Math.PI/180)), 300 + 50 * Math.sin(-120 * (Math.PI/180)));
		context.stroke();

		// Right ear
		context.beginPath();
		context.lineTo(700 + 50 * Math.cos(-60 * (Math.PI/180)), 300 + 50 * Math.sin(-60 * (Math.PI/180)));
		context.lineTo(700 + 70 * Math.cos(-45 * (Math.PI/180)), 300 + 70 * Math.sin(-45 * (Math.PI/180)));
		context.lineTo(700 + 50 * Math.cos(-30 * (Math.PI/180)), 300 + 50 * Math.sin(-30 * (Math.PI/180)));
		context.stroke();
	}

	return {
	    init: init
	};
}();

window.onload = function() {
  	Game.init();
}
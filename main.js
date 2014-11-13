$(function() {
    var Game = function(canvasId) {
	    this.ctx = document.getElementById(canvasId).getContext('2d');

	    this.start = function() {
	    	this.ctx.fillStyle = "#191970";
      		this.ctx.fillRect(500, 200, 300, 300);
	    };
  	};

    window.addEventListener('load', function() {
	    game = new Game("canvas");
	    game.start();
	});
})

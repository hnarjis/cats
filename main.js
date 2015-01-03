var GAME = {};

GAME.cats = function() {
    var context;
    var time;

    function init() {
        var canvas = document.getElementById('canvas');
        canvas.height = canvas.parentNode.clientWidth * 0.75 * (canvas.height/canvas.width);  
        canvas.width = canvas.parentNode.clientWidth * 0.75;
        context = canvas.getContext('2d');
        time = 0;
        loop(0);
    }

    function loop(now) {
        if (now - time > 400) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            draw('white',randomizePosition());
            draw('red',randomizePosition());
            time = now; 
        }
        window.requestAnimationFrame(loop);
    }

    function randomizePosition() {
        var gridWidth = context.canvas.width;
        var gridHeight = context.canvas.height;
        var x = 50 + Math.round((gridWidth-100) * Math.random());
        var y = 50 + Math.round((gridHeight-100) * Math.random());
        return [x, y];
    }

    function draw(color, position) {
        context.strokeStyle = color;
        context.fillStyle = color;

        // Face
        context.beginPath();
        context.arc(position[0], position[1], 50, 0, Math.PI * 2);
        context.stroke();

        // Left ear
        context.beginPath();
        context.lineTo(position[0] + 50 * Math.cos(-150 * (Math.PI/180)), position[1] + 50 * Math.sin(-150 * (Math.PI/180)));
        context.lineTo(position[0] + 70 * Math.cos(-135 * (Math.PI/180)), position[1] + 70 * Math.sin(-135 * (Math.PI/180)));
        context.lineTo(position[0] + 50 * Math.cos(-120 * (Math.PI/180)), position[1] + 50 * Math.sin(-120 * (Math.PI/180)));
        context.stroke();

        // Right ear
        context.beginPath();
        context.lineTo(position[0] + 50 * Math.cos(-60 * (Math.PI/180)), position[1] + 50 * Math.sin(-60 * (Math.PI/180)));
        context.lineTo(position[0] + 70 * Math.cos(-45 * (Math.PI/180)), position[1] + 70 * Math.sin(-45 * (Math.PI/180)));
        context.lineTo(position[0] + 50 * Math.cos(-30 * (Math.PI/180)), position[1] + 50 * Math.sin(-30 * (Math.PI/180)));
        context.stroke();
    }

    return {
        init: init
    };
}();

window.onload = function() {
    GAME.cats.init();
}
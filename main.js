window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
    canvas.height = canvas.parentNode.clientWidth * 0.75 * (canvas.height/canvas.width);  
    canvas.width = canvas.parentNode.clientWidth * 0.75;
}
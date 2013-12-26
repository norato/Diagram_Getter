$(document).ready(function(){
	
c=document.getElementById("myCanvas");
c_context=c.getContext("2d");


function showFillText() {
c_context.fillStyle = 'black';
c_context.font = 'italic bold 11px sans-serif';
c_context.textBaseline = 'bottom';
c_context.fillText('Eu sou uma classe!', 0, 20);
}

function Vertical_line() {
     c_context.moveTo(0, 20);
     c_context.lineTo(150, 20);
     c_context.strokeStyle = "brown";
     c_context.stroke();
   }
showFillText();
Vertical_line();
});
var canvas; // html el
var canvasColor; //color draw
var ctx; //2d env
var ctxColor; // color
var bMouseDown = false; //is my mouse down
var selColorR = 0; //r
var selColorG = 195; //g 
var selColorB = 135; //b

var imageR = document.getElementById('selcolorR');
var imageG = document.getElementById('selcolorG');
var imageP = document.getElementById('selcolorP');
var imageY = document.getElementById('selcolorY');
var imageO = document.getElementById('selcolorO');

var imageselected = imageR;


var audioR=document.getElementById('redsong');
var audioY=document.getElementById('yellowsong');
var audioG=document.getElementById('greensong');
var audioP=document.getElementById('purplesong');
var audioO=document.getElementById('orangesong');


var audioselected = audioR;

$(function(){
    // creating canvas objects
    canvas = document.getElementById('panel');
    ctx = canvas.getContext('2d');

    //Earl's draw function
    function draw(x, y){
      var img=document.getElementById("scream");
  ctx.drawImage(imageselected,x,y,20,20);
      
      
      console.log("Draw Called!");
      //ctx.lineTo(x,y);
      //ctx.closePath();
      //ctx.stroke();
    }
  
  
   $("#selcolorR").click(function(){
        ctx.strokeStyle="#FF0000"; 
     imageselected=imageR;
      audioselected = audioR;
    });
  
    $("#selcolorG").click(function(){
        ctx.strokeStyle="#00FF00";   
      imageselected=imageG;
       audioselected = audioG;
    });
    $("#selcolorP").click(function(){ 
         ctx.strokeStyle="#CC66FF";
      imageselected=imageP;
      audioselected = audioP;
    });
    $("#selcolorY").click(function(){
      ctx.strokeStyle="#FFFF00";
      imageselected=imageY;
      audioselected = audioY;
      
    });
    $("#selcolorO").click(function(){
      ctx.strokeStyle="#FF9933";
      imageselected=imageO;
      audioselected = audioO;
      
    });
    
    //Event listeners
    //listen for an event
    $('#panel').mousedown(function(e) { // mouse down handler
        bMouseDown = true;
        console.log("Mousedown");
      //$('#redsong')[0].play();
      audioselected.play();
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);
        console.log("canvasX: ");
        console.log(canvasX);
        console.log("canvasY: ");
        console.log(canvasY);
        ctx.beginPath();
        ctx.moveTo(canvasX,canvasY);
    });
    $('#panel').mouseup(function(e) { // mouse up handler
        //console.log("Mouseup");
        bMouseDown = false;
      //$('#redsong')[0].pause();
      audioselected.pause();
    });
    $('#panel').mousemove(function(e) { // mouse move handler
        //console.log("Mousemove");
        if (bMouseDown) {
            var canvasOffset = $(canvas).offset();
            var canvasX = Math.floor(e.pageX - canvasOffset.left);
            var canvasY = Math.floor(e.pageY - canvasOffset.top);
            draw(canvasX, canvasY);
        }
    });
});




































$(document).ready(function(){
	$(function(){
		$(".tiptip").tipTip();
	});
	
	$('.brush').click(function(){
		$('.brush').removeClass('current');
		$(this).addClass('current');	
	});
	
	$('.color').click(function(){
		$('.color').removeClass('current');
		$(this).addClass('current');
	});
	
	$('.custom').click(function(){
		$('.color').removeClass('current');
		$(this).addClass('current')
		brushcolor = '#' + $('#color-entry').val();
		$('.custom').css('background-color',brushcolor);	
		changeColor(brushcolor);
	});

})

/* draw the canvas */

var brushColor = "erase";
var clickOrHover = "click";
var prettyPicture;
var leftSide, topSide;
var xPos, yPos;

function draw() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		canvas.addEventListener("click", bitOnClick, false);
		var frame = new Image();
			frame.onload = function() { 
				ctx.drawImage(frame,0,0); 
				for ( var y = 75; y < 450; y += 25) {
				for ( var x = 75; x < 725; x += 25) {
					ctx.moveTo(x,y);
					ctx.strokeStyle = "white";
					ctx.strokeRect (x, y, 24, 24);
				}
			}
		}
		frame.src = "images/frame.png";
		
	}
}

/* when you click on a box, color it in! */
function bitOnClick(e) {
	prettyPicture = document.getElementById("canvas");
	leftSide = prettyPicture.offsetLeft + document.getElementById("frame").offsetLeft + document.getElementById("container").offsetLeft;
	topSide = prettyPicture.offsetTop + document.getElementById("frame").offsetTop + document.getElementById("container").offsetTop;

	if (e.pageX != undefined && e.pageY != undefined) {
		xPos = e.pageX - leftSide - 8;
		yPos = e.pageY - topSide - 20;
    }
    else {
		xPos = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		yPos = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    
    if ( xPos > 75 && xPos < 725 && yPos > 75 && yPos < 450 ) {
	    xPos = ( Math.ceil(xPos/25) * 25 ) - 25;
	    yPos = ( Math.ceil(yPos/25) * 25 ) - 25;
	    canvas = document.getElementById("canvas");
	    var ctx = canvas.getContext("2d");
	    
	    if (brushColor == "erase") {
	    	ctx.strokeStyle = "#ffffff";
	    	ctx.fillStyle = "white";
	    	ctx.fillRect(xPos,yPos,25,25);	
	    	ctx.strokeRect(xPos,yPos,24,24);
	    }
	    else {
		    ctx.fillStyle = brushColor;
		    ctx.fillRect(xPos,yPos,25,25);
	    }
    }
    else { /* DON'T VANDALIZE MY ANTIQUE FRAME, YOU JERK! */}
}


function changeColor(color) {
	brushColor = color;
}

function changeBrush(brush) {
	clickOrHover = brush;
	
	if (brush == "hover") {
		canvas.addEventListener("mousemove", bitOnClick, false);
	}
	else {
		canvas.removeEventListener("mousemove", bitOnClick, false);
	}
}

function eraser() {
	brushColor = "erase";
}

function changeColorCustom() {
	var form = document.getElementById('color-entry');
	var color = form.value;
	brushColor = "#" + color;
}

/* redraw canvas if user wants a clean canvas */
function reset() {
	draw();
}

/* save as png */

function showDownloadText() {
		document.getElementById("buttoncontainer").style.display = "none";
		document.getElementById("textdownload").style.display = "block";
}

function hideDownloadText() {
	document.getElementById("buttoncontainer").style.display = "block";
	document.getElementById("textdownload").style.display = "none";
}

function convertCanvas(strType) {
	if (strType == "PNG")
		var oImg = Canvas2Image.saveAsPNG(canvas, true);

	if (!oImg) {
		alert("Sorry, this browser is not capable of saving " + strType + " files!");
		return false;
	}

	oImg.id = "canvasimage";

	oImg.style.border = canvas.style.border;
	canvas.parentNode.replaceChild(oImg, canvas);

	showDownloadText();
}

function saveCanvas() {
	var canvasToSave = document.getElementById("canvas");
	var canvasData = canvasToSave.toDataURL("image/png");
	var postData = "canvasData="+canvasData;
	var ajax = new XMLHttpRequest();
	ajax.open("POST",'png/savePNG.php',true);
	ajax.setRequestHeader('Content-Type','canvas/upload');
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 || ajax.readyState == "complete") { 
			var fileNameNow = ajax.responseText;
			var timerId = 0;
			clearTimeout(timerId);
			timerId = setTimeout(function displayFileContent() {
	document.getElementById("generatedFileContent").innerHTML = '<div id="8bitFile"><a href="png/' + fileNameNow + '" target="_blank"><img src="png/' + fileNameNow + '" alt="Your art should show up here shortly!" id="saveYourArt" /></a></div><div id="8bitFileInfo"><h3>Look at all this beautiful art you made!</h3><p>Right click the frame on the left and click "save as" to get your fabulous masterpiece from my internets to your computer. Your image will be saved in it\'s original 798x538 resolution.</p><p>If you want to showcase your wonderful art in the upcoming <a class="geo-link">8-bit Gallery</a>, pretty <em>please</em> <a href="http://pancaketheorem.com/contact">send it to me</a> - make sure you <em>attach</em> your art to the email!</p><p>(Click the image to open its full size in a new window.)</div>'; } , 10);
		}
	}  	
	ajax.send(postData);
	ajax.close;
	
}
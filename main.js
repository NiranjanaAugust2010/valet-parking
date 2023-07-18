canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

//Give specific height and width to the car image
greencarwidth=75
greencarheight=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencarx=5
greencary=225
function add() {
	bgimgtag = new Image()
    bgimgtag.onload = uploadBackground
    bgimgtag.src = background_image

    gimgtag = new Image()
    gimgtag.onload = uploadgreencar
    gimgtag.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(bgimgtag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(gimgtag, greencarx, greencary, greencarwidth, greencarheight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencary >= 0) {
        greencary = greencary - 10
        uploadBackground()
        uploadgreencar()
    }
}

function down()
{
	//Define function to move the car downward
	if (greencary <= 350) {
        greencary = greencary + 10
        uploadBackground()
        uploadgreencar()
    }
}

function left()
{
	//Define function to move the car left side
	if (greencarx >= 0) {
        greencarx = greencarx - 10
        uploadBackground()
        uploadgreencar()
    }
}

function right()
{
	//Define function to move the car right side
	if (greencarx <= 750) {
        greencarx = greencarx + 10
        uploadBackground()
        uploadgreencar()
    }
}

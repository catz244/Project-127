music1 = "";
music2 = "";

function setup(){
    canvas = createCanvas(400, 330);
    canvas.position(450, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    music1 = loadSound("music1.mp3");
    music2 = loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 400, 330);
}
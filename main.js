nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
d = 0;

function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(600, 70);
    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log("hi");
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        rightwristx = results[0].pose.rightWrist.x;
        leftwristx = results[0].pose.leftWrist.x;
        d = Math.floor(leftwristx - rightwristx);
    }

}

function draw() {
    background("#969A97");
    fill("#F90093");
    textsize(d);
    document.getElementById("square_side").innerHTML = "Width and height of the square will be" + d;
    text("Chingu", 50, 300);
}
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
song1=url("song1.mp3")
song2=url('song2.mp3')
function preload(){
song1=loadSound("song1.mp3")
song2=loadSound("song2.mp3")
}
function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
video.size(500,500)
poseNet=ml5.poseNet(video,model_loaded)
poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,600,500)
}
function model_loaded() {
    console.log("Model Loaded")
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        console.log("leftWristX= "+leftWristX)
        console.log("leftWristY= "+leftWristY)
        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        console.log("rightWristX= "+rightWristX)
        console.log("rightWristY= "+rightWristY)
    }
}
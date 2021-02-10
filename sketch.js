const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    var options={

        isStatic:true
    }

    ground = Bodies.rectangle(200,200,400,20,options);
    World.add(myworld,ground);

   
    console.log(ground.isStatic);
    console.log(ground.position.x);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
            //200           //200
   
}
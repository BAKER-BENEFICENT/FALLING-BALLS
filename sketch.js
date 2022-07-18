const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle_1, particle_2, particle_3, particle_4, particle_5;
var particle_6, particle_7, particle_8, particle_9, particle_10;
var rotator_1, rotator_2, rotator_3;
var block_1, block_2;

var angle_1 = 60;
var angle_2 = 60;
var angle_3 = 60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options ={
      isStatic: true
    }

    plane = Bodies.rectangle(600, height, 1200, 20, plane_options);
    World.add(world, plane);
    block_1 = Bodies.rectangle(100, 400, 150, 20, plane_options);
    World.add(world, block_1);
    block_2 = Bodies.rectangle(400, 400, 150, 20, plane_options);
    World.add(world, block_2);

    //created multiple of particle bodies 
    var particle_options = {
      restitution: 0.5,
      friction: 0.03
    }

    particle_1 = Bodies.circle(220, 10, 10, particle_options);
    World.add(world, particle_1);
    particle_2 = Bodies.circle(220, 10, 10, particle_options);
    World.add(world, particle_2);
    particle_3 = Bodies.circle(225, 10, 10, particle_options);
    World.add(world, particle_3);
    particle_4 = Bodies.circle(230, 10, 10, particle_options);
    World.add(world, particle_4);
    particle_5 = Bodies.circle(230, 10, 10, particle_options);
    World.add(world, particle_5);

    var rotator_options ={
      // isStatic=true
      // isStatic true
       //isStatic:false
       isStatic:true
    };

    // rotator1 = rectangle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

    // rotator1 = Bodies.rectangle();
    // World.add(world,rotator1);

    //rotator_1 = Bodies.circle(250,200,150,20,rotator_options);
    //World.add(world,rotator_1);

     rotator_1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
     World.add(world, rotator_1);

    rotator_2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
    World.add(world, rotator_2);

    rotator_3 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world, rotator_3);

    //styling the bodies here
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane.position.x, plane.position.y, 1200, 20);
  rect(block_1.position.x, block_1.position.y, 150, 20);
  rect(block_2.position.x, block_2.position.y, 150, 20);

  //created shape for all the paticles
  ellipse(particle_1.position.x, particle_1.position.y, 10);
  ellipse(particle_2.position.x, particle_2.position.y, 10);
  ellipse(particle_3.position.x, particle_3.position.y, 10);
  ellipse(particle_4.position.x, particle_4.position.y, 10);
  ellipse(particle_5.position.x, particle_5.position.y, 10);

  //created shape for all the rotators
  Matter.Body.rotate(rotator_1, angle_1)
  push();
  translate(rotator_1.position.x, rotator_1.position.y);
  rotate(angle_1);
  rect(0, 0, 150, 20);
  pop();
  angle_1 += 0.3;

  Matter.Body.rotate(rotator_2, angle_2)
  push();
  translate(rotator_2.position.x, rotator_2.position.y);
  rotate(angle_2);
  rect(0, 0, 150, 20);
  pop();
  angle_2 += 0.4;

  Matter.Body.rotate(rotator_3, angle_3)
  push();
  translate(rotator_3.position.x, rotator_3.position.y);
  rotate(angle_3);
  rect(0, 0, 150, 20);
  pop();
  angle_3 += 0.5;
    
}

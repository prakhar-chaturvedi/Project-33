var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var count = 0;
  var score = 0;
  var gamestate = "start";
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text( "500", 20,550 );
  text( "500", 100,550 );
  text( "500", 180,550 );
  text( "500", 260,550 );
  text( "100", 340,550 );
  text( "100", 420,550 );
  text( "100", 500,550 );
  text( "200", 580,550 );
  text( "200", 660,550 );
  text( "200", 740,550 );
  Engine.update(engine);
 
  if (gamestate === "end"){
    textSize(40);
    text("GAME OVER", 300,400 );
  } 
   if(particle != null){
     particle.display();
     var p = particle.body.position;
     if (p.y > 720){
       if(p.x < 300){
         score = score + 500;
         particle = null;
         if(count >= 5){
           gamestate = "end";
         }
       }
       else if(p.x > 300 && p.x < 600){
        score = score + 100;
        particle = null;
        if(count >= 5){
          gamestate = "end";
        }
      }
    } 
     else if(p.x > 900 && p.x < 600){
      score = score + 200;
      particle = null;
      if(count >= 5){
        gamestate = "end";
      }
    }
   }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function keyPressed(){
  if(keyCode === 32 && gamestate != "end"){
    count++
    particle = new Particle(mouseX ,10 ,10 )
  }
}
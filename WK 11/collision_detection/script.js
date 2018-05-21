/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring puck initial location
var puck_x = 210;
var puck_y = 210;
var speed = 20

document.getElementById('puck').style.top = puck_y + 'px';

document.getElementById('puck').style.left = puck_x + 'px';

//to log coordinates
function logCoordinates(){
     console.log('x=' + puck_x + 'y=' + puck_y);
}

function checkCollision(){
    //collision detection code goes here
   if (puck_x >= 250 && puck_x <= 350 && puck_y >= 150 && puck_y <= 240) {
       puck.style.backgroundColor = 'red';
       console.log('collision!');
   }
    else{
        puck.style.backgroundColor = 'yellow';
    }
   }
    
function teleportsRight (){
    if (puck_x >= 590){
        puck.style.left = 0 + 'px';
    }
  
}

function teleportsLeft (){
    if (puck_x <= 0){
        puck.style.left = 590 + 'px';
    }
    
}


//move left
document.getElementById('left').addEventListener('click', function () {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    
    logCoordinates();
    checkCollision();
    teleportsLeft();
});

//move right
document.getElementById('right').addEventListener('click', function () {
    puck_x += speed;
   puck.style.left = puck_x + 'px';
          logCoordinates();
          checkCollision();
            teleportsRight();
});

//move up
document.getElementById('up').addEventListener('click', function () {
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y + 'px';
    
          logCoordinates();
          checkCollision();
});

//move down
document.getElementById('down').addEventListener('click', function () {
    puck_y += speed;
    document.getElementById('puck').style.top = puck_y + 'px';
    
          logCoordinates();
          checkCollision();
});

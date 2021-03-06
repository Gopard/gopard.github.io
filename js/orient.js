var ball   = document.querySelector('.rotate');
var garden = document.querySelector('.head-desc');

function handleOrientation(event) {
  var z = 0 - event.alfa/2;
  var x = 0 - event.beta/2;  // In degree in the range [-180,180]
  var y = 0 - event.gamma/2; // In degree in the range [-90,90]

  //output.innerHTML  = "beta : " + x + "\n";
  //output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.transform = 'rotate3d(1,0,0,'+x+'deg)';
  ball.style.transform =  ball.style.transform +'rotate3d(0,1,0,'+y+'deg)';
  ball.style.transform =  ball.style.transform +' rotate3d(0,0,1,'+z+'deg)';
  //console.log('rotate3d('+x +','+ y+')');
}

window.addEventListener('deviceorientation', handleOrientation);

/*$(document).ready(function() {
  $('.canvas').particles({
  maxParticles: 25,
  size: 10,
  speed: 1,
  color: '#000000',
  minDist: 140,
  connectParticles: true
});

}); */
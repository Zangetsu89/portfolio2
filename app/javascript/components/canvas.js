const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particaleArray = [];
const numberOfParticles = 150;

// mouse position

const mouse = {
  x: null,
  y: null
}
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse.x, mouse.y);
});
setInterval(function(){
  mouse.x = undefined;
  mouse.y = undefined;
}, 200);

// Creating Particales 

class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(){
    this.size -= 0.05;
    if (this.size < 0) {
      this.x = (mouse.x + ((Math.random() * 20 ) -10));
      this.y = (mouse.y + ((Math.random() * 20 ) -10));
      this.size = (Math.random() * 5) + 5;
      this.weight = (Math.random() * 2) - 0.5;
    }
    this.y += this.weight;
    this .weight += 0.2;

    if (this.y > canvas.height - this.size) {
      this.weight *= -0.6;
    };
  }
}

function init() {
  particaleArray = [];
  for (let i = 0; i < numberOfParticles; i++){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = (Math.random() * 10) + 5;
    let color = 'white';
    let weight = 1;
    particaleArray.push(new Particle(x, y, size, color, weight));
  }
}


function connect(){
  let opacityValue = 1;
  for(let a =0; a < particaleArray.length; a++){
    for(let b = a; b < particaleArray.length; b++){
      let distance = ((particaleArray[a].x - particaleArray[b].x) * (particaleArray[a].x - particaleArray[b].x) + (particaleArray[a].y - particaleArray[b].y) * (particaleArray[a].y - particaleArray[b].y));
      if (distance < 1800){
        opacityValue = 1 - (distance/10000);
        ctx.strokeStyle ='rgba(104,116,231,' + opacityValue + ')';
        ctx.beginPath();
        ctx.linewidth = 1;
        ctx.moveTo(particaleArray[a].x, particaleArray[a].y);
        ctx.lineTo(particaleArray[b].x, particaleArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particaleArray.length; i++){
    particaleArray[i].update();
  }
  connect();
  requestAnimationFrame(animate);
}

export { init };
export { animate };
export { connect };



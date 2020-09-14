class Bal {
   constructor(x, y, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.diameter = 80;
      this.super = super;
   }
}

var super = false;
var bal = new Bal(50, 50, 3, 6);
var x = 640;
var = 360;
var speedX = 1;
var speedY = 1;
var diameter = 80;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}
 

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  
  // stel vulkleur in
  fill(255, 100, 255);

   // teken een cirkel
   ellipse(bal.x, bal.y, bal.diameter, bal.diameter);

   // update positie
   bal.x = bal.x + bal.speedX;
   bal.y = bal.y + bal.speedY;

   if (bal.x <= 40 || bal.x >= 1240 ) {
      bal.speedX = bal.speedX * -1
   }

   if (bal.y <= 40 || bal.y >= 680) {
      bal.speedY = bal.speedY * -1;
   }

   if (bal.x = 420 || bal.x = 666 || bal.y = 420 || bal.y = 666) {
       bal.super = true
   } else [
       bal.super = false;
   ]

   if (bal.super = true) (
       fill(255, 0, 0);
   )
}
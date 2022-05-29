const canvas  = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const szerokosc = 128;
const wysokosc = 138;
const img = document.querySelector("img")
let klatka = 0;
let z = 1000;
let i = 0;
let j = 0;
let g = 0;
const sprite2 = new Image();
const sprite = new Image();
const vent = new Image();

        const fps = 15;
        function forward() {

          if( j <= 0)
          {
              j = 1
              
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              ctx.drawImage(sprite, 0, 0, szerokosc, wysokosc, i, 200, szerokosc, wysokosc)
              ctx.drawImage(vent, z, 100, 100, 100)
              while(j == 1)
              {
                specialError
              }
          }
          
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            if(klatka == 8)
            klatka = 0;
            aktKlatka = (szerokosc) * klatka;
            ctx.drawImage(sprite, aktKlatka, 0, szerokosc, wysokosc,i, 200, szerokosc, wysokosc)
            ctx.drawImage(vent, z, 100, 100, 100)
            klatka++;
            // console.log(aktKlatka);
            
            i = i + 10;
            
            z = z + 4;
            if(i > 1400)
              i = -40
          
              
            // console.log(z);
            if (z > 1393)
              z = -40
     
              
          setTimeout(() => {
            
         requestAnimationFrame(forward);
          }, 1000 / fps);
        }
        
  
  
function  backward()
{
  
  if(j >= 0)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(vent, z, 100, 100, 100)
    ctx.drawImage(sprite2, szerokosc * 8, 1, szerokosc, wysokosc, i, 200, szerokosc, wysokosc)
    j = -1
    
  
    
    
    while(j == -1)
              {
                console.log(aktKlatka);
                specialError
              }
    
  }
  
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if(klatka == 0)
  klatka = 8;
  aktKlatka = (szerokosc) * klatka;
  
  ctx.drawImage(sprite2, aktKlatka, 0, szerokosc, wysokosc,i, 200, szerokosc, wysokosc)
  ctx.drawImage(vent, z, 100, 100, 100)
  klatka--;
  console.log(aktKlatka);
  i = i - 10;
  z = z - 4;
  if(i < -40)
    i = 1400
  if(z < -30)
    z = 1393
setTimeout(() => {
  
requestAnimationFrame(backward);
}, 1000 / fps);
}
// function jump()
// {
//   if(j >= 0 || j < 0)
//   {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.drawImage(sprite2, szerokosc * 8, 1, szerokosc, wysokosc, i, g, szerokosc, wysokosc)
//     j = -1
    
    
    
    
//   //   while(j == -1)
//   //             {
//   //               console.log(aktKlatka);
//   //               specialError
//   //             }
    
//   // }
  
  
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   if(klatka == 0)
//   klatka = 8;
//   aktKlatka = (szerokosc) * klatka;
  
//   ctx.drawImage(sprite2, aktKlatka, 0, szerokosc, wysokosc,i, g, szerokosc, wysokosc)
//   klatka--;
//   console.log(aktKlatka);
//   setTimeout(() => {
//     g = g + 5;
//   }, 100)
// }
 

  
// setTimeout(() => {
  
// // requestAnimationFrame(jump);
// }, 1000 / fps);
// }

  sprite2.src = "stripe3.png"
  sprite.src = "stripe.png"
  vent.src = "https://www.gran-turismo.com/gtsport/decal/8511883637456634888_1.png"
  window.addEventListener("load", e => 
{
forward();
})
window.addEventListener("contextmenu", e => 
{
  e.preventDefault(false)
forward();
})
window.addEventListener("click", () => 
{
  
backward()
})
window.addEventListener("keydown", () => 
{
  jump()
})


  


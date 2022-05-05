const canvas  = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const szerokosc = 128;
const wysokosc = 138;
let klatka = 0;
let i = 0;
let j = 0;
const sprite = new Image();

        const fps = 15;
        function forward() {

          if( j <= 0)
          {
              j = 1
              
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              ctx.drawImage(sprite, 1, 0, szerokosc, wysokosc, i, 500, szerokosc - 10, wysokosc)
              while(j == 1)
              {
                window.addEventListener()
              }
          }
          
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            if(klatka == 8)
            klatka = 0;
            aktKlatka = (szerokosc) * klatka;
            ctx.drawImage(sprite, aktKlatka, 0, szerokosc, wysokosc,i, 500, szerokosc - 10, wysokosc)
            klatka++;
            console.log(aktKlatka);
            
            i = i + 10;
            
          setTimeout(() => {
            
         requestAnimationFrame(forward);
          }, 1000 / fps);
        }
        
  
  
function  backward()
{
  
  if(j >= 0)
  {
    j = -1
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(sprite.width,sprite.height)
    ctx.scale(-1,1)
    ctx.drawImage(sprite, 1, 0, szerokosc, wysokosc, i, 500, szerokosc - 10, wysokosc)
    while(j == -1)
              {
                window.addEventListener()
              }
    
  }
  
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if(klatka == 8)
  klatka = 0;
  aktKlatka = (szerokosc) * klatka;
  ctx.scale(-1, 1)
  ctx.drawImage(sprite, aktKlatka, 0, szerokosc, wysokosc,i, 500, szerokosc - 10, wysokosc)
  klatka++;
  console.log(aktKlatka);
  i = i - 10;
  
setTimeout(() => {
  
requestAnimationFrame(backward);
}, 1000 / fps);
}
  
  sprite.src = "stripe.png"
window.addEventListener("click", () => {
forward();
     })
window.addEventListener("contextmenu", e => {
  e.preventDefault(false)
backward()
})


  


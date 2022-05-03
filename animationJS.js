const canvas  = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const szerokosc = 128;
const wysokosc = 138;
let klatka = 0;


function draw() {
        // setInterval(() =>{

            requestAnimationFrame(draw)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            if(klatka == 8)
            klatka = 0;
            aktKlatka = (szerokosc) * klatka;
            ctx.drawImage(sprite, aktKlatka, 0, szerokosc, wysokosc,canvas.width / 5, canvas.height - 300, szerokosc - 10, wysokosc)
            klatka++;
            console.log(aktKlatka);
        // }, 1000/10)
    
  
  }
  const sprite = new Image();
  sprite.src = "stripe.png"
window.addEventListener("load", () => {
draw();
     })


  


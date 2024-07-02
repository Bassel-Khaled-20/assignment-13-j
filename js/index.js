import Ui, { display } from "./main.module.js"
const SHOOTER=document.querySelector('.SHOOTER')
const SAILING=document.querySelector('.SAILING')
const PERMADEATH=document.querySelector('.PERMADEATH')
const SUPERHERO=document.querySelector('.SUPERHERO')
const PIXEL=document.querySelector('.PIXEL')
const MMORPG=document.querySelector('.MMORPG')

' use strict'

document.getElementById('close').addEventListener('click', function() {
    document.querySelector(".details").classList.add("d-none");
    document.querySelector(".details-main").classList.add("d-none");
    document.querySelector(".home").classList.remove("d-none");
    home()
  });
async function  home() {
    let ui= new Ui('mmorpg')
    var response=await ui.getAPI()
    var dis=new display(response)
    dis.display()
    MMORPG.classList.add("color");
    SHOOTER.classList.remove("color")
    PERMADEATH.classList.remove("color")
    PIXEL.classList.remove("color")
    SAILING.classList.remove("color")
    SUPERHERO.classList.remove("color")
    
}
home()


      PIXEL.addEventListener('click', async function () {
        document.getElementById("card").innerHTML = `
          <div class="load position-fixed start-0 end-0 top-0 bottom-0">
            <span class="loader position-absolute top-50 start-50"></span>
          </div>`;
        console.log("Loading...");
        await new Promise(resolve => setTimeout(resolve, 500));
        let ui = new Ui('pixel');
        var response = await ui.getAPI();
        var dis = new display(response);
        dis.display();
        MMORPG.classList.remove("color");
        SHOOTER.classList.remove("color");
        PERMADEATH.classList.remove("color");
        PIXEL.classList.add("color");
        SAILING.classList.remove("color");
        SUPERHERO.classList.remove("color");
      });
  
  
SHOOTER.addEventListener('click',async function (){
    document.getElementById("card").innerHTML = `
    <div class="load position-fixed start-0 end-0 top-0 bottom-0">
      <span class="loader position-absolute top-50 start-50"></span>
    </div>`;
  console.log("Loading...");
  await new Promise(resolve => setTimeout(resolve, 500));
    let ui= new Ui('shooter')
    var response=await ui.getAPI()
    console.log(response);
    var dis=new display(response)
    dis.display()
    MMORPG.classList.remove("color");
    SHOOTER.classList.add("color")
    PERMADEATH.classList.remove("color")
    PIXEL.classList.remove("color")
    SAILING.classList.remove("color")
    SUPERHERO.classList.remove("color")
    
})
SAILING.addEventListener('click',async function (){
    document.getElementById("card").innerHTML = `
    <div class="load position-fixed start-0 end-0 top-0 bottom-0">
      <span class="loader position-absolute top-50 start-50"></span>
    </div>`;
  console.log("Loading...");
  await new Promise(resolve => setTimeout(resolve, 500));
    let ui= new Ui('sailing')
    var response=await ui.getAPI()
    console.log(response);
    var dis=new display(response)
    dis.display()
    MMORPG.classList.remove("color");
    SHOOTER.classList.remove("color")
    PERMADEATH.classList.remove("color")
    PIXEL.classList.remove("color")
    SAILING.classList.add("color")
    SUPERHERO.classList.remove("color")
})
PERMADEATH.addEventListener('click',async function (){
    document.getElementById("card").innerHTML = `
    <div class="load position-fixed start-0 end-0 top-0 bottom-0">
      <span class="loader position-absolute top-50 start-50"></span>
    </div>`;

  await new Promise(resolve => setTimeout(resolve, 500));
    let ui= new Ui('permadeath')
    var response=await ui.getAPI()
    console.log(response);
    var dis=new display(response)
    dis.display()
    MMORPG.classList.remove("color");
    SHOOTER.classList.remove("color")
    PERMADEATH.classList.add("color")
    PIXEL.classList.remove("color")
    SAILING.classList.remove("color")
    SUPERHERO.classList.remove("color")
})
SUPERHERO.addEventListener('click',async function (){
    document.getElementById("card").innerHTML = `
    <div class="load position-fixed start-0 end-0 top-0 bottom-0">
      <span class="loader position-absolute top-50 start-50"></span>
    </div>`;
  console.log("Loading...");
  await new Promise(resolve => setTimeout(resolve, 500));
    let ui= new Ui('superhero')
    var response=await ui.getAPI()
    console.log(response);
    var dis=new display(response)
    dis.display()
    MMORPG.classList.remove("color");
    SHOOTER.classList.remove("color")
    PERMADEATH.classList.remove("color")
    PIXEL.classList.remove("color")
    SAILING.classList.remove("color")
    SUPERHERO.classList.add("color")
})
MMORPG.addEventListener('click',async function (){
    document.getElementById("card").innerHTML = `
    <div class="load position-fixed start-0 end-0 top-0 bottom-0">
      <span class="loader position-absolute top-50 start-50"></span>
    </div>`;
  console.log("Loading...");
  await new Promise(resolve => setTimeout(resolve, 500));
    let ui= new Ui('mmorpg')
    var response=await ui.getAPI()
    console.log(response);
    var dis=new display(response)
    dis.display()
    MMORPG.classList.add("color");
    SHOOTER.classList.remove("color")
    PERMADEATH.classList.remove("color")
    PIXEL.classList.remove("color")
    SAILING.classList.remove("color")
    SUPERHERO.classList.remove("color")
})

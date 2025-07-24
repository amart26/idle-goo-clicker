//getting text elements
let gooCounterTxt = document.getElementById("goo-counter-span");
let gooPerSecondTxt = document.getElementById("goo-per-second-count-span")

//getting images
const gooImg = document.getElementById("goo-img");
const powerUpOne = document.getElementById("power-up-1");
const powerUpTwo = document.getElementById("power-up-2");
const powerUpThree = document.getElementById("power-up-3");

//global variables
let currentGooCount = 0;
let gooPerSecond = 1; 
let time = 1000;

//initializations
gooPerSecondTxt.textContent = gooPerSecond;
setInterval(AddPassiveGoo, time);

//event listners
gooImg.addEventListener("click", onGooClick);
powerUpOne.addEventListener("click", onPowerUpClick);
powerUpTwo.addEventListener("click", onPowerUpClick);
powerUpThree.addEventListener("click", onPowerUpClick);

//functions
 function onGooClick() 
{
        currentGooCount += 1; 
        gooCounterTxt.textContent = currentGooCount;
        console.log(currentGooCount);
   
}
    
function AddPassiveGoo()
{   
        currentGooCount += gooPerSecond; 
        gooCounterTxt.textContent = currentGooCount;
    
}

function onPowerUpClick()
{
    let addOneGPS = 1;
    let addFiveGPS = 5;
    let addTenGPS = 10; 

    
}



//debugging
console.log(currentGooCount); 
console.log(gooPerSecond);





class PowerUp 
{
     constructor(name, cost, effect, amountPurchased) 
     {
        this.name = name; 
        this.cost = cost; 
        this.effect = effect;
        this.amountPurchased = amountPurchased;
     }

     onPowerUpClick() 
     { 
       
        if(currentGooCount >= this.cost)
        {
                this.amountPurchased++;
                currentGooCount -= this.cost;
                gooCounterTxt.textContent = currentGooCount;
                gooPerSecond += this.effect;
                gooPerSecondTxt.textContent = gooPerSecond;
                powerUp1AmountTxt.textContent = this.amountPurchased;
                console.log(currentGooCount);
        }
        else 
        {
                console.log("Error");
        }
     }
}

//getting text elements
let gooCounterTxt = document.getElementById("goo-counter-span");
let gooPerSecondTxt = document.getElementById("goo-per-second-count-span")

//getting images
const gooImg = document.getElementById("goo-img");
const powerUpOneImg = document.getElementById("power-up-1");
const powerUpTwoImg = document.getElementById("power-up-2");
const powerUpThreeImg = document.getElementById("power-up-3");

//global variables
let currentGooCount =0;
let gooPerSecond = 100; 
const time = 1000;

const powerUpOne = new PowerUp("x1", 10, 1, 0);
const powerUpTwo = new PowerUp("x5", 50, 5, 0);
const powerUpThree = new PowerUp("x5", 100, 10, 0);

//initializations
gooPerSecondTxt.textContent = gooPerSecond;

setInterval(AddPassiveGoo, time);


//event listeners
gooImg.addEventListener("click", onGooClick);
powerUpOneImg.addEventListener("click", () => powerUpOne.onPowerUpClick());
powerUpTwoImg.addEventListener("click", () => powerUpTwo.onPowerUpClick());
powerUpThreeImg.addEventListener("click", () => powerUpThree.onPowerUpClick());



/* Fixing
powerUpOne.addEventListener("click", onPowerUpClick);
powerUpTwo.addEventListener("click", onPowerUpTwoClick);
powerUpThree.addEventListener("click", onPowerUpThreeClick);
*/

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
        gooCounterTxt.textContent= currentGooCount;
     
}

/* Three functions to control power ups ***Optimizing at
a later date
function onPowerUpOneClick()
{
    let oneGPS = 1;
    gooPerSecond += oneGPS;

    currentGooCount += gooPerSecond; 

    gooPerSecondTxt.textContent = gooPerSecond; 
    console.log(gooPerSecond);
}
function onPowerUpTwoClick()
{
    let fiveGPS = 5;
    gooPerSecond += fiveGPS;

    currentGooCount += gooPerSecond; 

    gooPerSecondTxt.textContent = gooPerSecond; 
    console.log(gooPerSecond);
}

function onPowerUpThreeClick()
{
     let tenGPS = 10; 
     gooPerSecond += tenGPS;

     currentGooCount += gooPerSecond; 

     gooPerSecondTxt.textContent = gooPerSecond; 
     console.log(gooPerSecond);
}
*/





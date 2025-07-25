
class PowerUp 
{
     constructor(name, cost, effect, amountPurchased, currentCostAmount, costAmountLabel,
                 amountPurchasedLabel)
     {
        this.name = name; 
        this.cost = cost; 
        this.effect = effect;
        this.amountPurchased = amountPurchased;
        this.currentCostAmount = currentCostAmount;
        this.costAmountLabel = costAmountLabel;
        this.amountLabelPurchased = amountPurchasedLabel
     }

     onPowerUpClick() 
     { 
       
        if(currentGooCount >= this.currentCostAmount)
        {
                this.amountPurchased++;
                this.amountLabelPurchased.textContent = this.amountPurchased;
                currentGooCount -= this.currentCostAmount;
                gooCounterTxt.textContent = currentGooCount;
                gooPerSecond += this.effect;
                gooPerSecondTxt.textContent = gooPerSecond;
                this.currentCostAmount += this.cost;
                this.costAmountLabel.textContent = this.currentCostAmount;

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
let gooPerSecondTxt = document.getElementById("goo-per-second-count-span");

let powerUpOneCostTxt = document.getElementById("power-up-one-cost-label");
let powerUpTwoCostTxt = document.getElementById("power-up-two-cost-label");
let powerUpThreeCostTxt = document.getElementById('power-up-three-cost-label');

let powerUpOneAmountPurchased = document.getElementById('power-up-one-amount');
let powerUpTwoAmountPurchased = document.getElementById('power-up-two-amount');
let powerUpThreeAmountPurchased = document.getElementById('power-up-three-amount');

//getting images
const gooImg = document.getElementById("goo-img");
const powerUpOneImg = document.getElementById("power-up-1");
const powerUpTwoImg = document.getElementById("power-up-2");
const powerUpThreeImg = document.getElementById("power-up-3");

//global variables
let currentGooCount = 0;
let gooPerSecond = 0; 
const time = 1000;

const powerUpOne = new PowerUp("x1", 10, 1, 0, 10, powerUpOneCostTxt, powerUpOneAmountPurchased);
const powerUpTwo = new PowerUp("x5", 50, 5, 0, 50, powerUpTwoCostTxt, powerUpTwoAmountPurchased);
const powerUpThree = new PowerUp("x5", 100, 10, 0, 100, powerUpThreeCostTxt, powerUpThreeAmountPurchased);

//initializations
gooPerSecondTxt.textContent = gooPerSecond;
powerUpOneCostTxt.textContent = 10;

setInterval(AddPassiveGoo, time);

//event listeners
gooImg.addEventListener("click", onGooClick);

powerUpOneImg.addEventListener("click", () => powerUpOne.onPowerUpClick());
powerUpTwoImg.addEventListener("click", () => powerUpTwo.onPowerUpClick());
powerUpThreeImg.addEventListener("click", () => powerUpThree.onPowerUpClick());

//functions
function addClickScore()
{
                let clickAmount = document.createElement("span");
                let maxOffset = 15;
                let offsetX = Math.floor(Math.random() * maxOffset); 
                let offsetY = Math.floor(Math.random() * maxOffset); 

                clickAmount.textContent = "+1";
                document.getElementById("main-goo-container").appendChild(clickAmount);

                clickAmount.style.fontSize = "30px";
                clickAmount.style.position = "absolute";
                clickAmount.style.left = event.clientX + offsetX + "px";
                clickAmount.style.top = event.clientY + offsetY +  "px";
                clickAmount.style.animation = "floatUpFade 1.5s forwards"; 
                clickAmount.style.transition = "all .04s";        

                clickAmount.addEventListener("animationend", () => 
                {
                        clickAmount.remove();
                });

}

 function onGooClick(event) 
{
        currentGooCount += 1; 
        gooCounterTxt.textContent = currentGooCount;

        addClickScore(); 
}
    
function AddPassiveGoo()
{   
        currentGooCount += gooPerSecond; 
        gooCounterTxt.textContent= currentGooCount;
     
}




// Variables: 

let recordSalesElement = document.getElementById("recordSalesMeter");
let recordImageElement = document.getElementsByTagName("img")[0];
let meterElement = document.getElementsByClassName("records-sold")[0];

let recordMeterText = 0

let recordRateElement = document.getElementById("records-second");
let recordRateMeter = document.getElementsByClassName("records-rate")[0];

let rateRate = 0

let localGigButton = document.getElementById("local-gigs-button");
let localGigQuantity = document.getElementById("local-gigs-quantity");
let localGigRate = document.getElementById("local-gigs-rate");

let gigQuantity = 0
let gigCost = 25



let recordStoresButton = document.getElementById("record-stores-button");
let recordStoresQuantity = document.getElementById("record-stores-quantity");
let recordStoresRate = document.getElementById("record-stores-rate");

let rsQuantity = 0
let rsCost = 150



let recordDealButton = document.getElementById("record-deal-button");
let recordDealQuantity = document.getElementById("record-deal-quantity");
let recordDealRate = document.getElementById("record-deal-rate");

let rdQuantity = 0
let rdCost = 1500



let superBowlButton = document.getElementById("superbowl-button");
let superBowlQuantity = document.getElementById("superbowl-quantity");
let superBowlRate = document.getElementById("superbowl-rate");

let sbQuantity = 0
let sbCost = 3000



let grammyButton = document.getElementById("grammy-button");
let grammyQuantity = document.getElementById("grammy-quantity");
let grammyRate = document.getElementById("grammy-rate");

let gmQuantity = 0
let gmCost = 6000


let setIntervalStart = false



function currencyCheckGig(){
    if (recordMeterText >= 25) {
        localGigButton.style.display ='block';
        console.log("Congrats, you can buy this now!")
    } else {
        localGigButton.style.display ='none';
        console.log("You need more money!")
    }
}
function currencyCheckStores(){
    if (recordMeterText >= 150) {
        recordStoresButton.style.display ='block';
        console.log("Congrats, you can buy this now!")
    } else {
        recordStoresButton.style.display ='none';
        console.log("You need more money!")
    }
}
function currencyCheckDeal(){
    if (recordMeterText >= 1500) {
        recordDealButton.style.display ='block';
        console.log("Congrats, you can buy this now!")
    } else {
        recordDealButton.style.display ='none';
        console.log("You need more money!")
    }
}
function currencyCheckBowl(){
    if (recordMeterText >= 3000) {
        superBowlButton.style.display ='block';
        console.log("Congrats, you can buy this now!")
    } else {
        superBowlButton.style.display ='none';
        console.log("You need more money!")
    }
}
function currencyCheckGrammy(){
    if (recordMeterText >= 6000) {
        grammyButton.style.display ='block';
        console.log("Congrats, you can buy this now!")
    } else {
        grammyButton.style.display ='none';
        console.log("You need more money!")
    }
}





function addRecordSales(){
    currencyCheckGig();
    currencyCheckStores();
    currencyCheckDeal();
    currencyCheckBowl();
    currencyCheckGrammy();
    recordMeterText = recordMeterText + 1;
    meterElement.textContent = recordMeterText + " Records Sold";
    console.log(`Current sales: ${recordMeterText}`);
}

recordImageElement.addEventListener("click", addRecordSales)



// Button/Meter: 

function intervalTimer(){
    recordMeterText = recordMeterText + rateRate;
    meterElement.textContent = recordMeterText + " Records Sold";
    currencyCheckGig();
    currencyCheckStores();
    currencyCheckDeal();
    currencyCheckBowl();
    currencyCheckGrammy();
}
function startButtonAction(){
    if (setIntervalStart == false){
        setInterval(intervalTimer, 1000);
        setIntervalStart = true;
    }
}

// Local Gigs:


function gigButtonAction(){
    rateRate = rateRate + 1;
    recordRateElement.textContent = rateRate;
    gigQuantity = gigQuantity + 1;
    localGigQuantity.textContent = "Quantity: " + gigQuantity;
    recordMeterText = recordMeterText - 25;
    meterElement.textContent = recordMeterText + " Records Sold";
    currencyCheckGig();
}
localGigButton.addEventListener("click", gigButtonAction);
localGigButton.addEventListener("click", startButtonAction);

// Record Stores:

function rsButtonAction(){
    rateRate = rateRate + 2;
    recordRateElement.textContent = rateRate;
    rsQuantity = rsQuantity + 1;
    recordStoresQuantity.textContent = "Quantity: " + rsQuantity;
    recordMeterText = recordMeterText - 150;
    meterElement.textContent = recordMeterText + " Records Sold";
    currencyCheckStores();
}
recordStoresButton.addEventListener("click", rsButtonAction);
recordStoresButton.addEventListener("click", startButtonAction);

// Record Deal:


function rdButtonAction(){
    rateRate = rateRate + 10;
    recordRateElement.textContent = rateRate;
    rdQuantity = rdQuantity + 1;
    recordDealQuantity.textContent = "Quantity: " + rdQuantity;
    recordMeterText = recordMeterText - 1500;
    meterElement.textContent = recordMeterText + " Records Sold";
    currencyCheckDeal();
}
recordDealButton.addEventListener("click", rdButtonAction);
recordDealButton.addEventListener("click", startButtonAction);

// SuperBowl Performance: 



function sbButtonAction(){
    rateRate = rateRate + 50;
    recordRateElement.textContent = rateRate;
    sbQuantity = sbQuantity + 1;
    superBowlQuantity.textContent = "Quantity: " + sbQuantity;
    recordMeterText = recordMeterText - 3000;
    meterElement.textContent = recordMeterText + " Records Sold";
    currencyCheckBowl();
}
superBowlButton.addEventListener("click", sbButtonAction);
superBowlButton.addEventListener("click", startButtonAction);

// Grammy Win:



function grammyButtonAction(){
    rateRate = rateRate + 100;
    recordRateElement.textContent = rateRate;
    gmQuantity = gmQuantity + 1;
    grammyQuantity.textContent = "Quantity: " + gmQuantity;
    recordMeterText = recordMeterText - 6000;
    meterElement.textContent = recordMeterText + " Records Sold";
    currencyCheckGrammy();
}
grammyButton.addEventListener("click", grammyButtonAction);
grammyButton.addEventListener("click", startButtonAction);





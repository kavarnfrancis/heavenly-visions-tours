// extra selection choices
const tourSel = document.getElementsByName('tourSel'); // radio
const packageSel = document.getElementsByName('packageSel');
const accommodationSel = document.getElementById('accommodationSel'); // checkbox
const cateringSel = document.getElementById('cateringSel');
const transportSel = document.getElementById('transportSel');


// extra selection expanding
const bedSection = document.getElementById('bedSection');
const cateringHideSection = document.getElementById('cateringHideSection');
 
const addressSection = document.getElementById('addressSection');


// extra selection more options
const doubleBedInput = document.getElementsByName('doubleBedInput');
const singleBedInput = document.getElementsByName('singleBedInput');

const dietToggle = document.getElementsByName('diet');
const dietMisc = document.getElementsByName('dietMisc');

const allergyToggle = document.getElementsByName('allergen');
const allergyMisc = document.getElementsByName('allergyMisc');


const reqField = document.getElementsByClassName('reqField');


const allInputs = document.getElementsByTagName('input');
const clearFormBtn = document.getElementById('clearButton');
const checkoutBtn = document.getElementById('checkoutButton');
 

// cost replacing
const standardCostDiv = document.getElementById('standardCost');
const specialCostDiv = document.getElementById('specialCost');
 
const singleBedCostDiv = document.getElementById('singleBedCost');
const doubleBedCostDiv = document.getElementById('doubleBedCost');




const standardCostAmount = 20;
const specialCostAmount = 35;

standardCostDiv.innerHTML = `$${standardCostAmount}`;
specialCostDiv.innerHTML = `$${specialCostAmount}`;

const singleBedCost = 50;
const doubleBedCost = 80;

singleBedCostDiv.innerHTML = `$${singleBedCost}`;
doubleBedCostDiv.innerHTML = `$${doubleBedCost}`;







function checkReqField(check = false, value = "null", text = "null"){

    let foundField;

    Array.from(reqField).forEach (field => {
        if (field.value == value){
            foundField = field
        }
    });
    
    if (foundField != null) {
        foundField.innerHTML = check ? `${text}` : `${text} <span class="redText">*</span>`;
    } else {
        console.log("req field not valid.")
        console.log(foundField);
    }
}

let tourSelected = '';
let tourCost = 0;
let isTourSelected = false;

// tours
for (let selection of tourSel){
    selection.addEventListener('change', (e) => {
        isTourSelected = true;
        checkReqField(isTourSelected, 'tour', 'Tour')

        switch (e.target.value){
            case 'halberryPass':
                tourSelected = 'Halberry Pass';
                tourCost = 40;
            break;
            case 'pintoReserve':
                tourSelected = 'Pinto Reserve';
                tourCost = 30;
            break;
            case 'bulderOutlook':
                tourSelected = 'Bulder Outlook';
                tourCost = 50;
            break;
        }

        console.log(selection.value);
        updateOrder();
        
    });
}


let packageSelected = '';
let packageCost = 0;
let isPackageSelected = false;

// package
for (let selection of packageSel){
    selection.addEventListener('change', (e) => {
        isPackageSelected = true;
        checkReqField(isPackageSelected, 'package', 'Package');

        switch (e.target.value) {
            case 'standard':
                packageSelected = "Standard";
                packageCost = 1;
            break;
            case 'special':
                packageSelected = "Specialized";
                packageCost = 1.2;
            break;
        }

        console.log(selection.value);
        updateOrder();
    });
}



bedSection.hidden = true;
let accomSelected = false;
accommodationSel.addEventListener('change', (e) => {
    bedSection.hidden = !e.target.checked; 
    accomSelected = e.target.checked; 
});

let bedsSelected = 0;
const bedBaseCost = 50;



cateringHideSection.hidden = true;
let isCateringSelected = false;
cateringSel.addEventListener('change', (e) => {
    cateringHideSection.hidden = !e.target.checked;
    isCateringSelected = true;
    
});



addressSection.hidden = true;
let isTransportSelected = false;
transportSel.addEventListener('change', (e) => {
    addressSection.hidden = !e.target.checked;
    isTransportSelected = e.target.checked;
})




function updateOrder(){
    const cost = 
    tourCost * ( packageCost + (bedsSelected * bedBaseCost));

}





clearFormBtn.addEventListener('click', clearOrder);

function clearOrder(){
    Array.from(allInputs).forEach(input =>
    {
        switch (input.type){
            case 'checkbox' :
            case 'radio':
                input.checked = false;
            break;
            
            default:
                input.value = "";
            break;
        }
    });

    tourSelected = '';
    tourCost = 0;
    isTourSelected = false;
    checkReqField(isTourSelected, 'tour', 'Tour');
    packageSelected = '';
    packageCost = 0;
    isPackageSelected = false;
    checkReqField(isPackageSelected, 'package', 'Package');
    updateOrder();
}


let isAddressEntered = false;
let areBedsEntered = false;


checkReqField(tourSelected, 'tour', 'Tour')
checkReqField(isPackageSelected, 'package', 'Package');
checkReqField(isAddressEntered, 'addressInput', "Address : ");
checkReqField(areBedsEntered, 'bedsInput', 'Beds : ');


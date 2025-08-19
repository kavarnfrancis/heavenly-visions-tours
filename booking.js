
// extra selection choices
const tourSel = document.getElementsByName('tourSel'); // radio
const packageSel = document.getElementsByName('packageSel');
const accommodationSel = document.getElementById('accommodationSel'); // checkbox
const cateringSel = document.getElementById('cateringSel');


// extra selection expanding
const bedSection = document.getElementById('bedSection');
const allergenSection = document.getElementById('allergenSection');
const addressSection = document.getElementById('addressSection');

const nutsSection = document.getElementById('nutsSection');

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


clearFormBtn.addEventListener('click', clearOrder);




function checkReqField(check, value, text){

    let foundField;

    Array.from(reqField).forEach (field => {
        if (field.getAttribute('value') == value){
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

let tour = '';
let tourCost = 0;
let tourSelected = false;

// tours
for (let selection of tourSel){
    selection.addEventListener('change', (event => {
        tourSelected = true;
        checkReqField(tourSelected, 'tour', 'Tour')

        switch (selection.value){
            case 'halberryPass':
                tour = 'Halberry Pass';
                tourCost = 20;
            break;
            case 'pintoReserve':
                tour = 'Pinto Reserve';
                tourCost = 20;
            break;
            case 'bulderOutlook':
                tour = 'Bulder Outlook';
                tourCost = 20;
            break;
        }

        console.log(selection.value);
        updateOrder();
        
    }));
}

let package = '';
let packageCost = 0;
let packageSelected = false;

// package
for (let selection of packageSel){

    selection.addEventListener('change', (event => {
        packageSelected = true;
        checkReqField(packageSelected, 'package', 'Package');

        if (selection.value == 'standard'){
            packageCost = 0;
        } else {
            packageCost = 20;
        }
        console.log(selection.value);
        updateOrder();
    }));
}




function updateOrder(){
    let cost = tourCost + packageCost;
    


}

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

    tour = '';
    tourCost = 0;
    tourSelected = false;
    checkReqField(tourSelected, 'tour', 'Tour');
    package = '';
    packageCost = 0;
    packageSelected = false;
    checkReqField(packageSelected, 'package', 'Package');


    updateOrder();
}



let addressEntered = false;
let bedsEntered = false;


checkReqField(tourSelected, 'tour', 'Tour')
checkReqField(packageSelected, 'package', 'Package');
checkReqField(addressEntered, 'addressInput', 'Address');
checkReqField(bedsEntered, 'bedsInput', 'Beds');





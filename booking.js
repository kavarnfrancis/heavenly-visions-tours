import * as loader from 'bookingLoader.js';




console.log(loader.accomSelected)


const standardCostAmount = 20;
const specialCostAmount = 35;

loader.standardCostDiv.innerHTML = `$${standardCostAmount}`;
loader.specialCostDiv.innerHTML = `$${specialCostAmount}`;

const singleBedCost = 50;
const doubleBedCost = 80;

loader.singleBedCostDiv.innerHTML = `$${singleBedCost}`;
loader.doubleBedCostDiv.innerHTML = `$${doubleBedCost}`;







function checkReqField(check = false, value = "null", text = "null"){

    let foundField;

    Array.from(loader.reqField).forEach (field => {
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
for (let selection of loader.tourSel){
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
for (let selection of loader.packageSel){
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



loader.bedSection.hidden = true;
let accomSelected = false;
loader.accommodationSel.addEventListener('change', (e) => {
    loader.bedSection.hidden = !e.target.checked; 
    accomSelected = e.target.checked; 
});

let bedsSelected = 0;
const bedBaseCost = 50;



loader.cateringHideSection.hidden = true;
let isCateringSelected = false;
loader.cateringSel.addEventListener('change', (e) => {
    loader.cateringHideSection.hidden = !e.target.checked;
    isCateringSelected = true;
    
});



loader.addressSection.hidden = true;
let isTransportSelected = false;
loader.transportSel.addEventListener('change', (e) => {
    loader.addressSection.hidden = !e.target.checked;
    isTransportSelected = e.target.checked;
})




function updateOrder(){
    const cost = 
    tourCost * ( packageCost + (bedsSelected * bedBaseCost));

}





loader.clearFormBtn.addEventListener('click', clearOrder);

function clearOrder(){
    Array.from(loader.allInputs).forEach(input =>
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


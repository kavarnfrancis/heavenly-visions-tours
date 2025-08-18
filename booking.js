
// extra selection choices
const tourSel = document.getElementsByName('tourSel'); // radio
const packageSel = document.getElementsByName('packagesel');
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

const dairySel = document.getElementsByName('dairy');
const glutenSel = document.getElementsByName('gluten');
const soySel = document.getElementsByName('soy');
const nutsSel = document.getElementsByName('nuts');
const allergyMisc = document.getElementsByName('allergyMisc');



function updateOrder(){

}


let tour = '';
let tourCost = 0;
// tours
for (let selection of tourSel){
    selection.addEventListener('change', (event => {
    if (selection.value == 'halberryPass'){
    tour = 'Halberry Pass';
    tourCost = 20;
    } else if (selection.value == 'pintoReserve'){

    } else {

    }
    console.log(selection.value);
    updateOrder();
    }));
}


// package
for (let selection of packageSel){
    selection.addEventListener('change', (event => {
    if (selection.value == 'standard'){

    } else {

    }
    console.log(selection.value);
    updateOrder();
    }));
}






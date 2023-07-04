// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = array => {
    let validationArray = [];

    for(let j = array.length - 1; j >= 7; j--) {
        if(j === array.length - 1){
            validationArray.push(array[j]);
        }
    }

    for(let i = array.length - 2; i >= 0; i--) {
        //console.log('before any calc: ' + array[i]); //correct - starts with rightmost number minus one
        //validationArray.push(array[i]);

        if(i % 2 == 0){
            //console.log('inside if ' +i); //working fine
            let double = array[i] * 2;
            //console.log(double); //correct
            if (double > 9) {
                //console.log('before -ve 9: '+double); //correct
                double -= 9;
                //console.log('after taking away 9: '+double); //correct
                validationArray.push(double);
            } else if (double < 9) {
                validationArray.push(double);
            } else {
                //console.log('else log: '+i);
                validationArray.push(array[i]);
            }
        } else {
            validationArray.push(array[i]);
        }
    }
    let sumTotal = 0;
    validationArray.forEach(element => {
        sumTotal += element;
    })
    //console.log(sumTotal);

    if (sumTotal % 10 === 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(validateCred(valid4));


const findInvalidCards = cardArray => {
    let invalidCardsArray = [];
    cardArray.forEach(array => {
        if(validateCred(array) === 'false') {
            invalidCardsArray.push(array);
        }
    })
    console.log(invalidCardsArray);
}

findInvalidCards(batch);


const idInvalidCardCompanies = invalidCardsArray => {
    let invalidCardCompanies = [];
    invalidCardsArray.forEach(card => {
        let index = 0;
        switch (card.at(index)) {
            case 3:
                if (!invalidCardCompanies.includes('Amex'))
                invalidCardCompanies.push('Amex');
                break;
            case 4:
                if (!invalidCardCompanies.includes('Visa'))
                invalidCardCompanies.push('Visa');
                break;
            case 5:
                if (!invalidCardCompanies.includes('Mastercard'))
                invalidCardCompanies.push('Mastercard');
                break;
            case 6:
                if (!invalidCardCompanies.includes('Discover'))
                invalidCardCompanies.push('Discover');
                break;    
            default:
                console.log('company not found');
        }
        console.log(invalidCardCompanies);
    })

idInvalidCardCompanies(invalidCardsArray);

}
   
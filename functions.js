// input = animal ex. fish
// output = animal product  ex. fish stix

function nuggetizer(animal){
    return `${animal} stix`
};
// now we want to return the string and the words stix
console.log ('fish:', nuggetizer('fish'));
console.log ('fish:', nuggetizer('cat'));
console.log ('fish:', nuggetizer('bear'));

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};

console.log('deer:', nuggetizer2('deer'));


const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

const bearSticks = nuggetizer2('bear');
console.log(nomnom('zoe', bearSticks)); // zoe devoured bear stix

//function numberAdder that takes in a number and 
//returns the number plus 3. so input=22, output =25.

const numberAdder = (num) => {
    //return num +3; below we are using that variable to print to the dom instead.
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};
//this code you will be using quite frequently
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
//console.log('num: ', numberAdder(22)); again printing to the dom below 
numberAdder(22);
numberAdder(2);

//function atomicNumber takes in a number and returns the number plus 5. input = 14 and output = 19.


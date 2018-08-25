

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
}

let bandNumber = 1

//print the band name
//deal with counter
const takeNumber = (bandName) => {
    const bandString = `<h3>${bandNumber}. ${bandName}<h3>`; 
    bandNumber++;
    printToDom(bandString, 'bandz');
};



takeNumber("Galactic Scum");
takeNumber("Underdogs");
// these are one input so that's why they become bandName



//const takeNumber = (bandNumber) => {
 //   const bandString = `<h3>${bandNumber}. + ${bandName}<h3>` bandNumber++;
   // printToDom(bandString, 'bandz');
//};
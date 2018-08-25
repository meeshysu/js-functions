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

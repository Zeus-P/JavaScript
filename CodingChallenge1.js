var markMass,markHeight,johnMass,johnHeight;
markMass = prompt('Enter Mass of Mark in Kg ');
markHeight = prompt('Enter height of Mark in Meters');
johnMass = prompt('Enter Mass of john in Kg ');
johnHeight = prompt('Enter height of john in Meters');

var markBMI, johnBMI;
markBMI = markMass/(markHeight*markHeight);
johnBMI = johnMass/(johnHeight**2);

console.log('Mark\'s BMI :',markBMI );
console.log('John\'s BMI : '+johnBMI );

var johnHasMore = johnBMI>markBMI;

console.log('Is John has More BMI :'+johnHasMore);

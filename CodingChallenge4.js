var john = {
    firstName : 'John',
    lastname : 'Smith',
    mass : 78,
    height : 1.5,
    calcBmi : function(){
        this.bmi = this.mass/this.height**2;      
    }
};

var mark = new Object();
mark.firstName = 'Mark';
mark.lastname = 'Smith';
mark['mass'] = 78;
mark['height'] = 1.5;
mark.calcBmi = function(){
    this.bmi = this.mass/this.height**2;
}
mark.calcBmi();
john.calcBmi();
console.log(john);
console.log(mark);

if(john.bmi > mark.bmi)
    console.log('John\'s BMI is Higher : ' + john.bmi);
else if(john.bmi < mark.bmi)
    console.log('Mark\'s BMI is Higher : ', mark.bmi);
else 
    console.log('They have Equal BMIs ');
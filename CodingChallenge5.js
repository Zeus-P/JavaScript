var john  = {
    fullName : 'John Smith',
    family : ['Jane', 'Mark', 'Emily'],
    bills : [124, 48, 268, 180, 42],
    calcTip : function (){
        this.tip = [];
        this.finalValues = [];
        var percentage;
        for(var i = 0;i<this.bills.length;i++){
            if(this.bills[i] < 50)
                percentage = 0.2;
            else if(this.bills[i] >= 50 && this.bills[i] <= 200)
                percentage = 0.15;
            else
                percentage = 0.1;
            this.tip.push(this.bills[i] * percentage);
            this.finalValues.push(this.bills[i] + this.tip[i]);
        }
    }
}
var mark  = {
    fullName : 'Mark Miller',
    family : ['Jane', 'John', 'Emily'],
    bills : [75,475,110,45],
    calcTip : function (){
        this.tip = [];
        this.finalValues = [];
        
        var percentage;
        for(var i = 0;i<this.bills.length;i++){
            var bill = this.bills[i];
            if(bill < 100)
                percentage = 0.2;
            else if(bill >= 100 && bill < 300)
                percentage = 0.1;
            else
                percentage = 0.25;
            this.tip[i] = (bill * percentage);
            this.finalValues[i] = (bill + bill * percentage);
        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for(var i = 0;i < tips.length;i++)
        sum += tips[i];
    return (sum / tips.length);
    
}
console.log(john, mark);
mark.calcTip();
john.calcTip();
console.log(john.tip);
console.log(john.finalValues);
console.log(mark.tip);
console.log(mark.finalValues);

john.average  = calcAverage(john.tip);
mark.average  = calcAverage(mark.tip);
console.log(john,mark);

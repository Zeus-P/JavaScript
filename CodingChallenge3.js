function tipCalculator(bill){
    if(bill > 200)
        bill += bill * (10/100);
    else if(bill >= 50 && bill <= 200)
        bill += bill *(15/100);
    else bill += bill * (20/100);
    //paidAmounts.push(bill);
    return bill;
}
var bills = [124, 48, 268];
var paidAmounts = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];

console.log('Bills Are : '+bills);
//paidAmounts = [];
console.log('Paid Amounts Are : '+paidAmounts);

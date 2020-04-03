var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 103;

var markTeamScore1 = 116;
var markTeamScore2 = 94;
var markTeamScore3 = 123;

var maryTeamScore1 = 97;
var maryTeamScore2 = 134;
var maryTeamScore3 = 105;

var johnTeamAvg = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3)/3;
var markTeamAvg = (markTeamScore1+markTeamScore2+markTeamScore3)/3;
var maryTeamAvg = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;
console.log(johnTeamAvg, markTeamAvg, maryTeamAvg);

if(johnTeamAvg > markTeamAvg && johnTeamAvg > maryTeamAvg)
        console.log('John Team has Highest : '+ johnTeamAvg);
else if(markTeamAvg > johnTeamAvg && markTeamAvg > maryTeamAvg)
        console.log('Mark Has Highest : '+markTeamAvg);
else if(maryTeamAvg>johnTeamAvg && maryTeamAvg > markTeamAvg)
        console.log('Mary Has Highest : '+maryTeamAvg);
else
        console.log('Draw');




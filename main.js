
var answerArea = document.getElementById("ans");
var answer = document.createElement("h1");
var answerNode;
var date;
var day
var hour;
var mins;
var open = false;

date = new Date();
day = date.getDay();
hour = date.getHours();
mins = date.getMinutes();

if(day >= 0 && day <= 4) {
    if(hour >= 19 && hour <= 23) {
        if(hour === 19 || hour === 23) {
            if(mins <= 45) {
                open = true;
            }
        }
        else {
            open = true;
        }
    }
}
if(day >= 1 && day <= 3) {
    if(hour >= 8 && hour <= 16) {
        if(hour == 16) {
            if(mins >= 30) {
                open = true;
            }
        }
        else { 
            open = true;
        }
    }
}
if(day == 4) {
    if (hour >= 8 && hour <= 16) {
        open = true;
    }
}

if(open === true) {
    answerNode = document.createTextNode("YES");
    answer.classList.add("yes");
}
else {
    answerNode = document.createTextNode("NO");
    answer.classList.add("no");
}

answer.appendChild(answerNode);
answerArea.appendChild(answer);
console.log('Java file is loaded!');

const fs = require("fs");

let fileString = fs.readFileSync("msglog.txt").toString();
console.log(fileString);




var total = 0;
        
function myClick(){
    //console.log("You clicked the button!");
    total += 1;
    document.getElementById('total-text').innerHTML = "Times Clicked: " + total;
}



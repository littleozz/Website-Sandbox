console.log('Java file is loaded!');

var fs = require('fs');

let fileString = fs.readFileSync("msglogs.txt").toString();
fileString = fileString.replace(/13/,"14");

fs.writeFileSync("msglogs.txt", fileString)

console.log(fileString);




var total = 0;
        
function myClick(){
    //console.log("You clicked the button!");
    total += 1;
    document.getElementById('total-text').innerHTML = "Times Clicked: " + total;
}



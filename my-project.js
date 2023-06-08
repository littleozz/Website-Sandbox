console.log('Java file is loaded!');

const fs = require('fs');

fs.writeFile('output.txt', 'Hello World.', err => {
    if (err) console.error(err);
    else console.log('Data written to file successfully.');

});



var total = 0;
        
function myClick(){
    //console.log("You clicked the button!");
    total += 1;
    document.getElementById('total-text').innerHTML = "Times Clicked: " + total;
}



console.log('Java file is loaded!');


var total = 0;
        
function myClick(){
    console.log("You clicked the button!");
    total += 1;
    document.getElementById('total-text').innerHTML = "Times Clicked: " + total;
}



console.log('Java file is loaded!');


var chatBox = document.getElementById("chat");
chatBox.addEventListender("keyup", function (event) {
    if (event.keyCode != 13) {
        console.log("logged!");
    }
});

function myFunction(){
    console.log("hello");
    return 0;
}


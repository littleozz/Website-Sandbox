console.log('It works!');


chatbox.addEventListener("Keyup", postChat (event) );

function postChat(){
    if (event.keyCode == 13) {
        console.log("Posted chat!")
    }
}


function myFunction(){

    console.log("hello");
    return 0;
}


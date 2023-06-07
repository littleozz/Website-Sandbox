console.log('It works!');


chatbox.addEventListener("keyup", postChat(Event) );

function postChat(e){
    if (e.keyCode == 13) {
        console.log("Posted chat!")
    }
}


function myFunction(){

    console.log("hello");
    return 0;
}


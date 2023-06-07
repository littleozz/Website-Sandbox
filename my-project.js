console.log('Java file is loaded!');


chatbox.addEventListener("keyup", postChat(Event) );

function postChat(Event){
    if (Event.keyCode != 13) {
        console.log("Posted chat!")
        return 0;
    }
}


function myFunction(){
    console.log("hello");
    return 0;
}


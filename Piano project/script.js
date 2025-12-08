let keys = document.querySelectorAll(".key");

// FUNCTION for playaudio
function playAudio(note) {
    let audio;

    if (note === "C") audio = new Audio("sounds/C.mp3");
    else if (note === "D") audio = new Audio("sounds/D.mp3");
    else if (note === "E") audio = new Audio("sounds/E.mp3");
    else if (note === "F") audio = new Audio("sounds/F.mp3");
    else if (note === "G") audio = new Audio("sounds/G.mp3");
    else if (note === "A") audio = new Audio("sounds/A.mp3");
    else if (note === "B") audio = new Audio("sounds/B.mp3");

    else if (note === "Csharp") audio = new Audio("sounds/Csharp.mp3");
    else if (note === "Dsharp") audio = new Audio("sounds/Dsharp.mp3");
    else if (note === "Gsharp") audio = new Audio("sounds/Gsharp.mp3");
    else if (note === "Asharp") audio = new Audio("sounds/Asharp.mp3");
    else if (note === "Fsharp") audio = new Audio("sounds/Fsharp.mp3");
    else return;

    audio.currentTime = 0;
    audio.play();
}

// CLICK event
keys.forEach(function(key) {
    key.addEventListener("click", function() {
        let note = key.dataset.note;
        playAudio(note);
    });
});

// KEYBOARD event
document.addEventListener("keydown", function(e) {
    let key = e.key.toLowerCase();
    let note;

    if (key === "c") note = "C";
    else if (key === "d") note = "D";
    else if (key === "e") note = "E";
    else if (key === "f") note = "F";
    else if (key === "g") note = "G";
    else if (key === "a") note = "A";
    else if (key === "b") note = "B";

    else if (key === "j") note = "Csharp";
    else if (key === "k") note = "Dsharp";  
    else if (key === "l") note = "Gsharp";
    else if (key === "m") note = "Asharp";
    else if (key === "n") note = "Fsharp";
    else return;

    playAudio(note);
});


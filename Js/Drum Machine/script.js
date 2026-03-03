const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById('display');

playSound = (key) =>{
    const audio = document.getElementById(key);
      if(audio){
        audio.currentTime = 0;
        audio.play();
        display.textContent = audio.dataset.name;
    }
 
};

pads.forEach(pad =>{
    pad.addEventListener("click", () =>{
        const key = pad.querySelector(".clip").id;
       playSound(key);
    });
});

document.addEventListener("keydown", (e) =>{
    playSound(e.key.toUpperCase());
});




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
       console.log(key); //kiedy element .clip nie ma id to key jest null
       playSound(key);
    });
});

document.addEventListener("keydown", (e) =>{
    playSound(e.key.toUpperCase());
});


//Co się stanie jak pad nie będzie istniał, albo element .clip nie będzie miał id?
//Gdy clip nie ma id, to nie wyskakuje błąd, ale nic się nie dzieje po wywołaniu playSound(key)

// I jak się zabezpieczyć przed takimi przypadkami?
//Ustawić domyślną wartość dla key / domyślny dźwięk w przypadku kiedy jest null 




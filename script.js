let loadText= document.querySelector(".loading-text");
let bg = document.querySelector(".bg");


let load = 0;
let int = setInterval(blurring,30);

function blurring() {
    load++;
    if (load > 99){
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load,0,100,0,1);
    bg.style.filter = `blur(${scale(load,30,100,0,30)}px)`
}
// https://stackoverflow.com/questions/929103/
// convert-a-number-range-to-another-range-maintaining-ratio

function scale (oldNum, oldMin, oldMax, newMax, newMin) {
    return (((oldNum - oldMin) *(newMax - newMin))/(oldMax - oldMin)) + newMin
}

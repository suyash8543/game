score = 0;
cross = true;
Audiogo = new Audio('gameover.mp3');

Audio = new Audio('background.mp3');
Audio.loop = true;
setTimeout(()=> {
    Audio.play();
},1000);
document.onkeydown = function (e) {
    console.log("Key code is:", e.key); // Log the key pressed

    // Check if the pressed key is the "ArrowUp" key
    if (e.key === "ArrowUp") {
        let biker = document.querySelector('.biker'); // Select the biker element
        biker.classList.add('animateBiker'); // Add the animation class

        // Remove the animation class after 700 milliseconds
        setTimeout(() => {
            biker.classList.remove('animateBiker'); // Remove the animation class
        }, 700);
    }

if (e.key === "ArrowUp") {
    biker = document.querySelector(`.biker`);
    bikerX = parseInt(window.getComputedStyle(biker,null).getPropertyValue('left'));
    
        biker.style.left = bikerX + 112 + "px"; // Move right
    

    
}

if (e.key === "ArrowLeft") {
    biker = document.querySelector(`.biker`);
    bikerX = parseInt(window.getComputedStyle(biker,null).getPropertyValue('left'));
    biker.style.left = (bikerX - 112) + "px";
    

}
    

}


setInterval(() => {
    biker = document.querySelector('.biker');
    gameOver =  document.querySelector('.gameOver');
    obstacle1 =  document.querySelector('.obstacle1');

    dx = parseInt(window.getComputedStyle(biker,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(biker,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle1,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle1,null).getPropertyValue('top'));
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log("biker position",dx,dy);
    console.log("obstacle1",ox,oy);
    console.log (offsetX,offsetY);
    if(offsetX< 93 && offsetY<143){
        gameOver.style.visibility = 'visible';
        obstacle1.classList.remove('obstacle1Ani');
        Audiogo.play();
        setTimeout(() =>{
            Audiogo.pause();
        },1000);

    }
    else if (offsetX< 145 && cross){
        score +=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        
        setTimeout(() => {
            aniDur= parseFloat(window.getComputedStyle(obstacle1,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle1.style.animationDuration = newDur +'s';
            console.log('new animation duration', newDur)
        },500);
    }
},10);
 
function updateScore(score){
    scoreCount.innerHTML= "Your Score:" + score;
}


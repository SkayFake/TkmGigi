function createBalloon() {
    const container = document.querySelector('.balloon-container');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDuration = Math.random() * 3 + 5 + 's';

   
    for (let i = 0; i < 2; i++) {
        const serpentine = document.createElement('div');
        serpentine.classList.add('serpentinas');
        serpentine.style.left = Math.random() * 100 + '%';
        serpentine.style.top = Math.random() * 100 + '%';
        serpentine.style.animationDuration = Math.random() * 2 + 2 + 's';
        container.appendChild(serpentine);
    }

    
    for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = Math.random() * 1 + 1 + 's';
        container.appendChild(sparkle);
    }

    container.appendChild(balloon);

    setTimeout(() => {
        container.removeChild(balloon);
    }, 10000);
}


setInterval(createBalloon, 1000);


function continuar() {

    window.location.href = "adr2.html";

}

function cancelar() {
    window.location.href = "troste.html";
}



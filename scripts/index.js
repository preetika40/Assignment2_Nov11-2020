let c, ctx;
//Display pause button using canvas
(() => {
    c = document.querySelector(".pause-btn");
    ctx = c.getContext("2d");
    ctx.moveTo(15,15);
    ctx.lineTo(15,35); 
    ctx.lineTo(20,35);
    ctx.lineTo(20,15);
    ctx.lineTo(15,15);
    ctx.moveTo(30,15);
    ctx.lineTo(30,35);
    ctx.lineTo(35,35);
    ctx.lineTo(35,15);
    ctx.lineTo(30,15);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
})();

//Display pause button using canvas
(() => {
    c = document.querySelector(".play-btn");
    ctx = c.getContext("2d");
    ctx.moveTo(10,10);
    ctx.lineTo(10,40);
    ctx.lineTo(45,25);
    ctx.lineTo(10,10);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
})();

////Display stop button using canvas
(() => {
    c = document.querySelector(".stop-btn");
    ctx = c.getContext("2d");
    ctx.moveTo(15,15);
    ctx.lineTo(15,35);
    ctx.lineTo(35,35);
    ctx.lineTo(35,15);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
})();


//toggle function to hide/show data

const btn = document.querySelector('.toggle-btn');
btn.addEventListener('click', () => {
    document.querySelector(".hide-video").classList.toggle('hide');
    document.querySelector(".hide-content").classList.toggle('hide');
    document.querySelector(".show-video").classList.toggle('show');
    document.querySelector(".show-content").classList.toggle('show');
    if (btn.innerHTML === "Show content")
    {
        btn.innerHTML = "Hide content"; 
    }
    else
    {
        btn.innerHTML = "Show content";
    }
    
})
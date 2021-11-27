let container = document.getElementById('container');
let img = document.querySelector('img');

container.addEventListener('mousemove', (event) => {
    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});


container.addEventListener('mouseleave', ()=> {
    img.style.transformOrigin = 'center center';
    img.style.transform = "scale(1)";
})
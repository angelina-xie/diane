const draggable = document.getElementById ('draggable');

let isDragging=false;
let offsetX, offsetY;
let initialZIndex=1;

draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = 'grabbing'
    draggable.style.zindex=1000;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggable.style.position = 'fixed';
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'grab';
    draggable.Z.Index = initialZIndex
});
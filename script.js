const draggable = document.getElementById('draggable');

let isDragging = false;
let offsetX, offsetY;
let initialZIndex = 1;

draggable.addEventListener('mousedown', startDrag);
draggable.addEventListener('touchstart', startDrag, { passive: false });

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag, { passive: false });

document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

function startDrag(e) {
    e.preventDefault(); 
    isDragging = true;
    const event = e.touches ? e.touches[0] : e; 
    
    offsetX = event.clientX - draggable.getBoundingClientRect().left;
    offsetY = event.clientY - draggable.getBoundingClientRect().top;
    
    draggable.style.cursor = 'grabbing';
    draggable.style.zIndex = 1000;
}

function drag(e) {
    if (!isDragging) return;
    const event = e.touches ? e.touches[0] : e;
    
    draggable.style.position = 'fixed';
    draggable.style.left = `${event.clientX - offsetX}px`;
    draggable.style.top = `${event.clientY - offsetY}px`;
    
    e.preventDefault(); 
}

function endDrag() {
    isDragging = false;
    draggable.style.cursor = 'grab';
    draggable.style.zIndex = initialZIndex;
}

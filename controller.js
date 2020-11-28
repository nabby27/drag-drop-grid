window.onload = onInit;

let imageContainerElements = [];
let containerElement = null;

let currentElementDrag = null;
let placeholder = null;

function onInit() {
  console.log('Init');
  registerElements();
  addEvents();
}

function registerElements() {
  imageContainerElements = document.querySelectorAll('.image-container');
  containerElement = document.getElementById('container');
}

function addEvents() {
  imageContainerElements.forEach((imageContainerElement) => {
    imageContainerElement.addEventListener('dragstart', handleDragStart, false);
    imageContainerElement.addEventListener('dragenter', handleDragEnter, false);
    imageContainerElement.addEventListener('dragend', handleDragEnd, false);
  });
}

function handleDragStart(event) {  
  console.log('Drag Start');
  console.log(event);
  
  currentElementDrag = this.cloneNode(true);
  
  createPlaceholder(this);
  hideElementDragged(this);
}

function handleDragEnter(event) {
  event.preventDefault();
  
  console.log('Drag Enter');
  console.log(event);

  containerElement.insertBefore(placeholder, this);
}

function handleDragEnd(event) {  
  console.log('Drag End');
  console.log(event);

  containerElement.replaceChild(currentElementDrag, placeholder);

  currentElementDrag = null;
  placeholder = null;
}

function createPlaceholder(currentElementDrag) {
  const classList = currentElementDrag.classList.value.split(' ');
  classList.push('image-container--placeholder');

  placeholder = document.createElement('div');
  placeholder.classList.add(...classList);
}

function hideElementDragged(currentElementDrag) {
  // currentElementDrag.style.visibility = 'hidden';
  // currentElementDrag.style.position = 'absolute';
  // currentElementDrag.style.width = '10px';
  // currentElementDrag.style.height = '10px';
  // currentElementDrag.style.transform = 'translateX(-9999px)';
  // currentElementDrag.style.zIndex = '-1';
}
window.onload = onInit;

let imageContainerElements = [];
let containerElement = null;

let currentElementDrag = null;
let currentElementDragCloned = null;
let placeholder = null;

function onInit() {
  registerElements();
  addDragEvents();
}

function registerElements() {
  imageContainerElements = document.querySelectorAll('.image-container');
  containerElement = document.getElementById('container');
}

function addDragEvents() {
  imageContainerElements.forEach((imageContainerElement) => {
    addDragEventsOnElement(imageContainerElement);
  });
}

function handleDragStart() {   
  currentElementDrag = this;
  currentElementDragCloned = this.cloneNode(true);

  createPlaceholder(currentElementDrag);
  hideElementDragged(currentElementDrag);
}

function handleDragEnter() {
  containerElement.insertBefore(placeholder, this);
}

function handleDragEnd() {
  currentElementDrag.remove();
  containerElement.replaceChild(currentElementDragCloned, placeholder);

  addDragEventsOnElement(currentElementDragCloned)
}

function addDragEventsOnElement(element) {
  element.addEventListener('dragstart', handleDragStart, false);
  element.addEventListener('dragenter', handleDragEnter, false);
  element.addEventListener('dragend', handleDragEnd, false);
}

function createPlaceholder(element) {
  const classList = element.classList.value.split(' ');
  classList.push('image-container--placeholder');
  
  placeholder = element.cloneNode(true);
  // placeholder = document.createElement('div');
  placeholder.classList.add('image-container--placeholder');
}

function hideElementDragged(element) {
  element.classList.add('image-container--hide');
}

function resetVariables() {
  currentElementDrag = null;
  currentElementDragCloned = null;
  placeholder = null;
}
window.onload = onInit;

let imageContainerElements = [];
let containerElement = null;

let currentElementDrag = null;

function onInit() {
  registerElements();
  addDragEvents();
}

function registerElements() {
  imageContainerElements = document.querySelectorAll('.element');
  containerElement = document.getElementById('container');
}

function addDragEvents() {
  imageContainerElements.forEach((imageContainerElement) => {
    addDragEventsOnElement(imageContainerElement);
  });
}

function handleDragStart() {   
  currentElementDrag = this;
  currentElementDrag.classList.add('element--placeholder');
}

function handleDragEnter() {
  containerElement.insertBefore(currentElementDrag, this);
}

function handleDragEnd() {
  currentElementDrag.classList.remove('element--placeholder');
  resetVariables();
}

function addDragEventsOnElement(element) {
  element.addEventListener('dragstart', handleDragStart, false);
  element.addEventListener('dragenter', handleDragEnter, false);
  element.addEventListener('dragend', handleDragEnd, false);
}

function resetVariables() {
  currentElementDrag = null;
}
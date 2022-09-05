function handleClick(event) {
  console.log('button clicked');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

var el = document.querySelector('.click-button');
el.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

var el2 = document.querySelector('.hover-button');
el2.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

var el3 = document.querySelector('.double-click-button');
el3.addEventListener('dblclick', handleDoubleClick);

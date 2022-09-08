var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  var closestTaskList = event.target.closest('.task-list-item');
  console.log('closest .task-list-item', closestTaskList);
  closestTaskList.remove();

  if (event.target.tagName !== 'BUTTON') {
    // eslint-disable-next-line no-useless-return
    return;
  }
}

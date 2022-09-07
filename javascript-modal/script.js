var isSurveyOff = true;
var $survey = document.querySelector('.survey-wrapper');
var $noButton = document.querySelector('.no-btn');
var $openModalBtn = document.querySelector('.open-modal-btn');
var $overlayEl = document.querySelector('.overlay');

$openModalBtn.addEventListener('click', displaySurvey);
$noButton.addEventListener('click', toggleSurveyOff);

function toggleSurveyOff() {
  $survey.className = 'survey-wrapper' + ' hidden';
  $overlayEl.className = 'overlay';
  isSurveyOff = true;
}

function displaySurvey() {
  if (isSurveyOff) {
    $survey.className = 'survey-wrapper';
    $overlayEl.className = 'overlay' + ' apply-overlay';
    isSurveyOff = false;
  }
}

// when open modal is clicked the survey's hidden class name gets taken out
// the survey will then be visible
// when the user clicks on no button on survey, the survey's hidden class get added back

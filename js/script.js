//Start page:
const startPage = document.querySelector(".start-page");
//End page you:
const endPage = document.querySelector(".end-page");
//Survey Question Card:
const surveyCard = document.querySelector(".survey-card");
//Place to show survey question to user:
const displaySurveyQuestion = document.getElementById("survey-question");
//Next button:
const nextButton = document.getElementById("next-button");

const surveyQuestions =[
  {
  question: "Please rate the cleanliness of the store.",
  title: "Cleanliness",
  key: 1
  },
  {
  question: "Please rate the friendliness of the reception staff.",
  title: "Friendliness",
  key: 2
  },
  {
  question: "How satisfied were you with the wait time?",
  title: "Wait Time",
  key: 3
  },
  {
  question: "How satisfied were you with the service you received?",
  title: "Service",
  key: 4
  },
  {
  question: "How likely are you to recommend our services to a friend?",
  title: "Recommendation",
  key: 5
  }
]

let currentQuestion = 0;

// This starts the survey with the initial click of "Start" button:
function display(event) {
  // Keeps the page from reloading:
  event.preventDefault();
  //hide start page
  startPage.style.display = "none";
  //display survey page
  surveyCard.style.display = "block";
  
  displayQuestion();
  //getScore();
}

  // Display the current question on the page:
function displayQuestion() {
  displaySurveyQuestion.textContent= surveyQuestions[currentQuestion].question;
  console.log(currentQuestion)
}
  //Go to next question:
function nextQuestion(){
  if(currentQuestion < surveyQuestions.length -1){
    // console.log(currentQuestion)
    currentQuestion++;
    displayQuestion();
  } else {
    surveyCard.style.display = "none";
    endPage.style.display = "block";
  }
}

//Event listener for next button:
nextButton.addEventListener("click", nextQuestion);






// Notes:
// card 0: 
// message thanking them for taking the survey
// start button to begin survey

// card 1-5:
// display question
// display form of rating
// display next button
//capture score and key to track answers

// card 6:
// display message to send additinal information
// text Box
// submit button

// card 7:
// display thank you message stating your survey has been sent
// button to return to homepage
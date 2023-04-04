//Start page:
const startPage = document.querySelector(".start-page");
//End page:
const endPage = document.querySelector(".end-page");
//Survey Question Card:
const surveyCard = document.querySelector(".survey-card");
//Place to show survey question to user:
const displaySurveyQuestion = document.getElementById("survey-question");
//Next button:
const nextButton = document.getElementById("next-button");
//Array of questions to users:
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
let scores = [];

// This starts the survey with the initial click of "Start" button:
function display(event) {
  // Keeps the page from reloading:
  event.preventDefault();
  //hide start page
  startPage.style.display = "none";
  //display survey page
  surveyCard.style.display = "block";
  //Display question at index 0
  displayQuestion();
}

  // Display the current question on the page:
function displayQuestion() {
  displaySurveyQuestion.textContent= surveyQuestions[currentQuestion].question;
  //here it connects to buttons and removes the selected class on buttons that come into the
  //question as "selected"
  let buttons = document.querySelectorAll("#fieldset input[type=button]");
  buttons.forEach(button => {
    button.classList.remove("selected");
  })
}


  //This loop goes to next question when the event listener fires:
function nextQuestion(){
  if(currentQuestion < surveyQuestions.length -1){
    let selectedOption = getSelectedOption();
    //prevents user from proceeding if no score was given:
    if(selectedOption !== ""){
      scores[currentQuestion] = selectedOption;
      currentQuestion++;

    //Send to next question:
      displayQuestion();
    }
    // else statement captures the score of the last question,
    // the score from the last question was not added to the array 
    // because the nextQuestion() function is not called again when it hits the length cap
  } else {
    let selectedOption = getSelectedOption();
    if(selectedOption !== ""){
      scores[currentQuestion] = selectedOption;
      surveyCard.style.display = "none";
      endPage.style.display = "block";
      
      //This displays the selected scores in the console
      console.log(scores);
    }  
  }
}

//Function to get the score from each question:
function getSelectedOption() {
    let selectedOption = "";
      //This is a loop through all buttons in the #fieldset element to find and store the selected score:
      let buttons = document.querySelectorAll("#fieldset input[type=button]");
     
      for(var i = 0; i < buttons.length; i++){
          if(buttons[i].classList.contains("selected")) {
              selectedOption = buttons[i].value;
              break;
          }
      } 
      //by returning the selectedOption, we can call this function to get the score from 
      //each question
      return selectedOption;
} 

  // Event listener to add class of "selected" to the button the user clicks:
document.querySelectorAll("#fieldset input[type=button]").forEach(button => {
  button.addEventListener("click", function() {
    document.querySelectorAll("#fieldset input[type=button]").forEach(button => {
     //Only the clicked button will have the "selected" class.
      button.classList.remove("selected");
    });
      button.classList.add("selected");
  });
});


//Event listener on next button for questions:
nextButton.addEventListener("click", nextQuestion);



// Notes:
// card 1: 
// message thanking them for taking the survey
// start button to begin survey

// card 2-6:
// display question
// display form of rating
// display next button
//capture score and to track answers

// card 7:
// display thank you message stating your survey has been sent
// link to return to homepage
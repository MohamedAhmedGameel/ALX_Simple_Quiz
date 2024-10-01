// Define the checkAnswer function
function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  // Get the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedbackElement = document.getElementById("feedback");

  // Check if user has selected an answer
  if (userAnswer) {
    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    // If no answer was selected
    feedbackElement.textContent = "Please select an answer.";
  }
}

// Attach the event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

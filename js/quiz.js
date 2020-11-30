// Create a 2-dimensional array with 5 questions and 5 answers
var questionsAnswers = [
    ["How many ways are there to commit a foul in a game of quidditch?", "700"],
    ["What is the first name of Harry Potter's youngest son?", "albus"],
    ["What year of Hogwarts does Harry first see the thestrals (Number)?", "5"],
    ["What is Dumbledore's full middle name?", "percival wulfric brian"],
    ["What is Dobby's favorite item of clothing?", "socks"],
  
    ["How many points is catching the snitch worth in quidditch?", "150"],
    ["What is the core material in Harry's wand", "phoenix feather"],
    ["What did Ginny Weasley name her Pygmy Puff", "arnold"],
    ["What is the name of Neville's toad?", "trevor"],
    ["What is the name of the famous Hogsmade sweets shop", "honeydukes"]
  ]
  
  var correctQuestions = []
  var incorrectQuestions = []
  
  // This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
  function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
  }
  
  // This code snippet builds out the HTML list. 
  function buildList(arr) {
    var listHTML = "<ol>";
      for(var i=0;i<arr.length;i++) {
        listHTML += "<li>" + arr[i] + "</li>";
      }
    listHTML += "</ol>";
    return listHTML;
  }
  
  // Create a FOR loop that loops through your 2-dimantional array. Create variables for quesions, answers and reponses respectively. Make sure the
  // questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
  // correct and how many answers you have wrong. 
  //
  // EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
  // to accomplish this is very beneficial. Do your best!
  for(var i = 0; i < questionsAnswers.length; i++) {
    // Display question and recieve answer
    var answer = window.prompt(questionsAnswers[i][0], "")
    
    // Ensure all characters in the answer are lower case
    answer = answer.toLowerCase()
  
    // Check if answer is correct and append question to relative arr
    if (answer === questionsAnswers[i][1]) {
      correctQuestions.push(questionsAnswers[i][0])
    } else {
      incorrectQuestions.push(questionsAnswers[i][0])
    }
   }
  
  // For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.
  numQuestions = "<p>You got " + correctQuestions.length + " question(s) right.</p>"
  correctHeading = "<strong>You got these questions correct: </strong>"
  correctList = buildList(correctQuestions)
  incorrectHeading = "<strong>You got these questions incorrect:</strong>"
  incorrectList = buildList(incorrectQuestions)
  
  print(numQuestions + correctHeading + correctList + incorrectHeading + incorrectList)
  
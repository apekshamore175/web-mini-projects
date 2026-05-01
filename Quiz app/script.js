/******************************** code by me after understanding it *********************** */



const questions =  [
  { q: "Which language runs in a web browser?", 
    a: ["Java", "C", "Python", "JavaScript"], 
    c: "JavaScript" 
  },
  { q: "What does CSS stand for?", 
    a: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style System", "Creative Style Syntax"], 
    c: "Cascading Style Sheets"
  },
  { q: "What does HTML stand for?", 
    a: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"], 
    c: "Hyper Text Markup Language"
  },
  { q: "Which tag is used to create a hyperlink in HTML?", 
    a: ["<link>", "<a>", "<href>", "<h1>"], 
    c: "<a>"
  },
  { q: "Inside which HTML element do we put JavaScript code?", 
    a: ["<js>", "<javascript>", "<script>", "<code>"], 
    c: "<script>"
  },
  { q: "Which property is used in CSS to change text color?", 
    a: ["font-style", "color", "text-color", "background-color"], 
    c: "color"
  },
  { q: "Which company developed JavaScript?", 
    a: ["Google", "Netscape", "Microsoft", "Oracle"], 
    c: "Netscape"
  },
  { q: "Which symbol is used for comments in JavaScript?", 
    a: ["//", "#", "<!-- -->", "/* */"], 
    c: "//"
  },
  { q: "Which of the following is NOT a programming language?", 
    a: ["Python", "HTML", "C++", "Java"], 
    c: "HTML"
  },
  { q: "Which HTML attribute is used to provide an image source?", 
    a: ["src", "alt", "href", "link"], 
    c: "src"
  }
];

let index = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerBox = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");

function startQuiz(){
  index = 0;
  score = 0;
  resultBox.classList.add("hide");
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const current = questions[index];
  questionElement.innerText = current.q;

  current.a.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("btn");
    btn.onclick = () => selectAnswer(option, current.c);
    answerBox.appendChild(btn);
});
}

function resetState(){
  nextButton.classList.add("hide");
  while(answerBox.firstChild){
    answerBox.removeChild(answerBox.firstChild);
  }
}

function selectAnswer(selected, correct){

  const buttons = answerBox.querySelectorAll(".btn");

  buttons.forEach(btn => {

    if(btn.innerText === correct){
      btn.classList.add("correct");
    }

    if(btn.innerText === selected && selected !== correct){
      btn.classList.add("wrong");
    }

    btn.disabled = true;
  });

  if ( selected === correct){
    score++;
  }

  nextButton.classList.remove("hide");
}
/*
👉 Explanation in simple words:

First, we loop over all answer buttons.
If a button matches the correct answer, it turns green.
If the button is the wrong selected one, it turns red.
All buttons become disabled.
If selected answer is correct → score goes up.
Next button becomes visible.*/

function handleNext(){
  index++;

  if(index < questions.length){
    showQuestion();
  } else{
    showResult();
  }
}

/**
 * Explanation:

index++ → go to the next question.

If there are still questions left → show next.

If not → quiz ends, show result.
 */
function showResult(){
  resetState();
  questionElement.innerText = "Quiz Completed";
  resultBox.classList.remove("hide");
  resultBox.innerText = `You Scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Play Again";
  nextButton.classList.remove("hide");
}

/**
 * Explanation:

Clear the old buttons.

Show “Quiz Completed!” in the question area.

Show the score inside result box.

Change Next button text to “Play Again”.
 */
nextButton.addEventListener("click", () => {
  if( index < questions.length){
    handleNext();
  } else{
    startQuiz();
  }
});

/**
 * If there are still questions → go to next.

If no more → restart the quiz.
 */
showQuestion();

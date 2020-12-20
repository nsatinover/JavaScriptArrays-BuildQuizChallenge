// 1. Create a multidimensional array to hold quiz questions and answers
const quizKey = [
  ['Is JS client or server side?', 'client'],
  ['Is Java client or server side?', 'server'],
  ['Is JS type strict?', 'no'],
  ['Do I work for Endevor?', 'yes']
];

let answers = [];
let rightAnswers = [];
let wrongAnswers = [];


// 2. Store the number of questions answered correctly
let numCorrect = 0;


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for(let i = 0; i < quizKey.length; i++){
  let question = quizKey[i][0];
  let answer = quizKey[i][1];
  let response = prompt(question);
  
  if(response === answer){
    rightAnswers.push(question);
    numCorrect++;
  }
  else {
    wrongAnswers.push(question);
  }
}

// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = 
`
<h2>You got ${numCorrect} questions correct.</h2>
`

// 5. Display the correct questions
getOrderedAnswers('right', rightAnswers);

// 6. Display the incorrect questions
getOrderedAnswers('wrong', wrongAnswers);

function getOrderedAnswers(rightOrWrong, arr) {
  document.querySelector('main').innerHTML +=
    `
</br>
<h3>You got these questions ${rightOrWrong}:</h3>
<ol>
${getAnswers(arr)}
</ol>
`;
}

function getAnswers(arr) {
  let listItems = '';

  arr.forEach(element => {
    listItems += `<li>${element}</li>`
  });

  return listItems;
}



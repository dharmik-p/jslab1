const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

const question = questionText =>
  new Promise(resolve => {
    rl.question(questionText, answer => resolve(answer));
  });

const validOptions = ['rock', 'paper', 'scissors'];

const game = async () => {
  
  let choice = null;

  
  while (!validOptions.includes(choice)) {
    choice = await question(
      `Please select one

 Rock
 Paper
 Scissors
 `
    );

    
    choice = choice.toLowerCase();
  }

  const computerChoice = validOptions[getRandomInt(2)];

  if (choice === computerChoice) {
    console.log('tie');
  } 
  else if (
    (choice === 'rock' && computerChoice === 'scissors') || 
    (choice === 'scissors' && computerChoice === 'paper') || 
    (choice === 'paper' && computerChoice === 'rock') 
  ) {
    console.log(`you won`);
  } 
  else {
    console.log('you lose');
  }
  console.log(`Player chose ${choice} Computer Chose ${computerChoice}`);
};

game();

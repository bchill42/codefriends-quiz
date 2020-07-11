'use strict';


(async () => {

    const { prompt } = require('enquirer');
    
    const response = await prompt({
    type: 'input',
    name: 'username',
    message: 'What is your username?'
    });

    console.log(response); // { username: 'jonschlinkert' }
    
    const { Select } = require('enquirer');
    const colors = require('ansi-colors');

    const character = new Select({
    name: 'color',
    message: 'Pick a charater',
    multiple: false,
    choices: ['fafddasf', 'troll', 'watermelon', 'cherry', 'orange'],
    choiceMessage(choice, i) {
        return choice.enabled ? colors.bold.green(choice.message) : choice.message;
    }
});

character.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);

// console.log("You have been awarded 60 charater points to apply to your climber however you wish. Your them wizely!");
// console.log("Current stats: Dyno - 0, Finger Strength - 0, Power - 0, Endurance - 0")
// const add_points = new Select({
//     name: 'color',
//     message: `Choose an attribute you'd like to add points to:`,
//     multiple: false,
//     choices: ['Dyno', 'Finger Strength', 'Power', 'Endurance'],
//     choiceMessage(choice, i) {
//       return choice.enabled ? colors.bold.green(choice.message) : choice.message;
//     }
//   });

//   add_points.run()
//   .then(answer => console.log('Answer:', answer))
//   .catch(console.error);

})();

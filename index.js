var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.underline.bold.yellow('Let\'s Play a Game!!!\n'));

var username = readlineSync.question(chalk.blue('What\'s your Name: \n'));

console.log('\n');
console.log(chalk.bold.bgYellowBright(username + ' Let\'s See Whether you are born in a Leap Year'));

var split1 = ask();

function ask() {
  var dateOfBirth = readlineSync.question(chalk.green('\nPlease Enter your Date of Birth in YYYY/MM/DD format: '));
  var split = dateOfBirth.split('/');
  split1 = split[0];
  return split1;
}

game(split1);

function game(split1) {
  if (isNaN(parseInt(split1))) {
    console.log(chalk.redBright('\nPlease Enter a Valid Date Of Birth / Number'));
    var split1 = ask();
    game(split1);
  } else {
    if (split1 >= 1000 && split1 <= 9999) {
      if (split1 % 400 === 0 || split1 % 4 === 0) {
        console.log(chalk.cyanBright('\nCongratulations,' + username + ' you were born in a Leap Year!!'));
        console.log(chalk.rgb(51, 51, 255)('\nThank You ' + username + ' for Playing this Game. Please Share a Screenshot on Twitter or LinkedIn'));
      } else if (split1 % 100 === 0) {
        console.log(chalk.rgb(255, 0, 102)('\nSorry,' + username + ' you were not born in a Leap Year!!'));
        console.log(chalk.rgb(51, 51, 255)('\nThank You ' + username + ' for Playing this Game.'));
      }
      else {
        console.log(chalk.rgb(255, 0, 102)('\nSorry,' + username + ' you were not born in a Leap Year!!'));
        console.log(chalk.rgb(51, 51, 255)('\nThank You ' + username + ' for Playing this Game.'));
      }
    } else {
      console.log(chalk.redBright('\nPlease Enter Date Of Birth in Valid Format'));
      var split1 = ask();
      game(split1);
    }
  }
}
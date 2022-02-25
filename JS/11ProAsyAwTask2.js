//User can enter a number.
//System pick a random number from 1 - 6
//If user number is equal to random number, give user 2 points
//If user number is different from random number by 1, give the user 1 point, other wise give user 0 point
//User can decide to continue playing or end the game

const guessNumber = () => {
	return new Promise((resolve, reject) => {
		const userNumber = Number(window.prompt("Enter a number between 1 and 6"));
		const systemNumber = Math.floor(Math.random() * 6 + 1);

		if (isNaN(userNumber)) {
			reject(new Error("Wrong input type"));
		}

		if (userNumber === systemNumber) {
			resolve({
				points: 2,
				systemNumber,
			});
		} else if (
			userNumber === systemNumber + 1 ||
			userNumber === systemNumber - 1
		) {
			resolve({
				points: 1,
				systemNumber,
			});
		} else {
			resolve({
				points: 0,
				systemNumber,
			});
		}
	});
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
}

// const handleGuess = () => {
//   guessNumber()
//     .then((result) => {
//       alert(`System number is ${result.systemNumber}, so you scored ${result.points} points`);

//       continueGame().then((result) => {
//         if (result) {
//           handleGuess()
//         } else {
//           alert("Game ends")
//         }
//       })
//     })
//     .catch((error) => alert(error)); 
// }

//Refactoring handleGuess
const handleGuess = async () => {
  try {
    const result = await guessNumber()
    alert(
      `System number is ${result.systemNumber}, so you scored ${result.points} points`
    );
  
    const isContinuing = await continueGame()
  
    if (isContinuing) {
      handleGuess()
    } else {
      alert("Game Ends")
    }
  } catch (error) {
    alert(error)
  }
}

const startGame = () => {
  handleGuess()
}
startGame()
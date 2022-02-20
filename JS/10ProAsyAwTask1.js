// Kayo made a promise to delver cakes to Eny's birthday party which is in two weeks.
//If Kayo falls sick, no cake is delivered
//If Kayo is healthy, cake is delivered
//Regardless, Eny's birthday party would hold.

const onEnyBirthday = (isKayoSick) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!isKayoSick) {
				return resolve(1); // 1 cake delivered. We can change this number
			} else {
				reject(new Error("I am unhappy"));
			}
		}, 2000);
	});
};

console.time("Timer");

onEnyBirthday(true)
	.then((output) => {
		console.timeLog("Timer");
		console.log(`I have ${output} cakes`);
	})
	.catch((error) => {
		console.timeLog("Timer");
		console.log(error);
	})
	.finally(() => {
		console.log("Still had my birthday party");
	});

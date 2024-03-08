// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
	"mashedPotatoes",
	0,
	(step1) => {
		document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
		getInstruction(
			"mashedPotatoes",
			1,
			(step2) => {
				document.querySelector("#mashedPotatoes").innerHTML +=
					`<li>${step2}</li>`;
				getInstruction(
					"mashedPotatoes",
					2,
					(step3) => {
						document.querySelector("#mashedPotatoes").innerHTML +=
							`<li>${step3}</li>`;
						getInstruction(
							"mashedPotatoes",
							3,
							(step4) => {
								document.querySelector("#mashedPotatoes").innerHTML +=
									`<li>${step4}</li>`;
								getInstruction(
									"mashedPotatoes",
									4,
									(step5) => {
										document.querySelector("#mashedPotatoes").innerHTML +=
											`<li>${step5}</li>`;
										document
											.querySelector("#mashedPotatoesImg")
											.removeAttribute("hidden");
										document.querySelector("#mashedPotatoes").innerHTML +=
											"<li>Mashed potatoes are ready!</li>";
									},
									(error) => console.log(error),
								);
							},
							(error) => console.log(error),
						);
					},
					(error) => console.log(error),
				);
			},
			(error) => console.log(error),
		);
	},
	(error) => console.log(error),
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
	.then((step0) => {
		document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
		return step0;
	})
	.then(() => obtainInstruction("steak", 1))
	.then((step1) => {
		document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
		return step1;
	})
	.then(() => obtainInstruction("steak", 2))
	.then((step2) => {
		document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
		return step2;
	})
	.then(() => obtainInstruction("steak", 3))
	.then((step3) => {
		document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
		return step3;
	})
	.then(() => obtainInstruction("steak", 4))
	.then((step4) => {
		document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
		return step4;
	})
	.then(() => obtainInstruction("steak", 5))
	.then((step5) => {
		document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
		return step5;
	})
	.then(() => obtainInstruction("steak", 6))
	.then((step6) => {
		document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
		return step6;
	})
	.then(() => obtainInstruction("steak", 7))
	.then((step7) => {
		document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
		return step7;
	})
	.then(() => {
		document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
		return true;
	})
	.then(() => {
		document.querySelector("#steakImg").removeAttribute("hidden");
	})
	.catch((error) => {
		console.log("there was an error with promises", error);
	});

// Iteration 3 using async/await
async function makeBroccoli() {
	const step0 = await obtainInstruction("broccoli", 0);
	const step1 = await obtainInstruction("broccoli", 1);
	const step2 = await obtainInstruction("broccoli", 2);
	const step3 = await obtainInstruction("broccoli", 3);
	const step4 = await obtainInstruction("broccoli", 4);
	const step5 = await obtainInstruction("broccoli", 5);
	const step6 = await obtainInstruction("broccoli", 6);

	console.log("broc", step0);
	document.querySelector("#broccoli").innerHTML += `
  <li>${step0}</li>
  <li>${step1}</li>
  <li>${step2}</li>
  <li>${step3}</li>
  <li>${step4}</li>
  <li>${step5}</li>
  <li>${step6}</li>
  <li>Broccoli is ready</li>
  `;
	document.querySelector("#broccoliImg").removeAttribute("hidden");
	return true;
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
Promise.all([
	obtainInstruction("brusselsSprouts", 0),
	obtainInstruction("brusselsSprouts", 1),
	obtainInstruction("brusselsSprouts", 2),
	obtainInstruction("brusselsSprouts", 3),
	obtainInstruction("brusselsSprouts", 4),
	obtainInstruction("brusselsSprouts", 5),
	obtainInstruction("brusselsSprouts", 6),
	obtainInstruction("brusselsSprouts", 7),
])
	.then((allSteps) => {
		console.log(allSteps);
		const innerHtml = allSteps.map((step) => `<li>${step}</li>`);
		document.querySelector("#brusselsSprouts").innerHTML += `
  ${innerHtml.join("")}
  <li>Brussels sprouts is ready</li>
  `;
		document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
	})
	.catch((error) => {
		console.log("there was an error with promise all", error);
	});

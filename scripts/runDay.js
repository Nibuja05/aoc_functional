const path = require("path");
const { exec } = require("child_process");

const dayNumber = process.argv[3] ?? 1;
const year = process.argv[2] ?? 2025;
const scriptPath = path.join(__dirname, `../solutions/${year}/day${dayNumber}/index.js`);

console.log(`Running Year ${year}, Day ${dayNumber}...\n`);
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
	if (error) {
		console.error(error);
		// console.log(`Day ${dayNumber} not solved yet...\n`);
		return;
	}
	console.log(stdout);
	console.error(stderr);
});

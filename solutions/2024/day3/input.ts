import {readFileSync} from 'fs-extra';

export function getTestInput() {
	return `
xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
`.trim();
}

export function getInput() {
	const content = readFileSync(__dirname + "\\input.txt", "utf-8");
    return content.trim();
}

export function getTestInput2() {
	return `
xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
`.trim();
}

export function getInput2() {
	const content = readFileSync(__dirname + "\\input.txt", "utf-8");
    return content.trim();
}

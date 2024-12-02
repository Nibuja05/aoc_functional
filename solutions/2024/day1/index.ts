import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";

getInput()
	.split("\n")
	.map((line) => line.split(/\s+/).map((num) => parseInt(num)))
	.use((input) => [
        input.map(([a]) => a).sort(), 
        input.map(([, b]) => b).sort()
    ])
    .use(([left, right]) => 
        left.map((value, index) => Math.abs(value - right[index]))    
    )
    .reduce((acc, value) => acc + value, 0)
	.log();

getInput2()
    .split("\n")
    .map((line) => line.split(/\s+/).map((num) => parseInt(num)))
    .use((input) => [
        input.map(([a]) => a).sort(), 
        input.map(([, b]) => b).sort()
    ])
    .use(([left, right]) =>
        left.map((value, index) => value * right.filter((value) => value == left[index]).length)
    )
    .reduce((acc, value) => acc + value, 0)
    .log()

import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";

console.time("Part 1")
getTestInput()
    .split(",")
    .log();
console.timeEnd("Part 1");

console.time("Part 2")
getTestInput2()
    .split(",")
    .log();
console.timeEnd("Part 2");

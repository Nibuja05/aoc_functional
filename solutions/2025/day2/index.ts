import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";

console.time("Part 1")
getInput()
    .split(",")
    .map((range) => range.split("-").map(Number))
    .flatMap(([start, end]) => Array.from({ length: Number(end) - Number(start) + 1 }, (_, i) => i + Number(start)))
    .reduce((acc, cur) => acc + (`${cur}`.length % 2 !== 0
        ? 0
        : `${cur}`.slice(0, `${cur}`.length / 2) === `${cur}`.slice(`${cur}`.length / 2)
            ? cur
            : 0
    ), 0)
    .log();
console.timeEnd("Part 1");

console.time("Part 2")
getInput()
    .split(",")
    .map((range) => range.split("-").map(Number))
    .flatMap(([start, end]) => Array.from({ length: Number(end) - Number(start) + 1 }, (_, i) => i + Number(start)))
    .map(num => Array.from({length: `${num}`.length - 1}, (_, i) => i + 1)
        .filter(len => `${num}`.length % len === 0)
        .map(len => Array.from({length: Math.ceil(`${num}`.length / len)}, (_, i) => `${num}`.slice(i * len, i * len + len)))
        .map(parts => parts.every(part => part === parts[0]) ? num : 0)
        .filter(Boolean)
        [0] ?? 0
    )
    .filter(Boolean)
    .reduce((acc, cur) => acc + cur, 0)
    .log();
console.timeEnd("Part 2");

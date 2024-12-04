import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";

console.time("Part 1")
// getInput().use(input=>[...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)].map(match=>parseInt(match[1])*parseInt(match[2]))).reduce((acc,cur)=>acc+cur,0).log();
getInput()
    .use(input => [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)]
        .map(match => parseInt(match[1]) * parseInt(match[2]))
    )
    .reduce((acc, cur) => acc + cur, 0)
    .log()
console.timeEnd("Part 1");

console.time("Part 2")
// getInput2().use(input=>[...input.matchAll(/(?<mul>mul\((\d{1,3}),(\d{1,3})\))|(?<dont>don't\(\))|(?<do>do\(\))/g)].map(match=>match.groups?.do ?true:match.groups?.dont?false:<const>[parseInt(match[2]),parseInt(match[3])])).reduce((acc,cur)=>typeof cur=="boolean"?<[boolean, number]>[cur,acc[1]]:acc[0]?<[boolean, number]>[acc[0],acc[1]+cur[0]*cur[1]]:acc,<[boolean,number]>[true,0])[1].log()
getInput2()
    .use(input => [...input.matchAll(/(?<mul>mul\((\d{1,3}),(\d{1,3})\))|(?<dont>don't\(\))|(?<do>do\(\))/g)]
        .map(match => match.groups?.do
            ? true 
            : match.groups?.dont
                ? false
                : <const>[parseInt(match[2]), parseInt(match[3])]
        )
    )
    .reduce((acc, cur) => typeof cur == "boolean"
        ? <[boolean, number]>[cur, acc[1]]
        : acc[0]
            ? <[boolean, number]>[acc[0], acc[1] + cur[0] * cur[1]]
            : acc
    , <[boolean, number]>[true, 0])
    [1]
    .log()
console.timeEnd("Part 2");
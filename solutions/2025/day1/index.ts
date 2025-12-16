import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";

console.time("Part 1")
getTestInput()
    .split("\n")
    .map(([dir, ...num]) => parseInt(num.join("")) * (dir === "L" ? -1 : 1))
    .reduce((acc, cur) => [...acc, (cur + acc[acc.length - 1] + 100) % 100], [50])
    .reduce((acc, cur) => acc + (cur == 0? 1 : 0), 0)
    .log();
console.timeEnd("Part 1");

console.time("Part 2")
getInput()
    .split("\n")
    .map(([dir, ...num]) => parseInt(num.join("")) * (dir === "L" ? -1 : 1))
    .reduce((acc, cur) => [...acc, (cur + acc[acc.length - 1][1])
        .use(val => Math.trunc(val / 100)
            .use(rest => val >= 0
                ? [
                    rest + (val === 0 ? 1 : 0),
                    val - rest * 100
                ]
                : [
                    Math.abs(rest) + (acc[acc.length - 1][1] === 0 ? 0 : 1), // wechsel über 0
                    val + Math.max(
                        Math.abs(rest) + (val % 100 === 0 ? 0 : 1), 
                        1
                    ) * 100
                ]
            )
        )
    ], <number[][]>[[0, 50]])
    .reduce((acc, cur) => acc + cur[0], 0)
    .log()
console.timeEnd("Part 2");
// getInput().split("\n").map(([dir,...num])=>parseInt(num.join(""))*(dir==="L"?-1:1)).reduce((acc,cur)=>[...acc,(cur+acc[acc.length-1][1]).use(val=>Math.trunc(val/100).use(rest=>val>=0?[rest+(val===0?1:0),val-rest*100]:[Math.abs(rest)+(acc[acc.length-1][1]===0?0:1),val+Math.max(Math.abs(rest)+(val%100===0?0:1),1)*100]))],<number[][]>[[0,50]]).reduce((acc,cur)=>acc+cur[0],0).log();

// console.time("Part 2")
// getInput()
//     .split("\n")
//     .map(([dir, ...num]) => parseInt(num.join("")) * (dir === "L" ? -1 : 1))
//     .reduce((acc, cur) => [...acc, cur + acc[acc.length - 1]], [100050])
//     .log()
//     .reduce((acc, cur, index, arr) => [
//         ...acc, 
//         index === 0 ? 
//             0 : 
//             Math.abs(
//                 parseInt(cur.toString().slice(0, -2))
//                 - parseInt(arr[index - 1].toString().slice(0, -2))
//             ) // difference in hundreds
//             .use(diff => diff === 0 ?
//                 (cur % 100 === 0 ? 1 : 0) : // no hundred change, but ends on hundred
//                 diff - ( // hundreds change, minus one when:
//                     arr[index - 1] % 100 === 0 && // previous ended on hundred
//                     cur < arr[index - 1] && // moving down
//                     cur % 100 !== 0 // not landing on hundred
//                     ? 1 : 0
//                 )
//             )
//     ], <number[]>[])
//     .log()
//     .reduce((acc, cur) => acc + cur, 0)
//     .log()
// console.timeEnd("Part 2");

// not 6389
// not 7...
// not 6606
// not 6639
// not 6521
// 6623!!!
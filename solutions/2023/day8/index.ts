import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";
import { iterator } from "../../lib/util";

// console.log(getInput()
// 	.split("\n")
// 	.use(([ins, _, ...maps]) => <const>[
// 		iterator((index) => ins[index % ins.length])
// 			.map((value) => value == "L"? 0 : 1),
// 		Object.fromEntries(maps.map(line => line.match(/(\w+).*?(\w+).*?(\w+)/)!.use(match =>
// 			[match[1], [match[2], match[3]]]
// 		)))
// 	])
// 	.use(([ins, maps]) =>
// 		ins.reduce((acc, cur) =>
// 			<const>[acc[0] + 1, maps[acc[1]][cur]]
// 			, <const>[0 as number, "AAA" as string], (acc) => acc[1] == "ZZZ"
// 		)
// 	)[0]
// );

// console.log(
// 	iterator([1, 2, 3])
// 		.map((value) => value + 1)
// 		.toString()
// );

console.log(iterator());

// console.log(getInput()
// 	.split("\n")
// 	.use(([ins, _, ...maps]) => <const>[
// 		iterator((index) => ins[index % ins.length])
// 			.map((value) => value == "L"? 0 : 1),
// 		Object.fromEntries(maps.map(line => line.match(/(\w+).*?(\w+).*?(\w+)/)!.use(match =>
// 			[match[1], [match[2], match[3]]]
// 		))).use(maps => <const>[maps,
// 			Object.keys(maps).filter(key => key.slice(-1) == "A")
// 		])
// 	])
// 	.use(([ins, [maps, start]]) =>
// 		ins.reduce((acc, cur) =>
// 			<const>[acc[0] + 1, acc[1]
// 				.map(loc => maps[loc][cur])
// 			],
// 			<const>[0 as number, start],
// 			(acc, _, index) => acc[1]
// 				.every(loc => loc.slice(-1) == "Z")
// 		)
// 	)
// );

import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";
import { iterator } from "../../lib/util";

getInput()
    .split("\n")
    .map(line => line.split(" ")
        .map(item => parseInt(item))
        .map((item, index, arr) => item - arr[index + 1])
        .use(list => list.slice(0, -1))
    )
    .filter(list => (list.toString().split("-").length - 1)
        .use(count => count == 0 || count == list.length)
    )
    .filter(list => !list
        .some(item => item == 0 || Math.abs(item) > 3)
    )
    .length
    .log()


getInput2()
    .split("\n")
    .map(line => line.split(" ")
        .map(item => parseInt(item))
    )
    .use(orig => orig
        .map(line => line
            .map((item, index, arr) => item - arr[index + 1])
            .use(list => list.slice(0, -1))
        )
        .use(rows => rows
            .map((list, index) => (list.toString().split("-").length - 1)
                .use(count => !(!(count == 0 || count == list.length) || list.filter(item => item == 0 || Math.abs(item) > 3).length != 0))
                .use(valid => valid
                    ? true
                    : iterator(orig[index])
                        .map((_, rIndex, arr) => [...arr.slice(0, rIndex), ...arr.slice(rIndex + 1)]
                            .map((item, index, arr) => item - arr[index + 1])
                            .use(list => list.slice(0, -1))
                        )
                        .reduce((_, testList) => (testList.toString().split("-").length - 1)
                            .use(count => !(!(count == 0 || count == testList.length) || testList.filter(testItem => testItem == 0 || Math.abs(testItem) > 3).length != 0))
                        , false, acc => acc)
                )
            )
        )
    )
    .filter(result => result)
    .length
    .log()

// too low!
// problem is that sometimes removing a single number can solve both problems at once!
// getInput2()
//     .split("\n")
//     .map(line => line.split(" ")
//         .map(item => parseInt(item))
//     )
//     .use(orig => orig
//         .map(line => line
//             .map((item, index, arr) => item - arr[index + 1])
//             .use(list => list.slice(0, -1))
//         )
//         .map((list, index) => list
//             .map((item, index) => item == 0 || Math.abs(item) > 3? index : null)
//             .filter(index => index != null)
//             .use(indeces => indeces.length == 0
//                 ? <const>[list, false]
//                 : indeces.length > 1
//                     ? null
//                     : indeces[0] == 0 || indeces[0] == list.length - 1
//                         ?  <const>[list.slice(0, indeces[0]).concat(list.slice(indeces[0] + 1)), true]
//                         : (orig[index][indeces[0] - 1] - orig[index][indeces[0] + 1])
//                             .use(diff => Math.abs(diff) > 3
//                                 ? null
//                                 : <const>[[...list.slice(0, indeces[0]), diff, ...list.slice(indeces[0] + 2)], true]
//                             )
//             )
//         )
//         .filter(list => list != null)
//     )
//     .filter(([list, changed]) => (list.toString().split("-").length - 1)
//         .use(count => changed
//             ? count == 0 || count == list.length
//             : count <= 1 || count >= list.length - 1
//         )
//     )
//     .length
//     .log()
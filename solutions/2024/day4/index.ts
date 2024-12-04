import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";
import { iterator } from "../../lib/util";

getInput()
    .split("\n")
    .map(line => line.split(""))
    .use(tabs => iterator(index => [[1,0],[2,0],[3,0],[0,1],[0,2],[0,3],[1,1],[2,2],[3,3],[1,-1],[2,-2],[3,-3]][index % 12]) // all directions
        .use(dirs => Array.from({length: tabs.length}, (_, i) => 
            Array.from({length: tabs[i].length}, (_, j) => dirs
                .reduce((acc, val, index) => (acc.at(-1) + (tabs[i + val[0]]?.[j + val[1]] ?? "")).use(cur => (index + 1) % 3 == 0
                        ? cur == "XMAS" || cur == "SAMX"
                            ? [...acc.slice(0, -1), cur, tabs[i][j]]
                            :  [...acc.slice(0, -1), tabs[i][j]]
                        : [...acc.slice(0, -1), cur]
                    )
                    ,[tabs[i][j]]
                    ,(_, __, index) => (index + 1) % 12 == 0
                )
            ))
        )
    )
    .map(rows => rows
        .map(list => list
            .filter(item => item == "XMAS" || item == "SAMX")
            .length
        )
        .reduce((acc, val) => acc + val, 0)
    )
    .reduce((acc, val) => acc + val, 0)
    .log();

getInput2()
    .split("\n")
    .map(line => line.split(""))
    .use(tabs => Array.from({length: tabs.length}, (_, i) => 
        Array.from({length: tabs[i].length}, (_, j) => tabs[i][j] != "A"
            ? 0
            : [[-1,1],[1,1],[1,-1],[-1,-1]]
                .map(([x, y]) => tabs[i + x]?.[ j + y] ?? "")
                .use(arr => arr[0] == arr[2]
                    ? 0
                    : arr.filter(c => c == "M").length == 2 && arr.filter(c => c == "S").length == 2
                        ? 1
                        : 0
                )
        ))
    )
    .map(rows => rows
        .reduce((acc, val) => acc + val, <number>0)
    )
    .reduce((acc, val) => acc + val, 0)
    .log();
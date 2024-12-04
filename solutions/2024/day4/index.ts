import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";

console.time("Part 1")
// getInput().split("\n").map(line=>line.split("")).use(tabs=>tabs.map((row,i)=>row.map((item,j)=>item!="X"&&item!="S"?[""]:[[1,0],[2,0],[3,0],[0,1],[0,2],[0,3],[1,1],[2,2],[3,3],[1,-1],[2,-2],[3,-3]].reduce((acc,val,index)=>(acc.at(-1)+(tabs[i+val[0]]?.[j+val[1]]??"")).use(cur=>(index+1)%3==0?cur=="XMAS"||cur=="SAMX"?[...acc.slice(0,-1),cur,item]:[...acc.slice(0,-1),item]:[...acc.slice(0,-1),cur]),[item])))).map(rows=>rows.map(list=>list.filter(item=>item=="XMAS"||item=="SAMX").length).reduce((acc,val)=>acc+val,0)).reduce((acc,val)=>acc+val,0).log();
getInput()
    .split("\n")
    .map(line => line.split(""))
    .use(tabs => tabs
        .map((row, i) => row
            .map((item, j) => item != "X" && item != "S"
                ? [""]
                : [[1,0],[2,0],[3,0],[0,1],[0,2],[0,3],[1,1],[2,2],[3,3],[1,-1],[2,-2],[3,-3]]
                    .reduce((acc, val, index) => (acc.at(-1) + (tabs[i + val[0]]?.[j + val[1]] ?? "")).use(cur => (index + 1) % 3 == 0
                            ? cur == "XMAS" || cur == "SAMX"
                                ? [...acc.slice(0, -1), cur, item]
                                :  [...acc.slice(0, -1), item]
                            : [...acc.slice(0, -1), cur]
                        )
                        ,[item]
                    )
            )
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
console.timeEnd("Part 1");

console.time("Part 2")
// getInput2().split("\n").map(line=>line.split("")).use(tabs=>tabs.map((row,i)=>row.map((item,j)=>item!="A"?0:[[-1,1],[1,1],[1,-1],[-1,-1]].map(([x,y])=>tabs[i+x]?.[j+y]??"").use(arr=>arr[0]==arr[2]?0:arr.filter(c=>c=="M").length==2&&arr.filter(c=>c=="S").length==2?1:0)))).map(rows=>rows.reduce((acc,val)=>acc+val,<number>0)).reduce((acc,val)=>acc+val,0).log();
getInput2()
    .split("\n")
    .map(line => line.split(""))
    .use(tabs => tabs
        .map((row, i) => row
            .map((item, j) => item != "A"
                ? 0
                : [[-1,1],[1,1],[1,-1],[-1,-1]]
                    .map(([x, y]) => tabs[i + x]?.[ j + y] ?? "")
                    .use(arr => arr[0] == arr[2]
                        ? 0
                        : arr.filter(c => c == "M").length == 2 && arr.filter(c => c == "S").length == 2
                            ? 1
                            : 0
                    )
            )
        )
    )
    .map(rows => rows
        .reduce((acc, val) => acc + val, <number>0)
    )
    .reduce((acc, val) => acc + val, 0)
    .log();
console.timeEnd("Part 2");
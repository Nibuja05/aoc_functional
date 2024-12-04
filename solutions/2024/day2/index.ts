import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../../lib/util";
import { iterator } from "../../lib/util";

console.time("Part 1")
// getInput().split("\n").map(line=>line.split(" ").map(item=>parseInt(item)).map((item,index,arr)=>item-arr[index+1]).use(list=>list.slice(0,-1))).filter(list=>(list.toString().split("-").length-1).use(count=>count==0||count==list.length)).filter(list=>!list.some(item=>item==0||Math.abs(item)>3)).length.log();
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
console.timeEnd("Part 1");

console.time("Part 2")
// getInput2().split("\n").map(line=>line.split(" ").map(item=>parseInt(item))).use(orig=>orig.map(line=>line.map((item,index,arr)=>item-arr[index+1]).use(list=>list.slice(0,-1))).use(rows=>rows.map((list,index)=>(list.toString().split("-").length-1).use(count=>!(!(count==0||count==list.length)||list.filter(item=>item==0||Math.abs(item)>3).length!=0)).use(valid=>valid?true:iterator(orig[index]).map((_,rIndex,arr)=>[...arr.slice(0,rIndex),...arr.slice(rIndex+1)].map((item,index,arr)=>item-arr[index+1]).use(list=>list.slice(0,-1))).reduce((_,testList)=>(testList.toString().split("-").length-1).use(count=>!(!(count==0||count==testList.length)||testList.filter(testItem=>testItem==0||Math.abs(testItem)>3).length!=0)),false,acc=>acc))))).filter(result=>result).length.log();
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
console.timeEnd("Part 2");
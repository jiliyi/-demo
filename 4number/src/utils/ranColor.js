import random from './random'
let colorArr = ['#f26395',"#63efab","#ef7658","#ffe868","#80e3f7","d781f9"]
export default function(){
    let i = random(colorArr.length,0)
    return colorArr[i]
}
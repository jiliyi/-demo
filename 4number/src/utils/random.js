//产生一个随机数
export default function(max,min){
    return Math.floor(Math.random() * (max -min) + min);
}
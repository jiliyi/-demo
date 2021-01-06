import NumberCreater from '../utils/number'
import onNumberCreated from './onNumberCreate'
let n = new NumberCreater()
n.onNumberCreated = onNumberCreated
let isStart = false
document.body.addEventListener('click',function(){
    if(isStart){
        isStart = false
        n.stop()
    }else{
        isStart = true
        n.start()
        console.log(1)
    }
})
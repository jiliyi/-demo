import isPrime from './isPrime'
export default class NumberCreater{
    constructor(duraiton=500){
        this.duraiton = duraiton
        this.number = 1
        this.timer  = null
    }
    start(){
        if(this.timer){
            return
        }
        this.timer = setInterval(()=>{
            this.onNumberCreated && this.onNumberCreated(this.number,isPrime(this.number)) 
            this.number++
        },this.duraiton)
    }
    stop(){
        clearInterval(this.timer)
        this.timer = null
    }
}
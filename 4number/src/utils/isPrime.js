//判断一个数是不是素数

export default function isPrime(n){
    if(n < 2){
        return false
    }
    for(let i = 2 ; i <= n - 1;i++){
        if(n%i === 0){
            return true
        }
    }
    return false
}
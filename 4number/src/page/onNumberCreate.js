import ranColor from '../utils/ranColor'
import random from '../utils/random'

let container = document.querySelector('.container')
let center = document.getElementsByClassName('divcenter')[0]
export default function onNumberCreated(n,isPrime){
    let span = document.createElement('span');
    span.innerText = n;
  
    if(isPrime){
        let color = ranColor()
        span.style.color = color
        createCenterNumber(n,color)
    }
    container.appendChild(span)
    center.innerText = n
}

function createCenterNumber(n,color){
    let div = document.createElement('div')
    div.innerText = n;
    div.className = 'center'
    div.style.color = color
    document.body.appendChild(div)
    getComputedStyle(div).left;
    div.style.transform = `translateX(${random(200,-200)}px) translateY(${random(200,-200)}px)`
    div.style.opacity = 0;
}
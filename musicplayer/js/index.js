//处理歌词字符串
function getLrcObj(lrc){
    let lrcArr =  lrc.split('\n')
   return  lrcArr.map((item,index)=>{
    let oneLrc =  item.split(']')
    let timeStr =  oneLrc[0].slice(1)
    let minte =  timeStr.split(':')[0]
    minte = +minte[0]*10*60+ +minte[1] * 60
    let second = +timeStr.split(':')[1] 
    time = minte + second
    let lrcItem = oneLrc[1]
    return {
        lrcItem,
        time
    }
    })
}
let container = document.getElementsByClassName('container')[0];
function addLrc(lrcObj){
   
    for(let i = 0 ; i < lrcObj.length;i++){
        let li = document.createElement('li');
        li.innerHTML = lrcObj[i].lrcItem;
        container.appendChild(li)
    }
}

let audio = document.getElementsByTagName('audio')[0]


let timer = null;
function init(){
    let lrcObj =  getLrcObj(lrcStr)
    addLrc(lrcObj)

    audio.onplay = function(){
        audio.ontimeupdate = function(e){
            let target = e.target;
            if(timer){
                return;
            }
            timer =  setInterval(function(){
                changeCurrent(lrcObj,target)
            },500)
        }
    }
    audio.onpause = function(){
        
        audio.ontimeupdate = null;
        clearInterval(timer);
        timer = null;
    }
}

function changeCurrent(lrcObj,target){
    for(let i = lrcObj.length-1 ; i >=0;i--){
        let item = lrcObj[i];
        let next = lrcObj[i+1] 
        next = next ? next :  { time : target.duration + 1};
        if(target.currentTime >= item.time && target.currentTime < next.time){
            let prev = container.children[i].previousElementSibling;
            if( prev){
                prev.classList.remove('active')
            }
            container.children[i].classList.add('active')
            let liHeight = container.children[0].getBoundingClientRect().height;
            let wrapperHeight = document.getElementsByClassName('wrapper')[0].getBoundingClientRect().height
            let lastTop = liHeight * (i + 1) - wrapperHeight / 2;
            if(i == lrcObj.length - 1){
             lastTop = 0   
            }
            if(lastTop>= 0){
                container.style.top = -lastTop + 'px'
            }

        }
    }
}


init()
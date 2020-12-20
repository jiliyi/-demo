//利用二维数组映射棋盘
let chessboardArr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

//交替落子的一个变量
let number = 1;

let isGameOver = false;

//渲染页面，每次落子之后重新渲染
function render(){
    let container = document.getElementsByClassName('gameContainer')[0];
    container.innerHTML = '';//每次render之前将container内容置为空；
    for(let i = 0 ; i < chessboardArr.length;i++){
        for(let j = 0 ; j < chessboardArr[i].length;j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerText = 
                chessboardArr[i][j] == 1 ? '×' :
                chessboardArr[i][j] == 2 ? '○' :
                '';//根据棋盘数字来决定是哪一种类型的棋子；

                //点击棋格，落子
            cell.addEventListener('click',function(){
                move(j,i)
            })
            container.appendChild(cell)
        }
    }
}

//实现落子的逻辑
function move(x,y){
    //每次移动之前检查是否结束游戏
    if(isGameOver){
        return;
    }

    //检查该处是否可以落子
    if(chessboardArr[y][x] !== 0){
        return;//如果该处已经有棋子，就不能下了。
    }
    chessboardArr[y][x] = number;
    if(check(number,x,y)){
        console.log(number + 'is win')
        isGameOver = true;//如果分出胜负，则结束游戏
    }
    number = 3 - chessboardArr[y][x];//让number这个数值在2和1之间轮循。
    render()//重新渲染页面
    if(isGameOver){
        alert(`${number == 1 ? '×': '○'}   win!!!`)
    }
}

//实现检查胜负的逻辑
function check(number,x,y){
//每次只有下完的那个才有可能获胜

    //横向,快级作用域，防止变量名冲突
    {
        let isWin = true;
        for(let i = 0 ; i < 3;i++){
            if(chessboardArr[y][i] !== number){
                isWin = false;
            }
        }
         if(isWin){
             return isWin;//如果横向检测成功，就结束判断
         }
    }

    //纵向
    {
        let isWin = true;
        for(let i = 0 ; i < 3;i++){
            if(chessboardArr[i][x] !== number){
                isWin = false
            }
        }
        if(isWin){
            return isWin
        }
    }

    //左斜 
    {
        let isWin = true;
        for(let i = 0 ; i < 3;i++){
            if( chessboardArr[2-i][i] !== number){
               isWin = false;
            }
        }
        if(isWin){
            return true;
        }
    }

    //右斜
    {
        let isWin = true;
        for(let i = 0 ; i < 3;i++){
            if(chessboardArr[i][i] !== number){
                isWin = false
            }
        }
        return isWin;
    }
}

render()
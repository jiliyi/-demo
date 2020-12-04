<template>
  <div class="date-picker">
      <div class="date-input" @click="show = !show">
          <span class="bg"></span>
          <span class="text">
              {{this.year}}-{{this.realMonth}}-{{this.day}}
          </span>
      </div>
      <div class="date-panel" v-show="show">
          <div class="date-header">
              <div class="left">
                  <span @click="changeYear('-')"> &laquo;</span>
                  <span @click="changeMonth('-')">&lt;</span>
              </div>
              <div class="center">
                {{this.year}}年{{this.realMonth}}月{{this.day}}日
              </div>
              <div class="right">
                  <span @click="changeMonth('+')"> &gt;</span>
                  <span @click="changeYear('+')">&raquo;</span>
              </div>
          </div>
          <div class="week">
          <span v-for="week in weeks" :key="week ">
              {{week}}
          </span>
      </div>
        <div class="date-wrapper">
            <div :class="{
                'date-item':true,
                other : true
            }" 
            v-for="prev in prevDaysArr" :key="prev*5">
                {{ prev }}
            </div>
            <div :class="{'date-item':true,active:now === day}" 
            v-for="now in daysArr" :key="now * 100">
                {{ now }}
            </div>
            <div :class="{
                'date-item':true,
                other : true
            }" 
            v-for="next in nextDaysArr" :key=" next * 7 ">
                {{ next }}
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            day:null,
            month:null,
            year:null,
            show : false,
            weeks : ['日','一','二','三','四','五','六'],
        }
    },
    methods:{
        changeMonth(tag){
            if(tag === '+'){
                this.month+=1;
                if(this.month>11){
                    this.month = 0;
                    this.year+=1;
                }
            }else if(tag === '-'){
                this.month-=1;
                if(this.month < 0){
                    this.month = 11;
                    this.year-=1
                }
            }
        },
        changeYear(tag){
            if(tag === '+'){
                this.year+=1
            }else if(tag === '-'){
                this.year-=1
            }
        }
    },
    computed:{
        realMonth(){
           return  this.month + 1
        },
        //获取当前月份有多少天
        allDays(){
            return new Date(this.year,this.realMonth,0).getDate()
        },
        //渲染日期的数组
        daysArr(){
            const arr = [];
            for(let i = 1 ; i <= this.allDays;i++){
                arr.push(i)
            }
            return arr
        },
        //得到当前月的1号是星期几
        getFirstDay(){
            return new Date(this.year,this.month,1).getDay()
        },
        //上一个月份有多少天在本页面渲染
        prevDaysArr(){
            let prevDaysLen = this.getFirstDay;//上个月在当前页面显示多少天
            let year = this.year;
            let month = this.realMonth - 1
            if(this.realMonth  === 1){
                year = this.year - 1;
                month = 12
            }
            let prevAllDays = new Date(year,month,0).getDate();
            let arr = [];
            for(let i =  prevAllDays - prevDaysLen+1;i <= prevAllDays;i++){
                arr.push(i)
            }
            return arr
        },
        //下一个月份有多少天在本页面渲染
        nextDaysArr(){
           let len =  42 - this.prevDaysArr.length - this.daysArr.length;
           let arr = [];
           for(let i = 1 ; i <= len;i++){
               arr.push(i)
           }
            return arr;
        }
    },
    created(){
        this.year = new Date().getFullYear()
        this.month = new Date().getMonth()
        this.day = new Date().getDate()
    }
}
</script>

<style>
    .date-input{
        width:300px;
        height:50px;
        border: 1px solid #ddd;
        border-radius: 10px;
       display: flex;
       align-items: center;
    }
    .bg{
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(./bg.jpg) no-repeat;
        margin-left: 10px;
    }
    .text{
        display: inline-block;
        height: 18px;
       font-size: 12px;
       margin-left: 5px;
       vertical-align: top;
       color: #666;
    }
    .date-panel{
        width: 350px;
        height: 400px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
    .date-header{
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }
    .center{
        font-size: 13px;
        color: #444;
    }
    .left span,.right span{
        cursor: pointer;
        color: #444;
        font-size: 13px;
        margin: 0 5px;
    }
    .week{
        width: 100%;
    }
    .week span{
        display: inline-block;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 12px;
    }
    .date-wrapper{
        width: 100%;

    }
    .date-wrapper::before{
        display: block;
        content: '';
        clear: both;
    }
    .date-item{
        float: left;
        width: 50px;
        height: 50px;
         text-align: center;
        line-height: 50px;
        font-size: 12px;
    }
    .date-item.other{
        color: #aaa;
    }
    .date-item.active{
        color: #fff;
        border-radius: 50%;
        background: #0ef;
    }
</style>
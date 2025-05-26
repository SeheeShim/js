        let heading = document.querySelector('#heading');
        document.querySelector('#heading').onclick=function(){
            heading.style.color='red'
        }
        /* let heading = document.querySelector('#heading');
        document.querySelector('#heading').onclick=function(){
            document.querySelector('#heading').style.color='red'
        } */
/* alert("안녕하세요") */
// confirm("오늘 수업 쭉 자바스크립트") ctrl+/
// prompt("네","아니오")
// var
// let name=prompt("당신의 이름을 입력하세요");
// console.log(name)
// const

let width;
let height;

width=200;
height=50;

let area=width*height;
console.log(area)

const PI=3.14;
let radius=prompt("반지름값을 입력해주세요")

let area1=PI*radius*radius;
console.log(area1)
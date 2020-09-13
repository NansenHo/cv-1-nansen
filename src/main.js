let html = document.querySelector("#html"); //首先我们来获取 index.html 里的 demo 。
let style = document.querySelector('#style');
let string = `/* 你好，我叫何南松
 * 接下来我演示一下我的前端功底
 * 现在我要对这个名字进行居中并加大字体加粗
 * 首先我准备一个 div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
body{
    color: red;
}
/* 接下来，我要把 div 变成一个八卦图，
 * 注意看好了
 * 首先，把 div 变成一个圆圈
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border: none;
} 
/* 八卦是由阴阳一黑一白组成的*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);  
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);  
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(28,28,28,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*注意，伪元素里面是不能再有伪元素的。*/

`;
// string = string.replace(/\n/g, "<br>"); //在后面直接 1 对 4 了之后，就不需要了。
let string2 = ""; //为了完成 1 对 4 ，要再声明一个字符串。
let n = -1; //要找一个东西来记住当前是第几行。
// demo.innerHTML = string.substring(0, n); //在 demo 里面写一个 1 ,通过 innerHTML 可以来添加。

// setTimeout(()=>{
//     n = n + 1
//     demo.innerHTML = n; //3000毫秒之后，等于 2 。但 setTimeout 只会执行一次。所以我们换 setInterval
// }, 3000) //3秒 等于 3000毫秒 。

// setInterval(()=>{ //setInterval 是每 3 秒钟都会执行一次。
//     n = n + 1;
//     demo.innerHTML = n;
// },1000)
//但老手一般也不用 setInterval ，而是用递归的 setTimeout 。

let step = () => {
  setTimeout(() => {
    n = n + 1;
    if(string[n] === "\n"){
        string2 += "<br>";
    }else if(string[n] === " "){
        string2 += "&nbsp;"
    }else {
        string2 += string[n];
    }
    // demo.innerHTML = string.substring(0, n); //不写 innerHTML 用 string2 来做
    // if () {
    //   //如果是回车就不照搬，要 1 对 4
         html.innerHTML = string2; //再将 string2 写到 demo 里面。
         style.innerHTML = string.substring(0,n);
         window.scrollTo(0,99999); //确保滚动条定位到最新出现的代码的位置，x 轴不变所以是 0 。
         html.scrollTo(0,99999); //还要确保在手机页面也是一样，在手机页面就是滚动 div 的滚动条。
    // } else {
    //   //如果不是回车就照搬
    //   string2 += string[n]; //string2 = string2 + string[n];
    //   demo.innerHTML = string2; //再将 string2 写到 demo 里面。
    // }
    // console.log(string2);
    // console.log(demo.innerHTML);
    if (n < string.length-1) {
      step();
    } else {
    } //如果 n 小于等于 10 ，我就 step ，否则什么都不做。
  }, 50);
}; //把 setTimeout 要做的事情封装成一个函数。
    step();

// setTimeout(()=>{
//     step()
//     setTimeout(()=>{
//         step()
//         setTimeout(()=>{
//             step()
//         },1000)
//     },1000) //然后我们每一秒钟就调用一次这个 step 函数。
// },1000)

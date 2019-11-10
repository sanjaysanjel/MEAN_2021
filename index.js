const express = require('express');
const app = express();


//  getSum= async (a,b)=>
// {
//   let sum = await (a+b);
// //   return new Promise(resolve=>{
// //
// //   setTimeout( ()=>{
// //       resolve(a+b)},1000);
// // }
// // )
// console.log(sum);
// return sum;
// }
//
// getSum(5,6).then(data=>
// {
// console.log("Returning a promise")
//   console.log(data);
// });

app.get('/',(req,res)=>
{
  res.send("Hello World");
})

app.get('/student',(req,res)=>
{
  res.send("Student Page");
})



app.listen(3000,()=>{
  console.log("Listening to port 3000");
})

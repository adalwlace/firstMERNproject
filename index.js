// let n=11;
// let remainder=n%2;
// remainder===0? console.log("even"):console.log("odd");

// let num=0;
// num>0
// ?console.log("+ve")
// :num<0
// ?console.log("-ve")
// :console.log("zero")

// for(let i=100;i>=50;i--){
    // let rem=i%2;
    // rem===0?console.log(`${i} is even`):console.log(`${i} is odd`);
    // console.log(i);
// }
//  let i=100;
//  while(i>=50){
//     console.log(i);
//     i--;
//  }

//  let n=10;
//  let sum=0;
// let i=1;
//  while (n<=5){
//     sum+=i;
//     i++;
// }
//  console.log(sum);

// let i=10;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=20);

// sayhello();
// function sayhello(num1,num2){
//     console.log("hello")
// }

// const greet=()=>{
//     console.log("hello");
// }
// greet();

//  const sum=(a,b)=>{
//     let sum=a+b;
//     return sum;
//  }
//  const re=sum(2,3);
//  console.log(re);
// const checkodd=(n)=>{
// let rem=n%2;
// if (rem===0){
// return "even";
// }
// else{
// return "odd";
// }
// return rem;   
// }
// const res=checkodd(20);
// console.log(res);

// const div=(x,y)=>x/y;
// const dodiv=div(12,3);
// console.log(dodiv);

// const checkoe=(num)=>(num%2===0?"even":"odd");
// const result=checkoe(3);
// console.log(result);

// const fullname=(a,b)=>{
//     let name=`${a} ${b}`;
//     return name;
// }
// const op=fullname('shreya','khanal');
// console.log(op);

// let mixArray=[
//     1,'lmno',true, null,undefined
// ]
// console.log(typeof mixArray);

// let templist=[4,5,6,7,8,9];
// console.log(templist.length);
// for(i=0;i<=templist.length;i++){
//     console.log(templist[i]);
//     }

// let numlist=[4,5,6,7,8,9];
// numlist.push(10,11);
// console.log(numlist);
// numlist.pop();
// console.log(numlist);
// numlist.shift();
// console.log(numlist);
// numlist.unshift(1,2,3);
// console.log(numlist);
// numlist.reverse(1,2,3);
// console.log(numlist);

// const pricelist=[100,200,300];
// const newpricelist=pricelist.map((item, index,array)=>{
//     return item+50;
// });
// console.log(pricelist);
// console.log(newpricelist);

// const word=['apple', 'ball'];
// const newword=word.map((item)=>{
//     return item.toUpperCase();
// });
// console.log(newword);

// const washingMachineList = [
//     {
//       brand: 'LG',
//       price: 999,
//     },
  
//     {
//       brand: 'Samsung',
//       price: 899,
//     },
  
//     {
//       brand: 'Whirlpool',
//       price: 1199,
//     },
//     {
//       brand: 'Xiaomi',
//       price: 799,
//     },
//   ];
// //   console.log(washingMachineList[0]);
// const newList=washingMachineList.map((item)=>{
//     let newPrice=item.price+50;
//     return {brand:item.brand, price:newPrice}
// });
// console.log(newList);

// const numlist=[101,21,30,101,200,301,30];
// numlist.sort((a,b)=>{
//   return b-a;
// });
// console.log(numlist)

// const value=numlist.find((item)=>item===30)
// console.log(value);


// const washingMachineList = [
//   {
//     brand: 'LG',
//     price: 999,
//   },

//   {
//     brand: 'Samsung',
//     price: 899,
//   },

//   {
//     brand: 'Whirlpool',
//     price: 1199,
//   },
// ];

//whose price is greater than 900
// const greatP=washingMachineList.filter((item)=>{
//   return item.price>900;
// })
// console.log(greatP);
// //brand is whirlpool
// const findP=washingMachineList.filter((item)=>{
//   if (item.brand==='Whirlpool'){
//     console.log(item);
//   }
// })
// console.log(greatP);
//decrease price of samsung by 15%
// const decrP=washingMachineList.map((item,brand,price)=>{
//   if(item.brand==='Samsung'){
//     brand=item.brand,
//     price=item.price +(15/100)*item.price;
//   }
//   else{}
// })
// console.log(decrP);

// let wdetails=structuredClone(washingMachineList);
// wdetails.brand='z';
// console.log(wdetails);

setTimeout(() => {
  console.log("hi");
}, 2000);
console.log("hello");































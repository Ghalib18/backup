// arrays in typescript....

// function getMax(nums:number[]):number{
//   let maxValue=-10000000;
//   for(let i=1;i<nums.length;i++){
//     if(nums[i]>maxValue){
//       maxValue=nums[i];
//     }
//   }
//   return maxValue;
// }
// const arr=[3,4,9,1,2,7,8];
// console.log(getMax(arr));

type Voter={
  firstname:string;
  lastname:string;
  age:number;
}
const arr1:Voter[]=[
  {firstname:"ghalib",lastname:"hussain",age:23},
  {firstname:"virat",lastname:"hussain",age:11},
  {firstname:"rehan",lastname:"hussain",age:18},
];
function getVoter(arr2:Voter[]){
  const ans:Voter[]= arr2.filter(voter=> voter.age>=18);
    console.log(ans);
}

getVoter(arr1);
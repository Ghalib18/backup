// atom: it is used to read and write the state of the application
// its sytax  is as follows
// const atomOne= atom{
//      key:"unqine- one",
//        default:0
// }; it contain one key and one default value, it cant be async function, it can be sync function..
// selector:it is  dervied state of the atom , it is  used to read the state oif the application and it have 1 key and 1 get function which can be async  also in that fucntion we can get the value of some other atoms or selectors and do some operatipn on it...

import {atom,selector} from "recoil"
export const counterAtom= atom({
  default:0,
  key:"counter"
})
 export const evenSelector=selector({
   key:"even",
   get:({get})=>{
     const currentCounter=get(counterAtom);
     return currentCounter%2===0;
   }
 })
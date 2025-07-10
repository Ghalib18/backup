import {atom, selector} from 'recoil'
 export const allNetwork=atom({
     key:"allnetwork",
     default:{
        network:1,
        jobs:0,
        notification:112,
        messages:1
     }
 });


export const total_cntAtom=selector({
    key:"totalValue",
    get:({get})=>{
        const cnt=get(allNetwork);
        return cnt.jobs+cnt.messages+cnt.network+cnt.notification;
    }
})
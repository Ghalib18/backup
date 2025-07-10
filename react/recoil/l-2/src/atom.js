import {atom, selector} from 'recoil'

export const networkAtom=atom({
    key:"networkAtom",
    default:102
});
 export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom=atom({
    key:"notificationAtom",
    default:12
});
export const messagingAtom=atom({
    key:"messagingAtom",
    default:1
});

export const total_cntAtom=selector({
    key:"totalValue",
    get:({get})=>{
        const network_cnt=get(networkAtom);
        const jobs_cnt=get(jobsAtom);
        const notification_cnt=get(notificationAtom);
        const messaging_cnt=get(messagingAtom);
        return network_cnt+jobs_cnt+notification_cnt+messaging_cnt;
    }
})
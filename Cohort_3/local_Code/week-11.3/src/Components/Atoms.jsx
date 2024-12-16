import { atom, selector } from "recoil";

export const networkAtom=atom({
  key:"networkAtom",
  default:104
})

export const jobsAtom=atom({
  key:"jobsCount",
  default:0
})

export const notificationAtom=atom({
  key:"notificationCount",
  default:12
})

export const messagingAtom=atom({
  key:"messageCount",
  default:0
})


export const totalNotificationSelector=selector({
  key:"totalNotificationCount",
  get:({get})=>{
    const notificationAtomCount=get(notificationAtom)
    const messageAtomCount=get(messagingAtom)
    const jobsAtomCount=get(jobsAtom)
    const networkAtomCount=get(networkAtom)

    return notificationAtomCount+messageAtomCount+jobsAtomCount+networkAtomCount
  }
})
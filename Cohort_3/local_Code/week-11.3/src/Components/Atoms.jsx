import { atom } from "recoil";

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
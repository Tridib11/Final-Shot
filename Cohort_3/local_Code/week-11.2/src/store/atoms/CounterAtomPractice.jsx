import { atom, selector } from "recoil";

export const CounterAtomPractice=atom({
  key:"Counter",
  default:0
})

export const evenSelector=selector({
  key:"isEvenSelector",
  get:function({get}){
    const currentCount=get(currentCount)
    const isEven=(currentCount%2==0)
    return isEven
  }
})
import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily=atomFamily({
  key:"todoAtomFamily",
  default:selectorFamily({
    key:"todoSelectorFamily",
    get:(id)=>async({get})=>{
      const res=await axios.get("http://localhost:3000/todos")
      return res.data.todos
    }
  })
})
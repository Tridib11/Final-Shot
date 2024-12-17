  import axios from "axios";
import { atom, selector } from "recoil";

  export const notifications = atom({
    key: "testingAtom",
    default: selector({
      key:"networkAtomSelector",
      get:async()=>{
        // await new Promise(r=>setTimeout(r,5000))//atificial Delay
        const res=await axios.get("http://localhost:3000/notification")
        return res.data
      }
    })
  });

  export const totalNotificationSelector = selector({
    key: "testingTotalNotificationCount",
    get: ({ get }) => {
      const allNotifications = get(notifications);
      return (
        allNotifications.jobs +
        allNotifications.network +
        allNotifications.notifications +
        allNotifications.messaging
      );
    },
  });

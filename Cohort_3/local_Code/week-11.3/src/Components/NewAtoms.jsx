  import { atom, selector } from "recoil";

  export const notifications = atom({
    key: "testingAtom",
    default: {
        network:0,
        jobs:0,
        messaging:0,
        notifications:0
    },
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

import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  default: {},
});

export const totalNotificationSelector = selector({
  key: "totalNotificationCount",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.jobs +
      allNotifications.network +
      allNotifications.notification +
      allNotifications.messaging
    );
  },
});

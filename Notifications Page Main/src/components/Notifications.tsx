import { Notification } from "../lib/constants";

const Notifications = ({
  notifications,
  setNotifications,
  unreadcount,
  setUnreadCount,
}: {
  notifications: Notification[];
  setNotifications: any;
  unreadcount: number;
  setUnreadCount: any;
}) => {
  const handleNotificationClick = (index: number) => {
    setNotifications((prev: object[]) =>
      prev.map((n: any) => (n.id === index ? { ...n, isRead: true } : n))
    );
    if (!notifications[index - 1].isRead) {
      setUnreadCount((prev: number) => (unreadcount > 0 ? prev - 1 : 0));
    }
  };
  return (
    <section className="space-y-4 mt-6 text-sm ">
      {notifications.map((item: any, i) => {
        return (
          <div
            key={i}
            onClick={() => handleNotificationClick(i + 1)}
            className={
              (item.isRead ? "" : "bg-Verylightgrayishblue") +
              " rounded-lg p-4 flex gap-3 cursor-pointer"
            }
          >
            <div className="w-10 ">
              <img src={item.user.userPic} alt="" />
            </div>
            <div className="flex-1">
              <span className="font-bold">{item.user.username}</span>{" "}
              <span className="text-Darkgrayishblue">
                {item.details.action}
              </span>{" "}
              <span className="font-bold text-Darkgrayishblue">
                {item.details.post}
              </span>
              <span className="font-bold text-Blue">{item.details.group}</span>{" "}
              {!item.isRead && (
                <div className="w-2 h-2 bg-Red inline-block rounded-full ml-1"></div>
              )}
              <div className="text-Grayishblue">{item.time}</div>
              <div
                className={
                  item.details.pvtMessage
                    ? "border border-Lightgrayishblue2 text-Darkgrayishblue p-4 rounded mt-2"
                    : ""
                }
              >
                {item.details.pvtMessage}
              </div>
            </div>
            {item.details.picture && (
              <div className="w-10">
                <img src={item.details.picture} alt="" />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Notifications;

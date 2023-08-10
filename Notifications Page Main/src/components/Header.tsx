import { useState } from "react";
const Header = ({ setNotifications, unreadcount, setUnreadCount }: any) => {
  const markAsRead = () => {
    setNotifications((prev: object[]) =>
      prev.map((n: object) => ({ ...n, isRead: true }))
    );
    setUnreadCount(0);
  };

  return (
    <header className="flex justify-between mt-6">
      <div className="flex items-end gap-2">
        <h1 className="font-bold text-xl">Notifications</h1>
        <div className="py-0.5 w-9 text-center rounded-md bg-Blue font-bold text-White">
          {unreadcount}
        </div>
      </div>
      <button className="text-Darkgrayishblue" onClick={markAsRead}>
        Mark as all read
      </button>
    </header>
  );
};

export default Header;

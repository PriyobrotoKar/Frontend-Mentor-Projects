const Header = ({ setNotifications, unreadcount, setUnreadCount }: any) => {
  const markAsRead = () => {
    setNotifications((prev: object[]) =>
      prev.map((n: object) => ({ ...n, isRead: true }))
    );
    setUnreadCount(0);
  };

  return (
    <header className="flex justify-between w-full">
      <div className="flex items-end gap-2">
        <h1 className="font-bold text-xl">Notifications</h1>
        <div className="py-0.5 w-9 text-center rounded-md bg-Blue font-bold text-White">
          {unreadcount}
        </div>
      </div>
      <button
        className="text-Darkgrayishblue hover:text-Blue "
        onClick={markAsRead}
      >
        Mark all as read
      </button>
    </header>
  );
};

export default Header;

import { useState } from "react";
import data from "./lib/constants";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notifications from "./components/Notifications";

function App() {
  const [unreadcount, setUnreadCount] = useState(3);
  const [notifications, setNotifications] = useState(data);
  return (
    <>
      <div className="my-auto font-PlusJakartaSans px-4 md:px-6 pt-6 max-w-screen-sm  bg-White md:shadow-2xl md:shadow-Lightgrayishblue1 md:rounded-2xl">
        <Header
          setNotifications={setNotifications}
          unreadcount={unreadcount}
          setUnreadCount={setUnreadCount}
        />
        <Notifications
          notifications={notifications}
          setNotifications={setNotifications}
          unreadcount={unreadcount}
          setUnreadCount={setUnreadCount}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;

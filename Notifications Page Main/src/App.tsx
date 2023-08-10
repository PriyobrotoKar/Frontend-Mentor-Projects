import { useState } from "react";
import data from "./lib/constants";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notifications from "./components/Notifications";

function App() {
  const [unreadcount, setUnreadCount] = useState(3);
  const [notifications, setNotifications] = useState(data);
  return (
    <div className="font-PlusJakartaSans px-4">
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
      <Footer />
    </div>
  );
}

export default App;

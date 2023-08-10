export interface Notification {
  id: number;
  user: { username: string; userPic: string };
  time: string;
  details: {
    action: string;
    post: string;
    picture: string;
    pvtMessage: string;
    group: string;
  };
  isRead: boolean;
}
const data = [
  {
    id: 1,
    user: {
      username: "Mark Webber",
      userPic: "./assets/images/avatar-mark-webber.webp",
    },
    time: "1m ago",
    details: {
      action: "reacted to your recent post",
      post: "My first tournament to day!",
      picture: "",
      pvtMessage: "",
      group: "",
    },
    isRead: false,
  },
  {
    id: 2,
    user: {
      username: "Angela Gray",
      userPic: "./assets/images/avatar-angela-gray.webp",
    },
    time: "5m ago",
    details: {
      action: "followed you",
      post: "",
      picture: "",
      pvtMessage: "",
      group: "",
    },
    isRead: false,
  },
  {
    id: 3,
    user: {
      username: "Jacob Thompon",
      userPic: "./assets/images/avatar-jacob-thompson.webp",
    },
    time: "1 day ago",
    details: {
      action: "has joined your group",
      post: "",
      picture: "",
      pvtMessage: "",
      group: "Cless Club",
    },
    isRead: false,
  },
  {
    id: 4,
    user: {
      username: "Rizky Hasanuddin",
      userPic: "./assets/images/avatar-rizky-hasanuddin.webp",
    },
    time: "5 days ago",
    details: {
      action: "sent you a private message",
      post: "",
      picture: "",
      pvtMessage:
        " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      group: "",
    },
    isRead: true,
  },
  {
    id: 5,
    user: {
      username: "Kimberly Smith",
      userPic: "./assets/images/avatar-kimberly-smith.webp",
    },
    time: "1 week ago",
    details: {
      action: "commented on your picture",
      post: "",
      picture: "./assets/images/image-chess.webp",
      pvtMessage: "",
      group: "",
    },
    isRead: true,
  },
  {
    id: 6,
    user: {
      username: "Nathan Peterson",
      userPic: "./assets/images/avatar-nathan-peterson.webp",
    },
    time: "2weeks ago",
    details: {
      action: "reacted to your recent post",
      post: "5 end-game stategies to increase your win rate",
      picture: "",
      pvtMessage: "",
      group: "",
    },
    isRead: true,
  },
  {
    id: 7,
    user: {
      username: "Anna Kim",
      userPic: "./assets/images/avatar-anna-kim.webp",
    },
    time: "2weeks ago",
    details: {
      action: "left the group",
      post: "",
      picture: "",
      pvtMessage: "",
      group: "Chess Club",
    },
    isRead: true,
  },
];
export default data;

import React from "react";
import { FcAbout, FcBookmark } from "react-icons/fc";
import { BsFillArrowDownCircleFill, BsHouseDoor } from "react-icons/bs";
import {
  FiAlignJustify,
  FiArrowDown,
  FiArrowUp,
  FiLogOut,
} from "react-icons/fi";

const Sidebardetails = [
  {
    title: "Slack",
    path: "/dashboard",
    icon: <BsHouseDoor />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FcAbout />,
  },
  {
    title: "Chats",
    path: "/list",
    icon: <FiAlignJustify />,
    IconOpened: <FiArrowDown />,
    IconClosed: <FiArrowUp />,

    subNav: [
      {
        title: "# Kishore",
        path: "/nest1",
      },
      {
        title: "# Kumar",
        path: "/nest2",
      },
      {
        title: "# Kumaran",
        path: "/nest3",
      },
      {
        title: " + Channels",
        path: "/nest4",
        icon:<BsFillArrowDownCircleFill />,

        subNavNest: [
          {
            title: "React-training",
            path: "/nest41",
          },
          {
            title: "Angular-training",
            path: "/nest42",
          },
          {
            title: "java-training",
            path: "/nest43",
          },
          {
            title: "Dorustree-internal",
            path: "/nest44",
          },
        ],
      },
    ],
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <FcBookmark />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <FiLogOut />,
  },
];

export default Sidebardetails;

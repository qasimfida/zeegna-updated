import { FiHome } from "react-icons/fi";
import { FaRegBuilding, FaRegUserCircle } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

export const NavLinks = [
  {
    title: "Home",
    link: "#",
    icon: <FiHome />,
  },
  {
    title: "Profile",
    link: "#",
    icon: <FaRegUserCircle />,
  },
  {
    title: "My Work",
    link: "#",
    icon: <RiFileList2Line />,
  },
  {
    title: "Messages",
    link: "#",
    icon: <AiOutlineMessage />,
  },
  {
    title: "Employers",
    link: "#",
    icon: <FaRegBuilding />,
  },
  {
    title: "Resources",
    link: "/blogs",
    icon: <RiFileList2Line />,
  },
  {
    title: "Settings",
    link: "/settings/notifications",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Log out",
    link: "#",
    icon: <IoMdLogOut />,
  },
];
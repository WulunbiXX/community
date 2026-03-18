import { HiHome } from "react-icons/hi2";
import { IoNewspaper } from "react-icons/io5";
import { FaPeopleGroup, FaCirclePlay } from "react-icons/fa6";

export const BUSINESS_STATUE_CODE = {
    ERROR: 0,   
    SUCCESS: 1,
    WARNING: 2,
};

export const DB_NAME = "community_db"

export const navItems = [
  { name: "Home", href: "/", icon: HiHome },
  { name: "Lakers", href: "/lakers", icon: IoNewspaper },
  { name: "Members", href: "/members", icon: FaPeopleGroup },
  { name: "Media", href: "/media", icon: FaCirclePlay },
];
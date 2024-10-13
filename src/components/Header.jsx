import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    
        <NavLink
          to="/"
           className="absolute z-1 h-[135px] w-full flex justify-center items-center bg-[#39445a] shadow-3xl"
        >
          <h1 className="text-white font-title text-7xl font-thin">🎬 ENTERTAIONMENT HUB 🎥</h1>
        </NavLink>
  );
}

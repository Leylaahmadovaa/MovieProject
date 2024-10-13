import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <NavLink to="/">
      <footer className="bg-[#2d313a] h-[70px] w-full fixed bottom-0 flex justify-center items-center gap-[100px]">
        <div className="cursor-pointer text-white flex flex-col items-center justify-center">
          <i className="fa-solid fa-fire"></i>
          <p className="font-title font-semibold text-[14px]">Trending</p>
        </div>
        <div className="cursor-pointer text-white flex flex-col items-center justify-center">
          <i className="fa-solid fa-clapperboard"></i>
          <p className="font-title font-semibold text-[14px]">Movies</p>
        </div>
        <div className="cursor-pointer text-white flex flex-col items-center justify-center">
          <i className="fa-solid fa-tv"></i>
          <p className="font-title font-semibold text-[14px]">TV Series</p>
        </div>
        <div className="flex gap-5 items-center">
        <div className="cursor-pointer  text-white flex flex-col items-center justify-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="font-title font-semibold text-[14px]">Search</p>
        </div>
        </div>
      </footer>
    </NavLink>
  );
}

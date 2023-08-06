import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center py-4 xl:py-8 mt-4">
        <div>
          <img className="w-14" src="./assets/images/logo.svg" alt="" />
        </div>
        <nav className="hidden lg:block">
          <ul className=" flex gap-6 text-DarkGrayishBlue ">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        <div className="z-10 md:hidden" onClick={() => setShow(!show)}>
          <img src="./assets/images/icon-menu.svg" alt="" />
        </div>
      </header>
      <aside
        className={
          "absolute inset-0 bg-[#000] transition-opacity pointer-events-none " +
          (show ? "opacity-60" : "opacity-0")
        }
      ></aside>
      <aside
        className={
          "fixed z-20 h-[100svh] w-[70%] bg-OffWhite  top-0 p-6 space-y-20 transition-all md:hidden  " +
          (show ? "right-0" : "-right-full")
        }
      >
        <div className="py-3">
          <img
            className="ml-auto"
            onClick={() => setShow(!show)}
            src="./assets/images/icon-menu-close.svg"
            alt=""
          />
        </div>
        <nav>
          <ul className="text-xl space-y-5 font-medium">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;

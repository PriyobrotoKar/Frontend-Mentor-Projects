import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center py-4">
        <div>
          <img
            className="w-14"
            src="../../public/assets/images/logo.svg"
            alt=""
          />
        </div>
        <div className="z-10" onClick={() => setShow(!show)}>
          <img src="../../public/assets/images/icon-menu.svg" alt="" />
        </div>
      </header>
      <aside
        className={
          "absolute inset-0 bg-[#000] transition-opacity " +
          (show ? "opacity-60" : "opacity-0")
        }
      ></aside>
      <aside
        className={
          "absolute z-20 h-[100svh] w-[70%] bg-OffWhite  top-0 p-6 space-y-20 transition-all  " +
          (show ? "right-0" : "-right-full")
        }
      >
        <div className="py-4">
          <img
            className="ml-auto"
            onClick={() => setShow(!show)}
            src="../../public/assets/images/icon-menu-close.svg"
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

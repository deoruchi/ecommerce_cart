import Logo from "../images/logo.svg";
import Ham from "../images/icon-menu.svg";
import Profile from "../images/image-avatar.png";
import Cross from "../images/icon-close.svg";
import Carticon from "../images/icon-cart.svg";
import Cart from "./Cart";
import { useState } from "react";
export default function NavBar({ cartData, remove }) {
  const [toggle, setToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(true);

  return (
    <>
      <nav className=" flex px-3 md:px-0 md:flex-row justify-between items-center py-3 lg:mx-32 md:mx-20 border-y-slate-100 border-b-2 ">
        {/* hamburger icon */}
        <img
          src={Ham}
          className=" w-6 h-4 md:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        ></img>
        {/* logo */}

        {/* navigation items */}

        <div className="md:flex md:flex-row md:items-center">
          <img src={Logo} className=" w-26 h-5"></img>
          <ul
            className={`flex  md:flex md:flex-row md:mx-2 list-none text-slate-500 ${
              toggle
                ? "flex-col items-start p-2 absolute bg-slate-100 w-36 h-full left-0 top-0"
                : "hidden"
            }`}
          >
            <img
              src={Cross}
              className={` md:hidden my-3 ${toggle ? "visible" : "hidden"}`}
              onClick={() => setToggle(!toggle)}
            ></img>
            <li className="md:p-2 cursor-pointer hover:text-orange-500">
              Collections
            </li>
            <li className="md:p-2 cursor-pointer  hover:text-orange-500">
              Men
            </li>
            <li className="md:p-2 cursor-pointer  hover:text-orange-500">
              Women
            </li>
            <li className="md:p-2 cursor-pointer  hover:text-orange-500">
              About
            </li>
            <li className="md:p-2 cursor-pointer  hover:text-orange-500">
              Contact
            </li>
          </ul>
        </div>

        {/* <button>Cart</button> */}
        {/* profilte pic */}
        <div className="flex md:flex-row md:items-center cursor-pointer">
          <button
            className="px-5 relative"
            onClick={() => setCartToggle(!cartToggle)}
          >
            <img src={Carticon} />
            <div
              className={
                cartData.cart.length
                  ? "absolute md:-top-4 -top-1 right-2 bg-red-500 text-white p-1 text-sm rounded-full"
                  : ""
              }
            >
              {cartData.cart.length ? cartData.cart.length : ""}
            </div>
          </button>
          <img src={Profile} className="w-12"></img>
        </div>
      </nav>

      <Cart cartData={cartData} remove={remove} toggle={cartToggle} />
    </>
  );
}

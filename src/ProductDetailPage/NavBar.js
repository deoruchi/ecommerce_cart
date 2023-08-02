import Logo from "../images/logo.svg";
import Ham from "../images/icon-menu.svg";
import Profile from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
export default function NavBar() {
  return (
    <nav className=" flex flex-col md:flex-row md:justify-between items-center py-3 md:mx-32 border-y-slate-500 border-b-2 ">
      {/* hamburger icon */}
      <img src={Ham} className=" w-6 h-4 md:hidden "></img>
      {/* logo */}

      {/* navigation items */}

      <div className="md:flex md:flex-row md:items-center">
        <img src={Logo} className=" w-26 h-5"></img>
        <ul className="flex md:flex-row md:mx-2 list-none text-slate-500 ">
          <li className="md:p-2">Collections</li>
          <li className="md:p-2">Men</li>
          <li className="md:p-2">Women</li>
          <li className="md:p-2">About</li>
          <li className="md:p-2">Contact</li>
        </ul>
      </div>

      {/* <button>Cart</button> */}
      {/* profilte pic */}
      <div className="md:flex md:flex-row md:items-center  ">
        <button className="px-4">
          <img src={Cart}></img>
        </button>
        <img src={Profile} className="w-12"></img>
      </div>
    </nav>
  );
}

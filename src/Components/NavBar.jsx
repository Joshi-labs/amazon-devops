import { useContext, useState } from "react";
// import NavBarItem from "../Details/NavBarItem"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LeftBar from "./LeftBar";
import CartContext from "../ContextApi/CartContext";
import { NavBarItem } from "../Data/data";

const NavBar = () => {

  const { openButton } = useContext(CartContext);

  return (
    <>
      <div className=" flex justify-evenly items-center bg-[#232f3e] pt-16">
        <div className="flex justify-center items-center cursor-pointer gap-2">
          <div onClick={() => openButton()}><MenuIcon />All</div>
          {/* <div className="bold">All</div> */}
          <LeftBar />
        </div>
        <div className=" list-none">
          <ul>
            {
              NavBarItem.map((item) => (<li className="inline-block px-3 py-3 text-sm font-semibold border border-transparent transition-all duration-300 ease-in-out hover:border-white" key={item.id}>{item.MenuItem}</li>))
            }
          </ul>
        </div>
        {/* <div className="font-bold text-[1.2rem] flex justify-center items-center">
          <div>
            <p>CITADEL</p>
          </div>
          <div className="h-4 w-[2px] mx-2 bg-white"></div>
          <div className="offer-date">
            <span className="date">ddd</span>
            <span className="count-down">ddd</span>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default NavBar
import { BsPerson } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { BsCreditCard2Front } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlinePercentBadge } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { ImNotification } from "react-icons/im";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";


const AccountAsideMenu = () =>
{
  const navigate = useNavigate()
  const handleLogout = ()=> {
    navigate("/account/login")
  }

  // const Menu = useRef(null)
  // const active = ''
  return (
    <aside className="hidden w-fit md:max-w-80 p-2 md:p-5 md:flex flex-col justify-between gap-5 h-lvh">
      <div className="bg-[#FBFBFE] rounded-2xl p-5 flex flex-col items-center-safe md:items-baseline">
        <div className="flex gap-2 items-center-safe mb-5">
          <div className="w-12 h-12 bg-[#E15177] rounded-full">
            <img src="../../src/assets/images/products/orange.png" alt="profile" className="w-full hidden" />
            <p className="flex justify-center-safe mt-1 items-center-safe text-white text-3xl font-semibold overflow-hidden">AQ</p>
          </div>

          <h3 className="hidden md:block text-md font-bold">AQO Projects</h3>
        </div>

        <div className="border-b-1 border-black/10 mb-5">
          <NavLink to={"/account"} end className={({isActive})=> `flex gap-2 ${isActive ? 'text-[#B6349A] font-semibold': 'text-black/70'} text-lg items-center-safe  mb-5`}>
            <BsPerson className="size-8 md:size-6" />
            <p className="hidden md:block">Account Details</p>
          </NavLink>

          <NavLink to={"/account/orders"} className={({isActive})=> `flex gap-2 text-lg items-center-safe ${isActive ? 'text-[#B6349A] font-semibold': 'text-black/70 '} font-meidum mb-5`}>
            <TbReceipt className="size-8 md:size-6" />
            <p className="hidden md:block">My Orders</p>
          </NavLink>

          <div className="flex gap-2 text-black/70 text-lg items-center-safe font-meidum mb-5">
            <IoCartOutline className="size-8 md:size-6" />
            <p className="hidden md:block">My Cart</p>
          </div>

          <NavLink to={"/account/address"} className={({isActive})=> `flex gap-2 ${isActive ? 'text-[#B6349A] font-semibold': 'text-black/70 '} text-lg items-center-safe font-meidum mb-5`}>
            <GrLocation className="size-8 md:size-6" />
            <p className="hidden md:block">My Addresses</p>
          </NavLink>

          <NavLink to={"/account/payment"} className={({isActive})=> `flex gap-2 ${isActive ? 'text-[#B6349A] font-semibold': 'text-black/70 '} text-lg items-center-safe font-meidum mb-5`}>
            <BsCreditCard2Front className="size-8 md:size-6" />
            <p className="hidden md:block">My Payments</p>
          </NavLink>

          <div className="flex gap-2 text-black/70 text-lg items-center-safe font-meidum mb-5">
            <FiBell className="size-8 md:size-6" />
            <p className="hidden md:block">Notification Setting</p>
          </div>

          <div className="flex gap-2 text-black/70 text-lg items-center-safe font-meidum mb-5">
            <FaUserFriends className="size-8 md:size-6" />
            <p className="hidden md:block">Refer Friends</p>
          </div>

          <div className="flex gap-2 text-black/70 text-lg items-center-safe font-meidum mb-5">
            <HiOutlinePercentBadge className="size-8 md:size-6" />
            <p className="hidden md:block">Coupons</p>
          </div>

          <div className="flex gap-2 text-black/70 text-lg items-center-safe font-meidum mb-5">
            <HiOutlineReceiptTax className="size-8 md:size-6" />
            <p className="hidden md:block">My Recipes</p>
          </div>

        </div>

        <div >
          <div  className="flex gap-2 text-black/70 text-lg items-center-safe font-meidum mb-5">
            <IoSettingsOutline className="size-8 md:size-6" />
            <p className="hidden md:block">Account Settings</p>
          </div>

          <NavLink to={"/account/support"} className={({isActive})=> `flex gap-2 ${isActive ? 'text-[#B6349A] font-semibold': 'text-black/70 '} text-lg items-center-safe font-meidum mb-5`}>
            <ImNotification className="size-8 md:size-6" />
            <p className="hidden md:block">Help Center</p>
          </NavLink>

        </div>
      </div>
      <div className="bg-[#FBFBFE] rounded-xl ">
        <button className=" text-lg mx-auto md:mx-0 font-semibold flex items-center-safe gap-2 p-4" onClick={handleLogout}>
          <TbLogout2 className="size-8 md:size-6"/>
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AccountAsideMenu;
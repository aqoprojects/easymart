import { BsCartDash } from "react-icons/bs";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserRelatedButton = () =>
{
  return (
    <>
      <NavLink to={"/product-cart"} className='bg-[#A02B84] lg:bg-[#FDEAFB] flex lg:space-x-1 items-center-safe justify-center-safe lg:ml-2 py-1 px-1 lg:pr-2 rounded-full'>
        <div className='flex items-center-safe justify-center-safe lg:space-x-1 py-1 px-3 lg:px-2 lg:bg-white text-white lg:text-[#B6349A] font-semibold rounded-full text-sm'>
          <BsCartDash className='size-5 lg:' />
          <span className='hidden lg:block'>14</span>
        </div>
        <p className='hidden lg:block font-medium text-md'>Cart</p>
      </NavLink>
      <div className='hidden lg:flex ring-1 ring-[#DE57C4] items-center-safe justify-center-safe space-x-1.5 py-2 px-8 rounded-full font-medium ml-6'>
        <MdOutlinePeopleOutline />
        <NavLink to={"/account/login"}>Login</NavLink>
      </div>
    </>
  );
};

export default UserRelatedButton;
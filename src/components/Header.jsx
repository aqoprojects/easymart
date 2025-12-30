import Logo from '/Logo.png';
import SearchBar from '../components/HeaderComponents/Search/SearchBar';
import UserRelatedButton from '../components/HeaderComponents/UserRelatedButton';
import { CiLocationOn } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
const Header = () =>
{
  const {user} = useAuth();
  const isLoggedIn = user ? true:false

  const location = useLocation();
  const HeaderDenied = [ '/login', '/account/register', '/account/preference', '/account/verification' ];
  const normalizedPath = location.pathname !== '/' && location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
  const showMobileMenu = useRef()
  const handleMenu = ()=> {
      showMobileMenu.current.classList.toggle('hidden')
      
      const isOverFLow = showMobileMenu.current.classList.contains("hidden") 
      document.body.style.overflow = isOverFLow ? 'auto' : 'hidden'
    }
 
  return (
    <>
      {!HeaderDenied.includes( normalizedPath ) &&
        <header className='max-auto py-3 shadow-xs shadow-black/10'>
          <nav className='w-full flex justify-between  items-center-safe px-4 lg:px-8 flex-wrap lg:flex-nowrap'>
            <div className='block lg:hidden'>
              <IoMenuOutline  className='size-8' onClick={handleMenu} />
              <div ref={showMobileMenu} className='hidden fixed z-200 bg-black/20 backdrop-blur-2xl top-0 left-0 bottom-0 right-0'>
                <div className='absolute bg-white top-0 left-0 bottom-0 w-full max-w-80 pl-2 pr-4'>
                  <div className='flex justify-between items-center-safe mb-8'>
                    <div className='w-45'>
                      <img src="./Logo.png" alt="logo" className='w-full object-cover' />
                    </div>

                    <RxCross1 className="size-6"  onClick={handleMenu} />
                  </div>

                  <div className='flex flex-col gap-7'>
                    <p className={`text-black/70 text-2xl font-medium`}>Home</p>
                    <p className={`text-black/70 text-2xl font-medium`}>My Order</p>
                    <p className={`text-black/70 text-2xl font-medium`}>My Address</p>
                    <p className={`text-black/70 text-2xl font-medium`}>My Payment</p>
                    <p className={`text-black/70 text-2xl font-medium`}>Wishlist</p>
                    <p className={`text-black/70 text-2xl font-medium`}>Favourites</p>
                    <p className={`text-black/70 text-2xl font-medium`}>About</p>
                    <p className={`text-black/70 text-2xl font-medium`}>Services</p>
                    <p className={`text-black/70 text-2xl font-medium`}>Contact Us</p>
                    <p className={`text-black/70 text-2xl font-medium`}>Live Chat</p>
                  </div>


                  <div className='flex ring-1 ring-[#DE57C4] items-center-safe justify-center-safe space-x-1.5 py-2 px-8 rounded-full font-medium mt-10'>
                    {/* <MdOutlinePeopleOutline /> */}
                    
                    {isLoggedIn ? <NavLink to={"/account"}>Account</NavLink> : <NavLink to={"/account/login"}>Login</NavLink>}
                    
                  </div>

                </div>
              </div>
            </div>
            <NavLink to={"/"} className=' max-w-40 '>
              <img src={Logo} alt="easy mart" className='w-[100%] min-w-30 hidden lg:block' />
            </NavLink>
            <div className='flex space-x-0.5 items-center-safe lg:ml-10 '>
              <CiLocationOn className='size-6' />
              <p className=''>10115 New York</p>
            </div>

            <SearchBar />

            <UserRelatedButton  isLoggedIn={isLoggedIn} />
          </nav>
        </header>
      }
    </>
  );
};

export default Header;
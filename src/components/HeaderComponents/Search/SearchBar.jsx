import { createContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import SearchProductDisplay from '../Search/SearchProductDisplay'

const SearchContext = createContext()

const SearchBar = () =>
{
  const [ isSearchActive, setIsSearchActive ] = useState( false );
  const [ isMobile, setIsMobile ] = useState( false );
  const [ searchValue, setSearchValue ] = useState( '' );
  // const SearchContainer = useRef()
  // const SearchProductDisplay = useRef();
  // const cancelMobileSearch = useRef()
  const ProductSearchResult = ( e ) =>
  {
    setSearchValue( e.target.value );
  };

  useEffect( () =>
  {
    const checkMobile = () =>
    {
      setIsMobile( window.innerWidth < 768 );
    };

    checkMobile();
    window.addEventListener( 'resize', checkMobile );

    return () => window.removeEventListener( 'resize', checkMobile );
  }, [] );

  useEffect( () =>
  {
    if ( isMobile && isSearchActive ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () =>
    {
      document.body.style.overflow = "auto";
    };
  }, [ isMobile, isSearchActive ] );

  const handleSearchClick = () =>
  {
    setIsSearchActive( true );

  };

  const handleBlur = ()=>{
    if(!isMobile){
      setTimeout(()=> setIsSearchActive(false), 150)
    }
  }

  return (
    <div className={`${isMobile && isSearchActive ? 'fixed -top-3 ' : 'relative'} flex-auto transition-all bg-white flex w-full lg:w-auto items-center-safe justify-center-safe gap-1 md:px-4 order-last lg:order-none mt-3 lg:mt-0 `} onBlur={handleBlur}>
      <div className={` ${isMobile && isSearchActive ? 'block' : 'hidden'} `} onClick={() => setIsSearchActive( false )}>
        <RxCross1 className="size-6" />
      </div>
      <div className='shadow-xs shadow-black/10 w-[100%] z-100 flex items-center justify-center pl-3 px-2 rounded-full'>
        <div className='bg-[#FDEAF8] rounded-full p-1 text-[#DE57C4] flex items-center-safe justify-center order-first lg:order-none'>
          <CiSearch className='size-6' />
        </div>
        <input onChange={ProductSearchResult} onClick={handleSearchClick}  type="text" className='flex-auto rounded-r-full h-14 pl-2 pr-4 outline-none placeholder:text-black/60 font--medium placeholder:text-lg truncate' placeholder='Search by product name' />
      </div>

      <SearchContext.Provider value={{isMobile, isSearchActive, searchValue, setIsSearchActive}}   >
        <SearchProductDisplay />
      </SearchContext.Provider >
    </div>
  );
};

export default SearchBar;
export {SearchContext}
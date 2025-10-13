import { NavLink } from 'react-router-dom';
import Logo from '/Logo.png';
import { GoArrowLeft } from 'react-icons/go';

const AccountVerificationPage = () =>
{
  return (
    <>
      <header className='max-auto py-3 shadow-xs shadow-black/10'>
        <nav className='w-full flex justify-center-safe  items-center-safe px-4 lg:px-8 flex-wrap lg:flex-nowrap'>
          <NavLink to={"/"} className=' max-w-40 '>
            <img src={Logo} alt="easy mart" className='w-[100%] min-w-30 block' />
          </NavLink>
        </nav>
      </header>

      <main className='w-full flex flex-col justify-center items-center-safe mt-15'>
        <section className='flex-1 md:w-110'>
          <div className="p-2 rounded-full ring-1 ring-black/10 w-fit mb-6" >
            <GoArrowLeft className="size-7" />
          </div>

            <h1 className='font-semibold text-4xl mb-5'>Enter verification code</h1>

          <div className='bg-black/2 p-6 rounded-2xl mb-10 flex flex-col '>
            <div className='mb-8'>
              <p className='text-black/70 text-lg font-semibold'>We sent a 6-digit code to</p>
              <p className='text-black text-xl font-semibold'>github.com/aqoprojects</p>
            </div>

            <div className='flex flex-1 gap-5'>
             <input type="text" className='w-15 h-15 ring-1 ring-black/20 rounded-xl text-5xl text-center font-semibold text-black/40 bg-white' value="0" />
             <input type="text" className='w-15 h-15 ring-1 ring-black/20 rounded-xl text-5xl text-center font-semibold text-black/40 bg-white' value="0" />
             <input type="text" className='w-15 h-15 ring-1 ring-black/20 rounded-xl text-5xl text-center font-semibold text-black/40 bg-white' value="0" />
             <input type="text" className='w-15 h-15 ring-1 ring-black/20 rounded-xl text-5xl text-center font-semibold text-black/40 bg-white' value="0" />
            </div>

          </div>

          <p className='font-semibold text-lg'>Haven't received your code? <span className='text-[#B6349A]'>Request a new one</span> </p>

        </section>
      </main>

    </>
  );
};

export default AccountVerificationPage;
import { NavLink } from 'react-router-dom';
import Logo from '/Logo.png';
import { AiOutlineMail } from "react-icons/ai";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import { ImSpinner2 } from "react-icons/im";
import api from '../../services/api';
const AccountRegisterPage = () =>
{
  const [ firstName, setFirstName ] = useState( '' );
  const [ lastName, setLastName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ status, setStatus ] = useState( '' );
  const [ formError, setFormError ] = useState( [] );

  const handleRegistration = async ( e ) =>{
    e.preventDefault();
  if (status == 'processing'){
    return;
  }
  setStatus( 'processing' );
  const customerData = {
    firstName, lastName, email, password
  };
  try {
    const response = await api.post( '/register/', {
      email: customerData.email,
      first_name: customerData.firstName,
      last_name: customerData.lastName,
      password: customerData.password
    } );
  } catch ( error ) {
    if ( error.response ) {
      setFormError( error.response.data );
    } else {
      setFormError( ...formError, { nonFormFieldError: "Something went wrong. Try again" } );
    }

  }
  setStatus( '' );
};
return (
  <>
    <header className='max-auto py-3 shadow-xs shadow-black/10'>
      <nav className='w-full flex justify-center-safe  items-center-safe px-4 lg:px-8 flex-wrap lg:flex-nowrap'>
        <NavLink to={"/"} className=' max-w-40 '>
          <img src={Logo} alt="easy mart" className='w-[100%] min-w-30 block' />
        </NavLink>
      </nav>
    </header>
    <main className='flex  justify-center-safe '>

      <form className='flex-1 max-w-110 mt-4 md:mt-10 px-2' onSubmit={handleRegistration}>
        <div className='mb-10'>
          <h1 className="text-3xl font-semibold">Sign Up</h1>
        </div>

        <div className='bg-black/2 p-6 rounded-2xl mb-10'>
          <div className='flex gap-4 mb-6'>
            <button className="flex gap-2 items-center-safe ring-1 ring-[#B6349A] text-[#B6349A] bg-[#FEF5FD] px-5 py-2.5 rounded-xl font-semibold"> <AiOutlineMail className="size-6" />Email</button>
            {/* <button className="flex gap-2 items-center-safe text-black/30 bg-black/4 px-5 py-2.5 rounded-xl font-semibold"> <PiPhoneLight className="size-6" />Phone</button> */}

          </div>

          <div>
            <p className='text-red-900 font-semibold my-4'>{formError.nonFormFieldError}</p>
            <div className='mb-4'>
              <p className='font-semibold text-lg mb-1'>First name</p>
              <input type="text" className={`ring-1 ${formError.first_name ? "ring-red-500" : "ring-black/10"}  w-full py-3 px-4 bg-white rounded-lg mb-1 focus-within:outline-[#B6349A] focus-within:outline-1`} placeholder='First name' value={firstName} onChange={( e ) => setFirstName( e.target.value )} />
              <p className='text-red-900 font-semibold'>{formError.first_name}</p>
            </div>
            <div className='mb-4'>
              <p className='font-semibold text-lg mb-1'>Last name</p>
              <input type="text" className={`ring-1 ${formError.last_name ? "ring-red-500" : "ring-black/10"} w-full py-3 px-4 bg-white rounded-lg mb-1 focus-within:outline-[#B6349A] focus-within:outline-1`} placeholder='Last name' value={lastName} onChange={( e ) => setLastName( e.target.value )} />
              <p className='text-red-900 font-semibold'>{formError.last_name}</p>
            </div>
            <div className='mb-4'>
              <p className='font-semibold text-lg mb-1'>Email</p>
              <input type="text" className={`ring-1 ${formError.first_name ? "ring-red-500" : "ring-black/10"} w-full py-3 px-4 bg-white rounded-lg mb-1 focus-within:outline-[#B6349A] focus-within:outline-1`} placeholder='Email' value={email} onChange={( e ) => setEmail( e.target.value )} />
              <p className='text-red-900 font-semibold'>{formError.email}</p>
            </div>
            <div className='mb-4'>
              <p className='font-semibold text-lg mb-1'>Passowrd</p>
              <input type="password" className={`ring-1 ${formError.first_name ? "ring-red-500" : "ring-black/10"} w-full py-3 px-4 bg-white rounded-lg mb-1 focus-within:outline-[#B6349A] focus-within:outline-1`} placeholder='Passowrd' value={password} onChange={( e ) => setPassword( e.target.value )} />
              <p className='text-red-900 font-semibold'>{formError.password}</p>
            </div>

            {status === 'processing' ? <button className="bg-pink-300 text-white flex gap-2 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl outline-0"  disabled>
              <ImSpinner2 className='size-5 animate-spin' />
              Please wait
            </button> : <button className="bg-[#B6349A] text-white flex gap-2 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl outline-0" >
              Register
            </button>}
          </div>

        </div>

        <div className='flex flex-col gap-4'>
          <button className="bg-black/4 text-[#B6349A] flex gap-3 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl "> <FaMeta className="size-5" /> Sign up with Meta</button>
          <button className="bg-black/4 text-black flex gap-3 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl"> <FaGoogle className="size-5" /> Sign up with Google</button>
          <p className='font-semibold text-lg text-center mt-4 mb-4'>Already have an account? <span className='text-[#B6349A]'>Login</span> </p>
        </div>
      </form>
    </main>
  </>
);
};

export default AccountRegisterPage;
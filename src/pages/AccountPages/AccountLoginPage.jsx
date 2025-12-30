import { NavLink } from 'react-router-dom';
import Logo from '/Logo.png';
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneLight } from "react-icons/pi";
import { BsArrowRight } from 'react-icons/bs';
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const AccountLoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const result = await login(credentials)
    if (!result.success) {
      setError(result.error)
    }
    setSubmitting(false)
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
    <header className='max-auto py-3 shadow-xs shadow-black/10'>
       <nav className='w-full flex justify-center-safe  items-center-safe px-4 lg:px-8 flex-wrap lg:flex-nowrap'>
         <NavLink to={"/"} className=' max-w-40 '>
           <img src={Logo} alt="easy mart" className='w-[100%] min-w-30 block' />
         </NavLink>
       </nav>
     </header>
    <main className='flex  justify-center-safe'>
      
      <section className='flex-1 max-w-110 mt-4 md:mt-15 px-2'>
        <div className='mb-10'>
          <h1 className="text-3xl font-semibold">Login</h1>
        </div>

        <div  className='bg-black/2 p-6 rounded-2xl mb-10'>
          <div className='flex gap-4 mb-6'>
             <button className="flex gap-2 items-center-safe ring-1 ring-[#B6349A] text-[#B6349A] bg-[#FEF5FD] px-5 py-2.5 rounded-xl font-semibold"> <AiOutlineMail className="size-6" />Email</button>
             <button className="flex gap-2 items-center-safe text-black/30 bg-black/4 px-5 py-2.5 rounded-xl font-semibold"> <PiPhoneLight className="size-6" />Phone</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <p className='font-semibold text-lg mb-1'>Email</p>
              <input type="email" name='email' className='ring-1 ring-black/10 outline-none w-full py-3 px-4 bg-white rounded-lg mb-4' placeholder='Enter your email' value={credentials.email} onChange={handleChange} required />
            </div>

            <div>
              <p className='font-semibold text-lg mb-1'>Password</p>
              <input type="password" name='password' className='ring-1 ring-black/10 outline-none w-full py-3 px-4 bg-white rounded-lg mb-8' placeholder='Password'  value={credentials.password} onChange={handleChange} required />
            </div>
            <button type='submit' className="bg-[#B6349A] outline-none text-white flex gap-2 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl">Coutinue <BsArrowRight className="size-5"  /> </button>
          </form>
          
        </div>

        <div className='flex flex-col gap-4'>
           <button className="bg-black/4 text-[#B6349A] flex gap-3 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl "> <FaMeta className="size-5" /> Sign in with Meta</button>
            <button className="bg-black/4 text-black flex gap-3 py-2.5 w-full px-8 justify-center-safe items-center-safe font-semibold text-lg rounded-4xl"> <FaGoogle className="size-5" /> Sign in with Google</button>
        </div>
      </section>
    </main>
    </>
  )
}

export default AccountLoginPage
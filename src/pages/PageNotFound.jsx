import React from 'react'
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <article className='p-6'>
      <section className='flex justify-center-safe flex-col items-center-safe'>
        <div className='w-70'>
          <img src="/notfound.png" alt="page not found" className='w-full ' />
        </div>
        <div className='text-center w-130'>
          <h1 className='text-[#B6349A] text-7xl font-bold mb-4'>Page not found</h1>
          <p className='text-xl font-medium mb-4'>This page you are looking for is not aviablable. Try to search again or use the go home button below.</p>
          <NavLink to={'/'}>
            <button className='w-full bg-[#B6349A] text-white py-3 font-medium text-xl rounded-xl'>Go Home</button>
          </NavLink>
        </div>
      </section>
    </article>
  )
}

export default PageNotFound
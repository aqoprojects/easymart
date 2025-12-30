import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation()
  const FooterDenied = ['/account', '/login', '/register']
  const normalizedPath = location.pathname !== '/' && location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;

  return (

    <>
      { !location.pathname.includes(normalizedPath) &&
      <footer >
        <article className='w-full flex px-3 flex-wrap md:flex-nowrap md:justify-evenly  gap-5 pt-15'>
          <section>
            <img src="/xsLogo.png" alt="Logo" />
          </section>
          <section className="leading-9 min-w-20">
            <p className='font-semibold text-lg'>About</p>
            <ul className='text-gray-500'>
              <li>About us</li>
              <li>Our Branches</li>
              <li>Changelog</li>
            </ul>
          </section>
          <section className="leading-9 min-w-20">
            <p className='font-semibold text-lg'>Quick Links</p>
            <ul className='text-gray-500'>
              <li>FAQs</li>
              <li>Recipes</li>
              <li>Contact Us</li>
            </ul>
          </section>
          <section className="leading-9 min-w-20">
            <p className='font-semibold text-lg'>Help & Support</p>
            <ul className='text-gray-500'>
              <li>Terms of Privacy</li>
              <li>Privacy Policies</li>
              <li>Security</li>
            </ul>
          </section>
          <section className="leading-9 min-w-20">
            <p className='font-semibold text-lg'>Company</p>
            <ul className='text-gray-500'>
              <li>Blog</li>
              <li>COntact</li>
             
            </ul>
          </section>
          <section className="leading-9 min-w-20">
            <p className='font-semibold text-lg'>Social</p>
            <ul className='text-gray-500'>
              <li>FAcebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </section>
        </article>
        <p className='text-gray-500 mt-8 text-center'>All rights reserved. <span className='ml-3'>2025 AQOprojects https://github.com/aqoprojects/</span></p>
      </footer>}
    </>
  )
}

export default Footer
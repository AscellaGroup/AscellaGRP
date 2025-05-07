import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = ({ onShowForm, isScrolled }) => {
  return (
    <nav className = { `${isScrolled ? "bg-black" : "bg-transparent"} w-full max-container flexBetween padding-container px-6
    absolute z-30 py-5 shadow-md h-[70px]` }>
      <Link href="/">
        <Image
          src='/Ascella-logo.svg'
          alt="Ascella_logo"
          width={45}
          height={45}
        />
      </Link>

      {/* For PC and Tablet */}
      <div className="gap-10 lg:flex ">
        <img
          className='h-[10rem] w-[10rem] md:ml-32 md:h-[13rem] md:w-[13rem]'
          src='/Ascellagrp_logo.svg'
          alt="Ascella_logo"
        />
      </div>

      <div
        className="hidden md:flex items-center gap-3"
        onClick={onShowForm}>
        <p className='text-[#8A8A8A] montserrat hover:text-white cursor-pointer'>Ascella for startups</p>

        <button className='border-[1px] border-[#8A8A8A] p-1 px-[7px] py-[5px] rounded-[5px]'>
          <Image
            src='/Arrow.svg'
            alt="Ascella_logo"
            width={10}
            height={10}
          />
        </button>
      </div>

      {/* Mobile */}

      <div className='flex md:hidden border-[1px] border-[#8A8A8A] px-[8px] py-[6px] rounded-[5px] '>
        <button onClick={onShowForm}>
          <Image
            src='/Arrow.svg'
            alt="Ascella_logo"
            width={10}
            height={10}
          />
        </button>
      </div>

    </nav>
  )
}

export default Nav

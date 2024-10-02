import React from 'react'
import { navLinks, navIcons } from '../constants/constants'
import { Logo, Shards, Plus, PiPowerFill } from '../assets/assets'
import styles from '../style'

const Navbar = () => {
  return (
    <main className='top-0 text-white w-full fixed flex justify-between bg-gradient-to-r from-[#46352c] to-[#0c0e12]'>

    <section section className='flex items-center'>
      <div className={`${styles.divBorder} font-bold`}>
        <div className='relative group'>
          <a href="#" className="">Moeflow</a>
        </div>
          
        </div>
        <div className={`${styles.divBorder}`}>
          <img src={Logo} alt={Logo} className='w-6 animate-pulse' />
        </div>
      </section>
      
      <section className='flex items-center gap-x-6'>
        {navLinks.map((nav, index) => (
          <p key={index} className='text-white uppercase font-bold p-4'>
            {nav.title}
          </p>
        ))}
      </section>
      
      <section className='flex'>
        <div className={`${styles.divBorder} flex items-center animate-pulse  `}>
          <img src={Shards} alt={Shards} className='w-6' />
          <span className='block font-bold text-yellow-300'>530900</span>
        </div>

        <div className='flex items-center '>
          {navIcons.map((icon, index) => (
            <div className={`${styles.divBorder} `}>
              <icon.icon className={`text-xl text-gray-400`}/>
            </div>
          ))}
        </div>

        <div className='flex items-center'>
          <div className={`${styles.divBorder} bg-gradient-to-b from-yellow-950 to-yellow-800 transform -skew-x-12 h-full animate-pulse `}>
            <div className="transform skew-x-12 flex items-center">
              <img src={Plus} alt="Plus" className='w-6' />
            </div>
          </div>

          <div className={`bg-red-950 ${styles.divBorder} transform -skew-x-12 h-full`}>
            <div className="transform skew-x-12 flex items-center">
              <PiPowerFill className='text-2xl text-red-600' />
            </div>
          </div>
        </div>

      </section>

      

      
    </main>
  )
}

export default Navbar

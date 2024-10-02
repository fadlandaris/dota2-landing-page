import React from 'react'
import { Immortal, Profile, wraithKing, RiArrowDownSFill } from '../assets/assets'
import { matchStat } from '../constants/constants'

const Content = () => {
  return (
    <main className={`absolute top-14 text-white w-full h-full grid grid-cols-[3fr_6fr_2fr] gap-x-20 p-8`}>

      <section className='bg-primary bg-opacity-90 shadow-lg'>
        <div className=' w-full '>
          <div className='flex justify-between items-center h-20 p-2 bg-gradient-to-r from-[#3f3f3f] to-[#181d20] '>
            <div className='flex items-center'>
              <div className='w-14 h-14'>
                <img src={Profile} alt="Immortal-rank" className='w-full h-full object-cover' />
              </div>
              <div className='ml-4'>
                <h2 className='font-bold'>Moefaris</h2>
                <span className='text-[10px] text-green-700 font-bold'>Main Menu</span>
              </div>
          </div>
          <img src={Immortal} alt="Immortal-rank" className='w-[90px] h-[90px]' />
        </div>
        <div className=' border-blue-200 h-400 w-full bg-no-repeat h-[200px] relative '>
          <img src={wraithKing} alt={wraithKing} className='w-full h-full object-top' />
            <div className='absolute bottom-2 flex justify-between w-full items-center px-2'>
              {matchStat.map((match, index) => (
                <div className='text-center px-7 py-2 bg-[#000814] bg-opacity-80'>
                  <span className='text-[10px] uppercase'>{match.title}</span>
                  <h2 className='font-bold text-xl'>{match.amount}</h2>
                </div>
              ))}
          </div>
        </div>
        </div>

        <div className='p-2 overflow-auto border-2 h-full'>
         test
        </div>
      </section>
    
      <section className=''>
        test
      </section>
    
      <section className='border-2'>
        test
      </section>
    </main>
  
  )
}

export default Content
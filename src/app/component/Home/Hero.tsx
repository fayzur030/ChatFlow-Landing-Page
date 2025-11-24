import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/hero.png'
import { PlayIcon } from '@heroicons/react/16/solid'

const GlobalPayment = () => {
  return (
    <div className='grid grid-cols-12 gap-4 mt-10'>
      <section className='col-span-12 xl:col-span-10 xl:col-start-2 flex flex-col lg:flex-row items-center'>
        {/* Left Text Section */}
        <div className='flex-1 flex flex-col justify-center'>
          <h1 className='text-3xl md:text-[52px] font-semibold text-[#FFFFFF] text-center md:text-left leading-snug md:leading-[1.2]'>
            Improve your customer <br className='hidden md:block' /> experience
            with real- <br className='hidden md:block' /> time assistance
          </h1>

          <p className='text-lg md:text-lg text-justify px-5 md:px-0 font-normal text-[#FFFFFF99] mt-3'>
            Our live chat software helps you connect with your customers
            instantly, <br className='hidden md:block' /> boosting sales and
            improving customer satisfaction. Try it out today and{' '}
            <br className='hidden md:block' /> see the difference it can make
            for your business.
          </p>

          <div className='mt-8 flex gap-4 px-5 md:px-0'>
            <button className='bg-black text-[#ffffff] px-6 py-2 rounded-3xl hover:bg-gray-900 cursor-pointer'>
              Get Started
            </button>
            <button className='bg-[#FFFFFF0D] text-[#ffffff] px-6 py-2 rounded-3xl flex items-center gap-2  cursor-pointer'>
              <PlayIcon className='w-5 h-5' />
              See in Action
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className='flex-1 flex justify-center items-center'>
          <Image
            src={heroImage}
            alt='heroImage'
            className='h-auto object-contain'
            priority
          />
        </div>
      </section>
    </div>
  )
}

export default GlobalPayment

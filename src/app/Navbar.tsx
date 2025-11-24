'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='grid grid-cols-12'>
      <nav className=' col-span-12 xl:col-span-10 xl:col-start-2 px-4 md:px-8 py-4 relative'>
        <div className='flex items-center justify-between'>
          {/* Logo + Desktop Links */}
          <div className='flex items-center gap-16'>
            {/* Logo */}
            <p className='font-bold text-lg text-[#FFFFFF]'>ChatFlow</p>

            {/* Desktop Links */}
            <div className='hidden sm:flex gap-6'>
              <Link href='#' className='text-[#FFFFFF] text-base  '>
                Home
              </Link>
              <Link
                href='#'
                className='text-[#FFFFFFCC] text-base font-semibold'
              >
                Pricing
              </Link>
              <Link href='#' className='text-[#FFFFFFCC] text-base '>
                Support
              </Link>
              <Link href='#' className='text-[#FFFFFFCC] text-base '>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop Login/Register */}
          <div className='hidden sm:flex md:justify-end gap-8'>
            <button className='text-[#FFFFFF] text-base '>Login</button>
            <button className='text-[#0D082C] bg-[#FFFFFF8C] px-4 py-2 rounded font-bold text-base'>
              Register
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className='sm:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='sm:hidden mt-2 p-4 bg-white shadow-md flex flex-col gap-2'>
            <Link href='#' className='py-2 px-4 hover:bg-gray-100 rounded'>
              Home
            </Link>
            <Link href='#' className='py-2 px-4 bg-gray-200 rounded font-bold'>
              Pricing
            </Link>
            <Link href='#' className='py-2 px-4 hover:bg-gray-100 rounded'>
              Support
            </Link>
            <Link href='#' className='py-2 px-4 hover:bg-gray-100 rounded'>
              Contact Us
            </Link>
            <div className='border-t mt-2 pt-2 flex flex-col gap-2'>
              <button className='text-gray-700 text-left'>Login</button>
              <button className='bg-[#0D082C] text-white px-4 py-2 rounded font-bold'>
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </section>
  )
}

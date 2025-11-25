'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='grid grid-cols-12'>
      <nav className='col-span-12 xl:col-span-10 xl:col-start-2 px-4 md:px-8 py-4 relative '>
        <div className='flex items-center justify-between'>
          {/* Logo + Desktop Links */}
          <div className='flex items-center gap-12'>
            <p className='font-bold text-lg text-white'>ChatFlow</p>

            {/* Desktop Links */}
            <div className='hidden lg:flex gap-6'>
              <Link
                href='#'
                className='text-white text-base hover:text-[#4635F3] transition'
              >
                Home
              </Link>
              <Link
                href='#'
                className='text-white/80 text-base font-semibold hover:text-[#4635F3] transition'
              >
                Pricing
              </Link>
              <Link
                href='#'
                className='text-white/80 text-base hover:text-[#4635F3] transition'
              >
                Support
              </Link>
              <Link
                href='#'
                className='text-white/80 text-base hover:text-[#4635F3] transition'
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop Login/Register */}
          <div className='hidden lg:flex gap-6'>
            <button className='text-white text-base hover:text-[#4635F3] transition'>
              Login
            </button>
            <button className='text-[#0D082C] bg-white/80 px-4 py-2 rounded font-bold text-base hover:bg-white transition'>
              Register
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className='lg:hidden z-50' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} color='white' />
            ) : (
              <Menu size={28} color='white' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden absolute top-full left-0 w-full mt-2 navbar rounded-b-xl shadow-lg flex flex-col gap-3 px-4 py-5 z-40'
            >
              <Link
                href='#'
                className='py-3 px-3 text-white rounded transition'
              >
                Home
              </Link>
              <Link
                href='#'
                className='py-3 px-3 rounded  text-white font-semibold transition'
              >
                Pricing
              </Link>
              <Link
                href='#'
                className='py-3 px-3  text-white rounded transition'
              >
                Support
              </Link>
              <Link
                href='#'
                className='py-3 px-3  text-white rounded transition'
              >
                Contact Us
              </Link>

              <div className='border-t mt-3 pt-3 flex flex-col gap-3 px-3'>
                <button className=' text-white text-left hover:text-[#4635F3] transition'>
                  Login
                </button>
                <button className='bg-[#0D082C] text-white px-4 py-2 rounded font-bold hover:bg-[#4635F3] transition'>
                  Register
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>
  )
}

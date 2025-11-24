import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Blackbtn = ({ children }: Props) => {
  return (
    <Link href='' className='bg-[#0D082C] text-[#FFFFFF] rounded-3xl py-4 px-6'>
      {children}
    </Link>
  )
}

export default Blackbtn

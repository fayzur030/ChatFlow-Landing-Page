import Image from 'next/image'
import image from '../../assets/screenshort.png'

export default function Experience() {
  return (
    <section className='bg-[#F5AC76] grid grid-cols-12 '>
      <div className='col-span-12 xl:col-span-10 xl:col-start-2 py-20 grid md:grid-cols-2 items-center lg:mx-6 xl:mx-0'>
        <div>
          <h1 className='text-3xl md:text-[38px] font-bold leading-snug text-[#0D082C px-4 md:px-0 text-center md:text-left'>
            Experience the Power of Our <br className='hidden md:block lg:hidden' /> Live
            Chat
          </h1>
          <p className='mt-4 text-[#0D082C99] text-center md:text-left px-4 md:px-0 '>
            See for yourself how our live chat can help you connect with your
            <br className='hidden md:block' />
            customers and improve their experience on your website. Check out
            <br className='hidden md:block' /> a screenshot of our live chat in
            action.
          </p>
          <div className='px-4 md:px-0'>
            <button className='bg-black text-white px-7 py-4 mt-8 rounded-3xl hover:bg-gray-900 '>
              Book a Demo
            </button>
          </div>

          <div className='mt-10 space-y-6 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0'>
            <div>
              <h2 className='text-[#0D082C] md:leading-[30px] text-lg font-semibold'>
                Improving Customer Support
              </h2>
              <p className='mt-2 text-[#0D082C99] md:text-sm text-base'>
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>

            <div>
              <h2 className='text-[#0D082C] md:leading-[30px] text-lg font-semibold'>
                Boosting Sales
              </h2>
              <p className='mt-2 text-[#0D082C99] md:text-sm text-base'>
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center md:justify-end'>
          <Image
            src={image}
            alt='Live Chat Screenshot'
            className='w-full max-w-xl object-contain'
          />
        </div>
      </div>
    </section>
  )
}

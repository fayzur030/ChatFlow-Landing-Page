import { Check } from 'lucide-react'

const Affordable = () => {
  const cardData = [
    {
      id: 1,
      topText: 'STARTER',
      Price: '$9.99/month',
      list: [
        'Real-time chat',
        'Customization options',
        'File sharing',
        'Visitor tracking',
      ],
      endText: 'Choose',
      color: '#4635F3',
    },
    {
      id: 2,
      topText: 'PROFESSIONAL',
      Price: '$29.99/month',
      list: [
        'All features in the "Starter" plan',
        'Mobile app',
        'Integration with other tools',
        'Multilingual support',
      ],
      endText: 'Choose',
      color: '#F5AC76',
    },
    {
      id: 3,
      topText: 'ENTERPRISE',
      Price: '$99.99/month',
      list: [
        'All features in the "Professional" plan',
        'Dedicated account manager',
        'Premium support',
        'Custom integration options',
      ],
      endText: 'Choose',
      color: '#FF5391',
    },
  ]

  return (
    <section className='grid grid-cols-12 mt-16 md:mt-20 '>
      <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
        {/* Price */}
        <div>
          <h1 className='text-3xl text-center md:text-[38px] font-bold text-[#0D082C] mb-4 px-4 md:px-0'>
            Affordable Plans for Any Business
          </h1>
          <p className='text-[16px] text-[#0D082C99] text-justify md:text-center px-4 md:px-0'>
            Our pricing plans are designed to be affordable for businesses of
            all sizes. From our <br className='hidden md:block' />
            &quot;Starter&quot; plan to our &quot;Enterprise&quot; option, we
            have a plan that will fit your budget{' '}
            <br className='hidden md:block' />
            and meet your live chat needs.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-0'>
          {cardData.map((item) => (
            <div
              key={item.id}
              className='border border-[#E4E4E4] rounded-2xl shadow-xl hover:shadow-2xl transition duration-300'
            >
              {/* Top Text */}
              <p
                className='text-sm text-white px-3 text-center py-4 rounded-lg w-full font-bold'
                style={{ backgroundColor: item.color }}
              >
                {item.topText}
              </p>

              {/* Price */}
              <h1 className='text-3xl font-bold my-3 text-[#0D082C] text-center pt-7'>
                {item.Price}
              </h1>

              {/* Checkbox List */}
              <ul className='space-y-3 mb-6 px-6 mt-8'>
                {item.list.map((l, i) => (
                  <li key={i} className='flex items-center gap-3 '>
                    <div
                      className='w-5 h-5 flex items-center justify-center rounded-full border-2'
                      style={{ borderColor: item.color }}
                    >
                      <Check size={12} color={item.color} />
                    </div>

                    <span className='text-[#0D082C99]'>{l}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className='px-6 pb-8'>
                {' '}
                <button
                  className='w-full py-2 text-white rounded-xl hover:opacity-90 transition '
                  style={{ backgroundColor: item.color }}
                >
                  {item.endText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Affordable

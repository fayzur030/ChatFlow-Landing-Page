import Image from 'next/image'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
export default function Features() {
  const data = [
    {
      title: 'Real-time chat',
      text: 'Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their customers, improving their experience on the website.',
      icon: icon1,
    },
    {
      title: 'Customization options',
      text: "Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.",
      icon: icon2,
    },

    {
      title: 'Visitor tracking',
      text: 'Our live chat product includes visitor tracking capabilities, allowing users to see who is on their website and what pages they are viewing. This can help users understand the needs and interests of their visitors and provide more targeted support.',
      icon: icon3,
    },

    {
      title: 'Automated chat responses',
      text: 'Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to focus on more complex or specific issues.',
      icon: icon4,
    },

    {
      title: 'Mobile app',
      text: 'Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and provide support no matter where they are.',
      icon: icon5,
    },

    {
      title: 'Integration with tools',
      text: 'Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer interactions and data from a single platform.',
      icon: icon6,
    },
  ]

  return (
    <section className='grid grid-cols-12 py-20 bg-gray-5'>
      <div className='col-span-12 xl:col-span-10 xl:col-start-2  text-center'>
        <h1 className='text-3xl text-center md:text-[38px] font-bold text-[#0D082C] mb-4 px-4 md:px-0'>
          Powerful Features to Enhance Your <br className='hidden md:block' />
          Live Chat Experience
        </h1>
        <p className='text-[16px] text-[#0D082C99] px-4 md:px-0'>
          Our live chat product is packed with features to help you connect with
          your <br className='hidden md:block' /> customers and provide the
          support they need.
        </p>

        <div className='grid md:grid-cols-3 gap-0 mt-14'>
          {data.map((item, i) => (
            <div key={i} className='p-8 rounded-lg'>
              <div className='mb-5'>
                <Image src={item.icon} alt={item.title} className='w-14 h-14' />
              </div>
              <h3 className='text-[20px] text-[#0D082C] font-bold text-left'>
                {item.title}
              </h3>
              <p className='mt-2 text-[16px] text-[#0D082C99] text-justify md:text-justify'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

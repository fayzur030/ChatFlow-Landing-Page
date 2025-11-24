import Affordable from './component/Home/Affordable'
import Experience from './component/Home/Experience'
import Features from './component/Home/Features'
import Footer from './component/Home/Footer'
import Hero from './component/Home/Hero'
import NavBar from './Navbar'

export default function Home() {
  return (
    <>
      <div className='navbar md:h-[777px] h-auto'>
        <NavBar />
        <Hero />
      </div>
      <Features />
      <Experience />
      <Affordable />
      <Footer />
    </>
  )
}

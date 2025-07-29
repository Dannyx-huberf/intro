import Navbar from './NavBar.jsx';
import Banner from '../components/Banner';
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';
export default function Layout(){
   const divstyles = {
    fontSize: '11px', 
    textAlign: 'center', 
  }
  const linkStyles = {
    color: 'hsl(228, 45%, 44%)',
  }
  return(
    <>
    <div className='lg: h-screen'>
    <Navbar />
    <div className="lg:flex lg:flex-row-reverse lg:mx-30 lg:my-15 lg:gap-20">
  <Banner />
  <div className="flex flex-col justify-between lg:max-w-[600px]">
    <Body />
    <Footer />
  </div>
</div>
 <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" style={divstyles}>Frontend Mentor</a>. 
    Coded by <a href="https://github.io/Dannyx-huberf" style={linkStyles}>Your Name Here</a>.
  </div>
    </div>
    </>
  )
}
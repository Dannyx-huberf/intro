import bannerImg from '../assets/images/image-hero-mobile.png';
import bannerImgDesktop from '../assets/images/image-hero-desktop.png'; 

export default function Banner(){
  return (
    <>
    <div className='mt-3'>
      <picture>
        <source media="(min-width: 1008px)" srcSet={bannerImgDesktop} />
        <img src={bannerImg} alt="Banner Image" className="w-full h-auto" />
      </picture>
      
    </div>
    </>
  )
}
import audioPhile from '../assets/images/client-audiophile.svg';
import databiz from '../assets/images/client-databiz.svg';
import maker from '../assets/images/client-maker.svg';
import meet from '../assets/images/client-meet.svg';

export default function Footer(){
  const images = [
    { src: databiz, alt: 'Databiz' },
    { src: audioPhile, alt: 'audioPhile' },
    { src: meet, alt: 'Meet' },
    { src: maker, alt: 'Maker' }
  ];
  return(
    <>
    <div className='flex justify-between gap-1 px-4 mb-9'>
      {images.map((image, index) => (
        <img 
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-[60px] h-[25px]"></img>
      ))}
    </div>
    </>
  )
}
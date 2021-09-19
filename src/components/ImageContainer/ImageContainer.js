import React, {useRef, useEffect} from 'react';
import protest1 from '../../images/protest1.jpg'
import protest2 from '../../images/protest2.jpg'
import protest3 from '../../images/protest3.jpg'
import tattooArtist from '../../images/tattooArtist.jpg'
import { gsap, Power3 } from "gsap";
import './ImageContainer.css'

const ImageContainer = () => {
  let mask = useRef(null)
  let mask2 = useRef(null)
  let mask3 = useRef(null)
  let mask4 = useRef(null)


  useEffect(() => {
    gsap.to([mask, mask2, mask3, mask4],10, 
      { opacity: 0, xPercent:100,delay: 1, left:'100%',
        ease: Power3.easeOut, stagger: 1 });
  })

  return (
    <article className='article'>
      <div className='container'>
          <div className='img-container'>
              <div ref={el => mask = el} id='three' className='mask'>
              </div>
              <img className='protest-photo1' alt='protest1' src={protest1} />  
          </div>
        </div>
        <div className='container'>
          <div className='img-container'>
              <div ref={el => mask2 = el} id='three' className='mask'>
              </div>
              <img className='protest-photo2' alt='protest1' src={protest2} />  
          </div>
        </div>
        <div className='container'>
          <div className='img-container'>
              <div ref={el => mask3 = el} id='three' className='mask'>
              </div>
              <img className='protest-photo3' alt='protest1' src={protest3} />  
          </div>
        </div>
        <div className='container'>
          <div className='img-container'>
              <div ref={el => mask4 = el} id='three' className='mask'>
              </div>
              <img className='tattoo-artist' alt='tattooArtist' src={tattooArtist} />  
          </div>
        </div>
      </article>
  )
}

export default ImageContainer;
import React, {useRef, useEffect} from 'react';
import protest1 from '../../images/protest1.jpg'
import protest2 from '../../images/protest2.jpg'
import protest3 from '../../images/protest3.jpg'
import tattooArtist from '../../images/tattooArtist.jpg'
import { gsap, Power3 } from "gsap";
import './ImageContainer.css';

const ImageContainer = () => {
  // let revealRefs = useRef([])s
  // revealRefs.current = []

  let mask = useRef(null)
  let mask2 = useRef(null)
  let mask3 = useRef(null)
  let mask4 = useRef(null)

//   const images = [
//     {
//       src: protest1,
//       title: 'protestors infront Garage',
//       // subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget sit amet. Ultrices sagittis orci a scelerisque. Consectetur lorem donec massa sapien. Nam at lectus urna duis convallis convallis tellus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'
//       subtitle: 'subtitle'
//     },
//     {
//       src: protest2,
//       title: 'protestors on street',
//       // subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget sit amet. Ultrices sagittis orci a scelerisque. Consectetur lorem donec massa sapien. Nam at lectus urna duis convallis convallis tellus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'
//       subtitle: 'subtitle'
//     },
//     {
//       src: protest3,
//       title: 'protestors at circle',
//       // subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget sit amet. Ultrices sagittis orci a scelerisque. Consectetur lorem donec massa sapien. Nam at lectus urna duis convallis convallis tellus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'
//       subtitle: 'subtitle'
//     },
//     {
//       src: tattooArtist,
//       title: 'tattoo people',
//       // subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget sit amet. Ultrices sagittis orci a scelerisque. Consectetur lorem donec massa sapien. Nam at lectus urna duis convallis convallis tellus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'
//       subtitle: 'subtitle'
//     },
// ]

  useEffect(() => {
    // images.forEach((el => {
      // }))

      gsap.to(mask,10, 
        { opacity: 0, xPercent:100,delay: 1, left:'100%',
          ease: Power3.easeOut, stagger: 1 });
      gsap.to(mask2,10, 
        { opacity: 0, xPercent:100,delay: 1, left:'100%',
          ease: Power3.easeOut, stagger: 1 });
      gsap.to(mask3,10, 
        { opacity: 0, xPercent:100,delay: 1, left:'100%',
          ease: Power3.easeOut, stagger: 1 });
      gsap.to(mask4,10, 
        { opacity: 0, xPercent:100,delay: 1, left:'100%',
          ease: Power3.easeOut, stagger: 1 });
  }, [])

  // const addToRefs = (el) => {
  //   if(el && !revealRefs.current.includes(el)) {
  //     revealRefs.current.push(el)
  //     console.log(revealRefs.current);//array of divs by ref
  //   }
  // }
  //effect is only working on last index of array. 
  //why is  only working on last effect?

  return (
    <article className='article'>
      {/* {
        images.map(({src, title, subtitle}, index) => {
          return (
            <div ref={addToRefs} key={index} className='container'>
               <div className='img-container'>
                 <div ref={el => mask = el} id={index} className='mask'></div>
                 <img className={`${src}-photo${index}`} alt='protest1' src={src} /> 
                 <h2>{title}</h2>
                 <p>{subtitle}</p>
               </div>
            </div>
          )
        })
      } */}
      {/* <div ref={addToRefs} className='container'>
      // images.map((image)) => {
      //   return (
        //   )
        // }
        <div className='img-container'>
        <div ref={el => mask = el} id='three' className='mask'></div>
        <img className='protest-photo1' alt='protest1' src={protest1} /> 
        <h2>{images[0].title}</h2>
        <p>{images[0].subtitle}</p> 
        </div>
      </div> */}
           <div className='container'>
             <div className='img-container'>
               <div ref={el => mask = el} id='three' className='mask'></div>
               <img className='protest-photo1' alt='protest1' src={protest1} />  
             </div>
           </div>
        <div className='container'>
          <div className='img-container'>
              <div ref={el => mask2 = el} id='three' className='mask'></div>
              <img className='protest-photo2' alt='protest1' src={protest2} />  
          </div>
        </div>
        <div className='container'>
          <div className='img-container'>
              <div ref={el => mask3 = el} id='three' className='mask'></div>
              <img className='protest-photo3' alt='protest1' src={protest3} />  
          </div>
        </div>
        <div className='container'>
          <div className='img-container'>
              <div ref={el => mask4 = el} id='three' className='mask'></div>
              <img className='tattoo-artist' alt='tattooArtist' src={tattooArtist} />  
          </div>
        </div>
      </article>
  )
}

export default ImageContainer;
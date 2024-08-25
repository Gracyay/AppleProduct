import React, {useEffect, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {heroVideo, smallHeroVideo} from '../utils';

const Hero = () => {
  const[videoSrc, setvideoSrc]= useState
               (window.innerWidth<760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)
    } else{
      setvideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    handleVideoSrcSet(); // Set the video source on mount
    return() => {
      window.removeEventListener('resize',handleVideoSrcSet );
    };
  },[]);

  useGSAP(()=> {
      gsap.to( '#hero', {opacity:1, delay:.5 })
      gsap.to( '#cta', {opacity:1, y:-50, delay:1.25})
  },[])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
       <p id="hero" className="hero-title">iPhone 15 Pro</p>
       <div className="md:w-10/12 w-9/12" //medium devices ke lie 10/12 i.e. almost 83%
                                          //and normal devicees ke lie 9/12 i.e. 75% 
        >
       <video className="pointer-events-none" //so no body can click it or mess with it
       autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type="video/mp4"/>
       </video>
      </div>
      </div>
      
      <div 
      id="cta"
      className="flex flex-col items-center opacity-0 translate y-20">
       <a href="#highlights" className="btn">Buy</a>
       <p  className="font-normal text-xl">
        From From ₹20800.00/mo. or ₹129800.00‡</p>
      </div>
    </section>
  )
}

export default Hero
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'

import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {  
    const videoRef = useRef()
    const videoTimelineRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767})
     
    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})
        heroSplit.words.forEach((word) => word.classList.add('text-gradient'))
         
        //Start FROM then move to current location in DOM
        //Start FROM current location and move TO Location in DOom and stay there
        //Start at current location and move TO location in Dom
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.04

        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            delay: 1,
            yPercent: 100,
            duration: 0.8,
            ease:  'expo.inOut',
            stagger: 0.04
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.right-leaf', { y:400 }, 0)
        .to('.left-leaf', { y:-300}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%'
        const endValue = isMobile ? '120% top' : 'bottom top'

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, { 
                currentTime: videoRef.current.duration
            })
        }
    }, [])

   
  return (
    <>
    <section id='hero' className='noisy '>
        <h1 className='title mb-5'>Mojito</h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crisp. Classic.</p>
                    <p className='subtitle'>
                        Sip the Spirit <br /> of Summer 
                    </p>
                </div>
                <div className='view-cocktails'>
                    <p className='subtitle'>
                        Every cocktail on our menu is a blend of premium ingredients, creative flair,
                         and timeless recipes - designed to delight your senses
                    </p>
                    <a href="#cocktails">View Cocktails</a>
                </div>
            </div>
        </div>
    </section>
    <div className='video absolute inset-0'>
        <video src="videos/input.mp4"
        ref={videoRef}
        muted
        playsInline
        preload='auto' 
        />
    </div>
    </>
)
}

export default Hero
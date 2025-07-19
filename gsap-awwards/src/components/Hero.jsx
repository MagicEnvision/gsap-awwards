import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'

import gsap from 'gsap'

const Hero = () => {
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
    </>
)
}

export default Hero
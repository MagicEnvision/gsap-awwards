import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const NavBar = () => {
    useGSAP(()=> {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'top top'
                
            }
        })

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backdropFilter: 'blur(10px)',
            duration: 0.5,
            ease: 'power1.inOut'
        })
    }, [])

  return (
    <nav>
        <div>
            <a href="#home" className='flex flex-center gap-2'>
                <img src='/images/logo.png' alt='logo'/>
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}                
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
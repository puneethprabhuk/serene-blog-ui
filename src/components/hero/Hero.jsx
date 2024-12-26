import React from 'react';
import './hero.scss';

const Hero = () => {
    return (
        <section className='hero-section container'>
            <p className='welcome-text'>Welcome to serene</p>
            <h2 className='tag-line'>
                Bringing together <span>thoughts</span>, <span>opinions</span>, and <span>stories</span> that resonate with curious minds around the world.
            </h2>
        </section>
    )
}

export default Hero
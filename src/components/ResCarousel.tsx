import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ResCarousel() {
    return (
        <Carousel autoPlay interval={5000} infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
            <div className='border-2 border-accent rounded-xl overflow-hidden'>
                <Image src="/dalle-1.png" alt="Legend 1" width={250} height={250} />
            </div>
            <div className='border-2 border-accent rounded-xl overflow-hidden '>
                <Image src="/dalle-2.png" alt="Legend 2" width={250} height={250} />
            </div>
            <div className='border-2 border-accent rounded-xl overflow-hidden'>
                <Image src="/dalle-3.png" alt="Legend 2" width={250} height={250} />
            </div>
            <div className='border-2 border-accent rounded-xl overflow-hidden'>
                <Image src="/dalle-4.png" alt="Legend 2" width={250} height={250} />
            </div>
        </Carousel>
    );
    
}

export default ResCarousel
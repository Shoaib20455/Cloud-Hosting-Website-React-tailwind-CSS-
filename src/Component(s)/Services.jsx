import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faRocket, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
FontAwesomeIcon
const Services = () => {
    return (
        <section className='font-sans py-5'>
            <div className='  max-w-screen-2xl md:py-[80px]  mx-auto'>
                <h1 className='text-4xl text-center'>Our Services</h1>
            </div>
            <div className='max-w-6xl lg:mx-auto py-[30px] grid lg:grid-cols-3
         flex-wrap sm:mx-6 gap-6'>
                <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-500'>
                    <FontAwesomeIcon className=' text-2xl text-blue-500 group-hover:text-white duration-500' icon={faSignal} />

                    <h3 className='text-xl py-2'>Grow as You Go</h3>
                    <p>Our cloud website hosting services include all the resources you need to scale. Even if you start small, there’s always room for growth.
                    </p>
                </div>
                <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-500'>
                    <FontAwesomeIcon className=' text-2xl text-blue-500 group-hover:text-white duration-500' icon={faRocket} />

                    <h3 className='text-xl py-2'>4x More Speed</h3>
                    <p>Boost your website loading times and enhance user experience. With our high-speed CPUs, large RAM capacity, and strategic online cloud server locations, you can easily optimise your website’s performance.
                    </p>
                </div>
                <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-500'>
                    <FontAwesomeIcon className=' text-2xl text-blue-500 group-hover:text-white duration-500' icon={faCircleInfo} />

                    <h3 className='text-xl py-2'>Managed Hosting Services</h3>
                    <p>We’re here for you: receive expert support 24/7 and guidance every step of the way. Leave all technical issues to us and focus on more important aspects of your project.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
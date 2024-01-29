import React from 'react'

const Hero = () => {
  return (
    <section className='py-5 font-sans'>
      <div className=' container flex flex-wrap items-center justify-center mx-auto md:px-12 md:flex-row'>
        <div className=' mb-14 lg:mb-0 lg:w-1/2'>
          <h1 className=' max-w-xl text-[2.9rem] leading-none text-gray-900  text-center lg:text-5xl lg:text-left lg:leading-tight mb-5'>Unleash Seamless Development in the Cloud</h1>
          <p className=' max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md'>Elevate your projects with our cutting-edge cloud source provider. Effortlessly manage and collaborate on your source code, ensuring a streamlined and efficient development process.</p>
          <div className='flex justify-center mt-14 lg:justify-start'>
          <button type="button" className=' text-white bg-blue-600 font-medium rounded-lg px-5 py-4 text-center
           hover:bg-blue-700 hover:drop-shadow-md transition duration-300 ease-in-out'>Get Started</button>
           <button type="button" className=' text-blue-600 ml-4 bg-gray-200 font-medium rounded-lg px-5 py-4 text-center
           hover:bg-blue-600 hover:text-white hover:drop-shadow-md transition duration-300 ease-in-out'>Learn More</button>
          </div>
        </div>
        <div className=' lg:w-1/2'>
          <img className='ml-auto' src="/src/assets/heroImage.png" alt="hero-Image" />
        </div>
      </div>

    </section>
  )
}

export default Hero
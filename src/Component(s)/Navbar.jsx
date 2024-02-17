import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-gray-800 text-white'>

            <div className='flex container max-w-6xl mx-auto justify-between items-center'>
                <div>
                    <a href="/">
                        <img src="/src/assets/logo.png" alt="" className=' h-24 w-32 scale-110 object-contain' />
                    </a>
                </div>
                <div className=''>
                    {/* space-x-0.5 */}
                    <ul className='flex'>
                        <li className='p-2 hover:text-gray-300 transition duration-300 ease-in-out'>
                            <a href="">

                                About us
                            </a>
                        </li>
                        <li className='p-2 hover:text-gray-300 transition duration-300 ease-in-out'>
                            <a href="">

                                Contact us
                            </a>
                        </li>
                        <li className='p-2 hover:text-gray-300 transition duration-300 ease-in-out'>
                            <a href="">

                                Our Services
                            </a>
                        </li>
                        <li className=' m-1'>
                            <a href="" className=' p-2 border border-white hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out'>
                            Log In
                            </a>
                        </li>
                        <li className=' m-1'>
                            <a href="" className=' text-gray-800 p-2 border border-white bg-white hover:bg-gray-800 hover:text-white transition duration-300 ease-out'>

                                Sign Up
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
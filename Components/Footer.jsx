import React from 'react'
import Branding from './Nav/Branding'
import Link from 'next/link'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='pt-20 pb-5 container mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-600 pb-10">
                <div>
                    <div data-wow-delay=".2s" className='wow animate__animated animate__fadeInUp'>
                        <Branding />
                    </div>
                    <p data-wow-delay=".4s" className='wow animate__animated mt-5 mx-auto animate__fadeInUp mb-3 dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-xl font-semibold'>
                        “Let’s Make Some CREATIVE IDEAS Together” is the mantra that we passionately follow at BrainsCamp. To attain our objective, we will formulate proficient as well as result-oriented IT, web, branding and digital marketing solutions.
                    </p>
                    <div data-wow-delay=".4s" className='wow animate__animated animate__fadeInUp flex items-center'>
                        <a href="#" className='hover:text-secondary normal-transition text-white '>
                            <i className="bi bi-facebook text-3xl mr-6"></i>
                        </a>
                        <a href="#" className='hover:text-secondary normal-transition text-white '>
                            <i className="bi bi-twitter text-3xl mr-6"></i>
                        </a>
                        <a href="#" className='hover:text-secondary normal-transition text-white '>
                            <i className="bi bi-instagram text-3xl mr-6"></i>
                        </a>
                        <a href="#" className='hover:text-secondary normal-transition text-white '>
                            <i className="bi bi-linkedin text-3xl mr-6"></i>
                        </a>
                    </div>
                </div>
                <div className='w-full flex justify-start lg:justify-end mt-10 lg:mt-0'>
                    <div>
                        <h1 className='text-2xl mb-5 lg:text-3xl 2xl:text-4xl font-bold dark:text-secondary text-white normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay=".6s">
                            Services Provided
                        </h1>
                        <ul className='list-none'>
                            <li data-wow-delay=".8s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>SEO Services</span>
                                    </a>
                                </Link>
                            </li>
                            <li data-wow-delay="1s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>Social Media Marketing</span>
                                    </a>
                                </Link>
                            </li>
                            <li data-wow-delay="1s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>Graphic Design</span>
                                    </a>
                                </Link>
                            </li>
                            <li data-wow-delay="1s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>Web app development</span>
                                    </a>
                                </Link>
                            </li>
                            <li data-wow-delay="1s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>E-commerce development</span>
                                    </a>
                                </Link>
                            </li>
                            <li data-wow-delay="1s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>Native mobile app development</span>
                                    </a>
                                </Link>
                            </li>
                            <li data-wow-delay="1s" className='wow animate__animated animate__fadeInUp'>
                                <Link href="/">
                                    <a className='flex items-center text-gray-500 hover:text-secondary dark:hover:text-white text-xl mb-2 font-saira font-semibold hover:pl-3 pr-5 hover:pr-2 normal-transition ml-0'>
                                        <i className="bi bi-caret-right-fill text-xs mr-3"></i>
                                        <span>Cross platform mobile app development</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col justify-between items-center pt-5'>
                <p className=' text-gray-500 text-lg font-ubuntu'>© {new Date().getFullYear()} All Rights Reserved by
                    <span className='text-secondary text-xl font-bold ml-2 dark:text-white normal-transition'>BrainsCamp</span>
                </p>
                <i onClick={scrollToTop} className="bi bi-arrow-up-circle-fill animate-bounce cursor-pointer text-3xl text-white hover:text-secondary normal-transition"></i>
            </div>
        </div>
    )
}

export default Footer
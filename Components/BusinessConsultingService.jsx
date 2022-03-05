import React from 'react'
import Image from 'next/image'

const BusinessConsultingService = () => {
    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-2xl mb-3 lg:mb-20 lg:text-3xl 2xl:text-4xl font-bold text-center dark:text-secondary text-primary normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay=".2s">
                We Offer a 360 Degree Business Consulting Services!
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div>
                    <h1 data-wow-delay=".4s" className='text-primary wow animate__animated animate__fadeInRight font-ubuntu normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>
                        We have specialization in all web-based services. We are one-stop-shop for all the services needed for an impressionable online presence.
                    </h1>
                    <ul className='mt-5 ml-10'>
                        <li className='flex my-3 items-center '>
                            <span data-wow-delay="2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition bg-purple-300 dark:bg-darkLight'>
                                <span className="material-icons text-xl dark:group-hover:text-secondary text-primary dark:text-green-500 normal-transition">check_circle</span>
                            </span>
                            <p data-wow-delay="1s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                WEB DESIGN / DEVELOPMENT
                            </p>
                        </li>
                        <li className='flex my-3 items-center'>
                            <span data-wow-delay="2.4s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition bg-purple-300 dark:bg-darkLight'>
                                <span className="material-icons text-xl dark:group-hover:text-secondary text-primary dark:text-green-500 normal-transition">check_circle</span>
                            </span>
                            <p data-wow-delay="1.2s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                GRAPHIC DESIGN
                            </p>
                        </li>
                        <li className='flex my-3 items-center'>
                            <span data-wow-delay="2.8s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition bg-purple-300 dark:bg-darkLight'>
                                <span className="material-icons text-xl dark:group-hover:text-secondary text-primary dark:text-green-500 normal-transition">check_circle</span>
                            </span>
                            <p data-wow-delay="1.4s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                SEARCH ENGINE OPTIMIZATION
                            </p>
                        </li>
                        <li className='flex my-3 items-center '>
                            <span data-wow-delay="3.2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition bg-purple-300 dark:bg-darkLight'>
                                <span className="material-icons text-xl dark:group-hover:text-secondary text-primary dark:text-green-500 normal-transition">check_circle</span>
                            </span>
                            <p data-wow-delay="1.6s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                SOCIAL MEDIA OPTIMIZATION
                            </p>
                        </li>
                    </ul>
                </div>

                <div>
                    <Image data-wow-delay=".6s" className='wow animate__animated animate__fadeInRight' src="/businessService.png" height={497} width={570} layout="intrinsic" alt="business-service" />
                </div>
            </div>
        </div>
    )
}

export default BusinessConsultingService;
import React from 'react'

const Testimonial = () => {
    return (
        <div className='py-20 container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='relative text-center'>
                    <h1 data-wow-delay=".2s" className='wow animate__animated animate__fadeInUp text-7xl lg:text-9xl font-saira font-bold dark:text-secondary dark:opacity-25 text-white opacity-25 normal-transition'>90%</h1>
                    <h2 data-wow-delay=".4s" className='wow animate__animated animate__fadeIn text-xl lg:text-3xl absolute text-center left-0 right-0 w-full bottom-0 font-semibold font-ubuntu dark:text-white text-secondary'>CLIENT RETENTION</h2>
                </div>
                <div className='relative text-center'>
                    <h1 data-wow-delay=".6s" className='wow animate__animated animate__fadeInUp text-7xl lg:text-9xl font-saira font-bold dark:text-secondary dark:opacity-25 text-white opacity-25 normal-transition'>5</h1>
                    <h2 data-wow-delay=".8s" className='wow animate__animated animate__fadeIn text-xl lg:text-3xl absolute text-center left-0 right-0 w-full bottom-0 font-semibold font-ubuntu dark:text-white text-secondary'>
                        YEARS OF SERVICE
                    </h2>
                </div>
                <div className='relative text-center'>
                    <h1 data-wow-delay="1s" className='wow animate__animated animate__fadeInUp text-7xl lg:text-9xl font-saira font-bold dark:text-secondary dark:opacity-25 text-white opacity-25 normal-transition'>200+</h1>
                    <h2 data-wow-delay="1.2s" className='wow animate__animated animate__fadeIn text-xl lg:text-3xl absolute text-center left-0 right-0 w-full bottom-0 font-semibold font-ubuntu dark:text-white text-secondary'>
                        PROJECTS FINSHED
                    </h2>
                </div>
                <div className='relative text-center'>
                    <h1 data-wow-delay="1.4s" className='wow animate__animated animate__fadeInUp text-7xl lg:text-9xl font-saira font-bold dark:text-secondary dark:opacity-25 text-white opacity-25 normal-transition'>100+</h1>
                    <h2 data-wow-delay="1.6s" className='wow animate__animated animate__fadeIn text-xl lg:text-3xl absolute text-center left-0 right-0 w-full bottom-0 font-semibold font-ubuntu dark:text-white text-secondary'>
                        SATISFIED CLIENTS
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
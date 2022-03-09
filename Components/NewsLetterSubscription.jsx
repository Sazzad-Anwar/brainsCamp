import React from 'react'
import Image from 'next/image'

const NewsLetterSubscription = () => {
    return (
        <div className='py-20 container mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className='lg:flex lg:justify-center lg:items-center hidden'>
                    <Image data-wow-delay=".2s" className='wow animate__animated animate__fadeInUp' src="/subscr1.png" width={470} height={290} alt="subscr1" />
                </div>
                <div className='relative pr-24 flex flex-col lg:justify-start lg:items-start justify-center items-center'>
                    <h1 className='text-3xl my-5 lg:mt-20 lg:text-3xl 2xl:text-4xl font-bold dark:text-secondary text-primary normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay=".2s">
                        Email Newsletters!
                    </h1>
                    <div className='flex lg:flex-row flex-col items-center w-full lg:hover:shadow-xl rounded-full normal-transition'>
                        <input type="text" className='h-12 px-4 w-full lg:w-2/3 normal-transition dark:text-white font-ubuntu font-medium focus:outline-none rounded-md lg:rounded-l-full ' />
                        <button className='bg-dark w-full mt-5 lg:mt-0 lg:w-1/3 dark:bg-secondary text-white font-ubuntu font-semibold rounded-md lg:rounded-r-full text-xl active:scale-95 normal-transition h-12 px-6'>Subscribe</button>
                    </div>
                    <p className='text-base lg:text-xl dark:text-gray-500 text-secondary font-semibold font-ubuntu mt-4 lg:w-96 w-full'>
                        Sign up for our latest blogs, updates, service offers, annual events and much more.
                    </p>
                    <div className='absolute -bottom-10 right-0'>
                        <Image data-wow-delay=".4s" className='wow animate__animated animate__fadeInUp' src="/subscr-mailopen.png" width={138} height={133} alt="mailopen" />
                    </div>
                    <div className='absolute top-10 right-0'>
                        <Image data-wow-delay=".4s" className='wow animate__animated animate__rotateIn' src="/subscr-gear.png" width={58} height={57} alt="gear" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterSubscription
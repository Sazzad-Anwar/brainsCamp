import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {

    const reasons = [
        {
            title: 'TARGET',
            details: 'To reach your Business Goals are our No.1 Target',
            image: '/info-box7.png'
        },
        {
            title: 'STRATEGY',
            details: 'We help our clients to make core transformations in digital marketing strategies through digital advantages.',
            image: '/info-box8.png'
        },
        {
            title: 'TECHNOLOGY',
            details: 'With Creative Filament, your technical requirements are always in the safest hands.',
            image: '/info-box9.png'
        },
        {
            title: 'ANALYZE',
            details: 'We keep analyze your requirements to target your potential customer in a smooth manner',
            image: '/info-box10.png'
        },
    ]

    return (
        <div className='relative min-h-screen lg:min-h-[50rem]'>
            <div className='lg:absolute lg:left-0 lg:right-0 lg:z-20 py-10'>
                <div className='container mx-auto '>
                    <h1 className='text-2xl mt-3 lg:mt-20 lg:text-3xl 2xl:text-4xl font-bold text-center dark:text-secondary text-primary normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay=".2s">
                        Why Do You Choose Us
                    </h1>
                    <p data-wow-delay=".4s" className='wow animate__animated mt-5 lg:w-96 mx-auto animate__fadeInUp mb-3 lg:mb-20 text-center dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-xl font-semibold'>
                        You can get a 360 Degree Business Consulting service under a single roof.
                    </p>

                    <div className='my-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>

                        {reasons.map((details, index) => (
                            <div key={details.title} className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='flex justify-self-center lg:justify-self-end items-center shadow-none hover:shadow-2xl normal-transition h-[5rem] lg:h-[10.6rem] w-[5rem]  lg:w-[10.6rem] rounded-full'>
                                    <Image data-wow-delay={index * .2} className='wow animate__animated animate__fadeInUp' src={details.image} height={170} width={170} layout="intrinsic" alt="info-box" />
                                </div>
                                <div className='flex flex-col lg:ml-5 justify-center'>
                                    <h1 data-wow-delay={parseFloat(index * .2) + .4} className='text-primary wow animate__animated animate__fadeInUp font-ubuntu normal-transition dark:text-white text-center lg:text-left dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>
                                        {details.title}
                                    </h1>
                                    <p data-wow-delay={parseFloat(index * .2) + .4} className='wow animate__animated animate__fadeInUp mt-5 lg:w-96 mx-auto mb-3 lg:mb-20 text-center lg:text-left dark:text-gray-500 font-ubuntu text-gray-500 text-base dark:group-hover:text-white normal-transition lg:text-xl font-semibold'>
                                        {details.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='hidden lg:block absolute -bottom-2 left-0 right-0 z-10 dark:opacity-10 opacity-100'>
                <Image data-wow-delay=".6s" className='wow animate__animated animate__fadeInUp dark:bg-dark' src="/mountain1.png" width={1920} height={313} layout="intrinsic" objectFit='cover' alt='mountain-1' />
            </div>
            <div data-wow-delay="1s" className='hidden lg:block absolute -bottom-2 left-0 right-0 z-0 dark:opacity-5 opacity-100'>
                <Image className='wow animate__animated animate__fadeInUp dark:bg-dark' src="/mountain2.png" width={1920} height={575} layout="intrinsic" objectFit='cover' alt='mountain-1' />
            </div>
        </div>
    )
}

export default WhyChooseUs
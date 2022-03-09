import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const ClientComment = () => {

    const customerComments = [
        {
            id: Math.random().toString(),
            name: 'John Doe',
            designation: 'CEO, XYZ Company',
            comments: `I have had the pleasure of working with Atanu. He is a great partner with clients and also very honest.`
        },
        {
            id: Math.random().toString(),
            name: 'Jane Doe',
            designation: 'CEO, ABC Company',
            comments: `Atanu and his team is really highly skilled. The communication is top notch. They developd beautifully designed website with amazing functionality.`
        }
    ]

    return (
        <div className='py-10 container mx-auto overflow-x-hidden'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className='relative w-full flex flex-col justify-center'>
                    <h1 className='text-2xl mt-3 lg:mt-20 lg:text-3xl 2xl:text-4xl font-bold dark:text-secondary text-primary normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay=".2s">
                        Happy Clients About Us
                    </h1>
                    <p
                        data-wow-delay=".4s"
                        className='
                                wow 
                                animate__animated 
                                mt-3 
                                lg:w-96 
                                mx-auto 
                                animate__fadeInUp 
                                dark:text-gray-500 
                                font-ubuntu 
                                text-gray-500 
                                text-sm 
                                dark:group-hover:text-white 
                                normal-transition 
                                lg:text-xl 
                                font-semibold
                                ml-0
                            '
                    >
                        What Our Previous Clients say about Us
                    </p>
                    <div className='absolute hidden lg:block lg:-bottom-10 lg:-right-10'>
                        <Image data-wow-delay=".6s" className=' wow animate__animated animate__fadeInUp ' src="/testimonial2.png" height={350} width={310} alt="testimonial" />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute -top-2 right-24 z-0'>
                        <Image data-wow-delay="1s" className='wow animate__animated animate__fadeInUp' src="/testimonial1.png" width={215} height={130} alt="testimonial" />
                    </div>
                    <div data-wow-delay=".8s" className='wow shadow-lg h-[20rem] overflow-hidden px-4 py-4 animate__animated animate__fadeInRight w-full lg:rounded-tr-[6rem] lg:rounded-bl-[6rem] rounded-bl-[4rem] rounded-tr-[4rem] bg-dark backdrop-blur-sm dark:bg-darkLight z-10 my-24'>
                        <i className="bi bi-quote text-gray-600 dark:text-dark text-7xl z-0 opacity-50 normal-transition"></i>
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            spaceBetween={0}
                            autoplay={{
                                "delay": 4000,
                                "disableOnInteraction": false
                            }}
                            loop={true}
                            centeredSlides={true}
                            // onSwiper={(swiper) => console.log(swiper)}
                            slidesPerView={1}
                            className="mySwiper"
                        >
                            {/* sliders */}
                            {
                                customerComments.map((comment) => (
                                    <SwiperSlide key={comment.id} className="w-full px-9 lg:px-20 flex mb-10 justify-center items-center">
                                        {({ isActive }) => (
                                            <div className='h-auto items-center'>
                                                <h1 className='text-lg lg:text-xl xl:text-2xl normal-transition font-saira text-secondary font-bold dark:text-white'>
                                                    {comment.comments}

                                                </h1>
                                                {isActive ?
                                                    <>

                                                        <p className='wow animate__animated animate__fadeInRight text-base mt-3 lg:text-2xl normal-transition text-tertiary dark:text-secondary font-saira font-semibold'>
                                                            {comment.name}
                                                        </p>
                                                        <p className='animate__animated animate__fadeInRight text-base text-white font-ubuntu font-medium'>{comment.designation}</p>
                                                    </>
                                                    : null}
                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className='flex justify-self-end w-full absolute right-20'>
                            <i className="bi bi-quote text-gray-600 dark:text-dark text-7xl z-0 opacity-50 normal-transition"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientComment
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useRef } from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"
import { useState } from 'react';

const HeroSlider = ({ navBarHeight }) => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [sliderIndex, setSliderIndex] = useState(1);

    let sliderBoxDetails = [
        {
            title: 'Welcome To Our Website',
            serial: '01',
        },
        {
            title: 'Local SEO',
            serial: '02',
        },
        {
            title: 'Social Media Marketing',
            serial: '03',
        },
        {
            title: 'Full Customization',
            serial: '04',
        }
    ]


    return (
        <div className='h-screen relative'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                loop={true}
                centeredSlides={true}
                onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex === 5 ? 1 : swiper.activeIndex)}
                // onSwiper={(swiper) => console.log(swiper)}
                slidesPerView={1}
                className="mySwiper container mx-auto normal-transition relative"
                style={{ paddingTop: navBarHeight }}
            >
                {/* sliders */}
                <SwiperSlide className="w-full py-10 flex justify-center items-center">
                    {({ isActive }) => (
                        <div className='h-auto text-center '>
                            <h1 className='text-lg text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl font-saira font-bold dark:text-secondary normal-transition'>
                                BrainsCamp
                            </h1>
                            <p className='text-base mt-0 lg:text-2xl text-tertiary normal-transition dark:text-gray-500 font-saira font-semibold'>
                                Welcome To Our Official Website
                            </p>
                            <Image className={isActive ? 'py-5 animate__animated animate__fadeInRight' : 'py-5'} src="/sliders/slider1.png" height={420} width={1120} alt="slider1" objectFit='cover' layout='intrinsic' />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className="w-full py-10 flex justify-center items-center">
                    {({ isActive }) => (
                        <div className='h-auto items-center grid grid-cols-2 lg:grid-cols-2'>
                            <div className='w-2/3 mx-auto'>
                                <h1 className='text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl normal-transition font-saira font-bold dark:text-white'>
                                    <span className='text-primary normal-transition dark:text-secondary font-bold'>Local SEO</span> is about bringing your customers to your door-step.
                                </h1>
                                <p className='text-base mt-3 lg:text-2xl normal-transition text-tertiary dark:text-gray-500 font-saira font-semibold'>
                                    Contact us and we will guide you
                                    how to boost up your local presence
                                    and help you to generate more ROI
                                    by the help of Search Engine Optimization

                                </p>
                            </div>
                            <div className='text-center'>
                                <Image className={isActive ? 'mt-5 animate__animated animate__fadeInRight' : 'mt-5'} src="/sliders/slider2.png" height={520} width={597} alt="slider1" layout='intrinsic' />
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className="w-full py-10 flex justify-center items-center">
                    {({ isActive }) => (
                        <div className='h-auto items-center grid grid-cols-2 lg:grid-cols-2'>
                            <div className='w-2/3 mx-auto'>
                                <h1 className='text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-saira font-semibold dark:text-white'>
                                    <span className='text-primary normal-transition dark:text-secondary font-bold'>Social Media
                                        Marketing Services
                                    </span>
                                </h1>
                                <p className='text-base mt-3 lg:text-2xl normal-transition text-tertiary dark:text-gray-500 font-saira font-semibold'>
                                    An effective social strategy
                                    can help you grow your
                                    business, maintain your social presence and engage with the audience.
                                </p>
                            </div>
                            <div className='text-center'>
                                <Image className={isActive ? 'mt-5 animate__animated animate__fadeInRight w-full h-auto' : 'mt-5'} src="/sliders/slider3.png" height={451} width={525} alt="slider1" layout='intrinsic' />
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide className="w-full py-10 flex justify-center items-center">
                    {({ isActive }) => (
                        <div className='h-auto text-center'>
                            <h1 className='text-lg text-primary normal-transition lg:text-2xl xl:text-3xl 2xl:text-4xl font-saira font-bold dark:text-secondary'>Full Customized App Development</h1>
                            <p className='text-base w-96 mx-auto mt-0 lg:text-2xl text-tertiary normal-transition dark:text-gray-500 font-saira font-semibold'>We create contemporary and user-friendly web and mobile application for your business at a cost-effective Price
                            </p>
                            <div className='my-10'>
                                <Image className={isActive ? 'animate__animated animate__fadeInRight' : ''} src="/sliders/slider4.png" height={306} width={980} alt="slider1" objectFit='cover' layout='intrinsic' />
                            </div>
                        </div>
                    )}
                </SwiperSlide>

                {/* Next and previous arrow */}
                <div ref={navigationPrevRef} className="absolute hidden active:animate-ping animate-none normal-transition dark:bg-transparent top-1/2 left-5 z-10 md:flex justify-center items-center -translate-y-1/2  shadow-md cursor-pointer">
                    <i className="bi bi-arrow-left-square text-secondary text-3xl"></i>
                </div>
                <div ref={navigationNextRef} className="absolute hidden active:animate-ping animate-none normal-transition dark:bg-transparent top-1/2 right-5 z-10 md:flex justify-center items-center -translate-y-1/2  shadow-md cursor-pointer">
                    <i className="bi bi-arrow-right-square text-secondary text-3xl"></i>
                </div>
            </Swiper>
            <div className='grid grid-cols-2 lg:grid-cols-4 absolute bottom-0 w-full'>
                {sliderBoxDetails.map((details, index) => (
                    <div key={details.serial} className={`py-10 relative ${sliderIndex === index + 1 ? 'bg-purple-100 dark:bg-darkLight dark:border-[#243763] ' : 'dark:border-[#243763] border-purple-100'} text-center border normal-transition`}>
                        <h1 className={`text-2xl ${sliderIndex === index + 1 ? 'font-bold dark:text-white animate__animated animate__zoomIn' : 'dark:text-gray-500'} font-semibold text-primary font-ubuntu normal-transition`}>
                            {details.title}
                        </h1>
                        <h2 className={`absolute right-5 ${sliderIndex === index + 1 ? 'text-secondary' : 'dark:text-gray-800 text-gray-200'} normal-transition font-saira text-2xl lg:text-5xl font-semibold top-2`}>
                            {details.serial}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroSlider
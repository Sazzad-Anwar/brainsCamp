import React from 'react'

const Services = () => {
    return (
        <div className='py-32 container mx-auto z-30'>
            <h1 data-wow-delay=".2s" className='text-2xl wow animate__animated animate__fadeInUp my-3 lg:mb-20 lg:text-3xl 2xl:text-4xl font-bold text-center dark:text-secondary text-primary normal-transition font-saira'>Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div data-wow-delay=".2s" className='wow animate__animated animate__fadeInUp flex hover:shadow-xl rounded-md items-start group border p-5 border-white dark:border-transparent dark:hover:border-[#243763] normal-transition'>
                    <div className='flex justify-center items-center rounded-full bg-purple-200 dark:bg-darkLight normal-transition px-5 py-4'>
                        <i className="bi bi-pin-map-fill text-2xl dark:group-hover:text-secondary text-primary dark:text-white normal-transition"></i>
                    </div>
                    <div className='px-8'>
                        <h1 className='text-primary font-saira normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>Local SEO Service</h1>
                        <p className='dark:text-gray-500 text-gray-800 text-sm dark:group-hover:text-white normal-transition lg:text-sm'>
                            Boost your Brand presense infront of your, local people to increase your ROI.
                        </p>
                    </div>
                </div>

                <div data-wow-delay=".4s" className='wow animate__animated animate__fadeInUp flex hover:shadow-xl rounded-md items-start group border p-5 border-white dark:border-transparent dark:hover:border-[#243763] normal-transition'>
                    <div className='flex justify-center items-center rounded-full bg-purple-200 dark:bg-darkLight normal-transition px-5 py-4'>
                        <i className="bi bi-map-fill text-2xl dark:group-hover:text-secondary text-primary dark:text-white normal-transition"></i>
                    </div>
                    <div className='px-8'>
                        <h1 className='text-primary font-saira normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>Social Media Service</h1>
                        <p className='dark:text-gray-500 text-gray-800 text-sm dark:group-hover:text-white normal-transition lg:text-sm'>
                            Increase your Social Brand Presence by doing Social Media Marketing. Your Brand speaks about your business .
                        </p>
                    </div>
                </div>

                <div data-wow-delay=".6s" className='wow animate__animated animate__fadeInUp flex hover:shadow-xl rounded-md items-start group border p-5 border-white dark:border-transparent dark:hover:border-[#243763] normal-transition'>
                    <div className='flex justify-center items-center rounded-full bg-purple-200 dark:bg-darkLight normal-transition px-4 py-3'>
                        <span className="material-icons text-3xl dark:group-hover:text-secondary text-primary dark:text-white normal-transition">verified</span>
                    </div>
                    <div className='px-8'>
                        <h1 className='text-primary font-saira normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>Online Reputation</h1>
                        <p className='dark:text-gray-500 text-gray-800 text-sm dark:group-hover:text-white normal-transition lg:text-sm'>
                            Boost Up your Online Brand Image by doing Online Reputation Management.
                        </p>
                    </div>
                </div>

                <div data-wow-delay=".8s" className='wow animate__animated animate__fadeInUp flex hover:shadow-xl rounded-md items-start group border p-5 border-white dark:border-transparent dark:hover:border-[#243763] normal-transition'>
                    <div className='flex justify-center items-center rounded-full bg-purple-200 dark:bg-darkLight normal-transition px-4 py-3'>
                        <span className="material-icons text-3xl dark:group-hover:text-secondary text-primary dark:text-white normal-transition">draw</span>
                    </div>
                    <div className='px-8'>
                        <h1 className='text-primary font-saira normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>Graphic Design</h1>
                        <p className='dark:text-gray-500 text-gray-800 text-sm dark:group-hover:text-white normal-transition lg:text-sm'>
                            We provide all kinds of Graphic Design services such as logo, brochure, business card, flyers design services to our clients.
                        </p>
                    </div>
                </div>

                <div data-wow-delay="1s" className='wow animate__animated animate__fadeInUp flex hover:shadow-xl rounded-md items-start group border p-5 border-white dark:border-transparent dark:hover:border-[#243763] normal-transition'>
                    <div className='flex justify-center items-center rounded-full bg-purple-200 dark:bg-darkLight normal-transition px-4 py-3'>
                        <span className="material-icons text-3xl dark:group-hover:text-secondary text-primary dark:text-white normal-transition">web_asset</span>
                    </div>
                    <div className='px-8'>
                        <h1 className='text-primary font-saira normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>Web App Development</h1>
                        <p className='dark:text-gray-500 text-gray-800 text-sm dark:group-hover:text-white normal-transition lg:text-sm'>
                            We can turn your thoughts into fruitful business with scalable and robust web apps.
                        </p>
                    </div>
                </div>

                <div data-wow-delay="1.2s" className='wow animate__animated animate__fadeInUp flex hover:shadow-xl rounded-md items-start group border p-5 border-white dark:border-transparent dark:hover:border-[#243763] normal-transition'>
                    <div className='flex justify-center items-center rounded-full bg-purple-200 dark:bg-darkLight normal-transition px-4 py-3'>
                        <span className="material-icons text-3xl dark:group-hover:text-secondary text-primary dark:text-white normal-transition">phone_android</span>
                    </div>
                    <div className='px-8'>
                        <h1 className='text-primary font-saira normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-3xl font-semibold'>Mobile App Development</h1>
                        <p className='dark:text-gray-500 text-gray-800 text-sm dark:group-hover:text-white normal-transition lg:text-sm'>
                            Your thoughts can be turned into a mobile app that can be used by your customers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
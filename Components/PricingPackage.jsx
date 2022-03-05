import React from 'react';
import Image from 'next/image';

const PricingPackage = () => {
    return (
        <div className='py-10 container mx-auto'>
            <h1 className='text-2xl mt-3 lg:mt-20 lg:text-3xl 2xl:text-4xl font-bold text-center dark:text-secondary text-primary normal-transition font-saira wow animate__animated animate__fadeInUp' data-wow-delay=".2s">
                Our Pricing Packages
            </h1>
            <p data-wow-delay=".4s" className='wow animate__animated mt-5 lg:w-96 mx-auto animate__fadeInUp mb-3 lg:mb-20 text-center dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-xl font-semibold'>
                Pricing packages that will fit Every Budget! Choose Below the most suitable for you!
            </p>

            <div className='w-full p-4 shadow-2xl rounded-lg my-8 border border-transparent dark:border-[#243763]'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-3">
                    {/* Personal plan */}
                    <div className='flex flex-col group items-center py-5 relative'>
                        <div className='px-5 py-9 dark:group-hover:bg-darkLight group-hover:bg-purple-400 bg-gray-200 dark:bg-black rounded-full normal-transition'>
                            <Image height={62} width={100} src="/pricing1.png" alt="pricing1" />
                        </div>
                        <div className='mt-5'>
                            <h1 data-wow-delay=".4s" className='text-center text-gray-500 group-hover:text-primary wow animate__animated animate__fadeIn font-ubuntu normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-4xl font-semibold'>
                                Personal
                            </h1>
                            <ul className='mt-5 ml-5'>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="1.6s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay=".6s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        1 Page Business Website
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="1.8s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay=".8s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        2 Months SEO Support
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        2 Social Media Channels
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="2.2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">cancel</span>
                                    </span>
                                    <p data-wow-delay="1.2s" className='wow line-through animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        Monthly SEO Reports
                                    </p>
                                </li>
                                <li className='flex my-3 items-center '>
                                    <span data-wow-delay="2.4s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1.4s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        1 Year Hosting and Domain Support FREE
                                    </p>
                                </li>
                            </ul>

                            <div className='flex justify-center items-center my-10'>
                                <button type='button' className='text-base lg:text-2xl hover:shadow-xl font-ubuntu font-bold dark:group-hover:bg-darkLight active:scale-95 scale-100 text-white group-hover:text-primary dark:text-white dark:group-hover:text-white dark:bg-gray-500 group-hover:bg-purple-300 bg-gray-400 normal-transition px-3 py-2 lg:px-5 lg:py-3 rounded-lg wow animate__animated animate__fadeInUp' data-wow-delay=".6s">Get Quotation</button>
                            </div>
                        </div>
                    </div>

                    {/* Professional */}
                    <div className='flex flex-col group items-center py-5 relative'>
                        <div className='px-5 py-9 dark:group-hover:bg-darkLight group-hover:bg-purple-400 bg-gray-200 dark:bg-black rounded-full normal-transition'>
                            <Image height={62} width={100} src="/pricing2.png" alt="pricing1" />
                        </div>
                        <div className='mt-5'>
                            <h1 data-wow-delay=".4s" className='text-center text-gray-500 group-hover:text-primary wow animate__animated animate__fadeIn font-ubuntu normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-4xl font-semibold'>
                                Professional
                            </h1>
                            <ul className='mt-5 ml-5'>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="1.6s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay=".6s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        5 Page Business Website
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="1.8s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay=".8s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        2 Months SEO Support
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        3 Social Media Channels
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="2.2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1.2s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        Monthly SEO Reports
                                    </p>
                                </li>
                                <li className='flex my-3 items-center '>
                                    <span data-wow-delay="2.4s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1.4s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        1 Year Hosting and Domain Support FREE
                                    </p>
                                </li>
                            </ul>

                            <div className='flex justify-center items-center my-10'>
                                <button type='button' className='text-base lg:text-2xl hover:shadow-xl font-ubuntu font-bold dark:group-hover:bg-darkLight active:scale-95 scale-100 text-white group-hover:text-primary dark:text-white dark:group-hover:text-white dark:bg-gray-500 group-hover:bg-purple-300 bg-gray-400 normal-transition px-3 py-2 lg:px-5 lg:py-3 rounded-lg wow animate__animated animate__fadeInUp' data-wow-delay=".6s">Get Quotation</button>
                            </div>
                        </div>
                    </div>

                    {/* Advanced */}
                    <div className='flex flex-col group items-center py-5 relative'>
                        <div className='px-5 py-9 dark:group-hover:bg-darkLight group-hover:bg-purple-400 bg-gray-200 dark:bg-black rounded-full normal-transition'>
                            <Image height={62} width={100} src="/pricing3.png" alt="pricing1" />
                        </div>
                        <div className='mt-5'>
                            <h1 data-wow-delay=".4s" className='text-center text-gray-500 group-hover:text-primary wow animate__animated animate__fadeIn font-ubuntu normal-transition dark:text-white dark:group-hover:text-secondary text-lg lg:text-4xl font-semibold'>
                                Advanced
                            </h1>
                            <ul className='mt-5 ml-5'>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="1.6s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay=".6s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        ECommerce Website
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="1.8s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay=".8s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        5 Months SEO Support
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        5 Social Media Channels
                                    </p>
                                </li>
                                <li className='flex my-3 items-center'>
                                    <span data-wow-delay="2.2s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1.2s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        Monthly SEO Reports
                                    </p>
                                </li>
                                <li className='flex my-3 items-center '>
                                    <span data-wow-delay="2.4s" className='wow animate__animated animate__fadeIn h-8 w-8 mr-4 flex justify-center items-center rounded-full normal-transition dark:group-hover:bg-darkLight bg-gray-500 group-hover:bg-purple-300 dark:bg-darkLight'>
                                        <span className="material-icons text-xl dark:group-hover:text-green-500 text-white group-hover:text-primary dark:text-white normal-transition">check_circle</span>
                                    </span>
                                    <p data-wow-delay="1.4s" className='wow animate__animated animate__fadeInUp dark:text-gray-500 font-ubuntu text-gray-500 text-sm dark:group-hover:text-white normal-transition lg:text-lg font-semibold'>
                                        1 Year Hosting and Domain Support FREE
                                    </p>
                                </li>
                            </ul>

                            <div className='flex justify-center items-center my-10'>
                                <button type='button' className='text-base lg:text-2xl hover:shadow-xl font-ubuntu font-bold dark:group-hover:bg-darkLight active:scale-95 scale-100 text-white group-hover:text-primary dark:text-white dark:group-hover:text-white dark:bg-gray-500 group-hover:bg-purple-300 bg-gray-400 normal-transition px-3 py-2 lg:px-5 lg:py-3 rounded-lg wow animate__animated animate__fadeInUp' data-wow-delay=".6s">Get Quotation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPackage
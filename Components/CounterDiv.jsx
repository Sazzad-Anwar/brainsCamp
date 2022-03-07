import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'

const CounterDiv = ({ counterNumber, title }) => {

    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: counterNumber,
        delay: 1000,
        config: config.molasses,
    })

    return (
        <div className='relative text-center'>
            <h1 data-wow-delay=".2s" className='wow animate__animated animate__fadeInUp text-7xl lg:text-9xl font-saira font-bold dark:text-secondary dark:opacity-25 text-white opacity-25 normal-transition'>
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
            </h1>
            <h2 data-wow-delay=".4s" className='wow animate__animated animate__fadeIn text-xl lg:text-3xl absolute text-center left-0 right-0 w-full bottom-0 font-semibold font-ubuntu dark:text-white text-secondary'>{title}</h2>
        </div>
    )
}

export default CounterDiv
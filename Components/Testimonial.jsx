import React, { useState } from 'react'
import CounterDiv from './CounterDiv'

const Testimonial = () => {

    return (
        <div className='py-20 container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <CounterDiv title="CLIENT RETENTION" counterNumber={90} />
                <CounterDiv title="YEARS OF SERVICE" counterNumber={5} />
                <CounterDiv title="PROJECTS FINSHED" counterNumber={200} />
                <CounterDiv title="SATISFIED CLIENTS" counterNumber={100} />
            </div>
        </div>
    )
}

export default Testimonial
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Branding = () => {
    return (
        <Link href="/">
            <a className="flex items-center mr-auto">
                <Image src="/logo.png" height={50} width={50} alt="logo" />
                <h1 className="font-saira ml-1">
                    <span className="text-primary dark:text-white text-4xl font-extrabold mb-0 pb-0">
                        Brains
                    </span>
                    <span className="text-secondary text-4xl font-extrabold mb-0 pb-0">
                        Camp
                    </span>
                    <span className="flex justify-between items-center w-28 mt-0 pt-0">
                        <span className="block text-sm mr-1 font-bold text-secondary mt-0 pt-0">
                            we
                        </span>
                        <span className="block text-sm mr-1 font-bold text-secondary mt-0 pt-0">
                            make
                        </span>
                        <span className="block text-sm mr-1 font-bold dark:text-white text-primary mt-0 pt-0">
                            better
                        </span>
                        <span className="block text-sm mr-1 font-bold dark:text-white text-primary mt-0 pt-0">
                            softwares
                        </span>
                    </span>
                </h1>
            </a>
        </Link>
    )
}

export default Branding
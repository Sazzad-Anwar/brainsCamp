import { Dropdown, Menu } from 'antd'
import Link from 'next/link'
import React from 'react'
import Branding from './Branding'
import DarkModeToggler from './DarkModeToggler'

const NavMenu = ({ inDrawer, closeDrawer }) => {

    const ourServiceMenu = (
        <Menu className="font-ubuntu p-0 border border-white">
            <Menu.Item key="ui-ux-design" className="text-black dark:hover:bg-darkLight dark:bg-dark dark:text-white hover:text-primary normal-transition bg-white hover:bg-purple-100">
                <Link href="/ui-ux-design">
                    <a className="text-base">
                        UI/UX design
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="web-app-development" className="text-black dark:hover:bg-darkLight dark:bg-dark dark:text-white hover:text-primary normal-transition bg-white hover:bg-purple-100">
                <Link href="/web-app-development">
                    <a className="text-base">
                        Web Application development
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="mobile-app-development" className="text-black dark:hover:bg-darkLight dark:bg-dark dark:text-white hover:text-primary normal-transition bg-white hover:bg-purple-100">
                <Link href="/mobile-app-development">
                    <a className="text-base">
                        Mobile Application development
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="">
            <div className={!inDrawer ? "block" : "block w-screen p-2 h-screen"}>
                <div className={`flex justify-between container mx-auto items-center border-b pb-3 dark:border-gray-700 border-gray-300 ${inDrawer ? 'block' : 'hidden'} lg:hidden`}>
                    <Branding />
                    <button>
                        <i onClick={closeDrawer} className={`bi bi-x-lg text-primary dark:text-secondary hover:dark:text-secondary text-2xl block lg:hidden normal-transition`}></i>
                    </button>
                </div>
                {/* <hr className='dark:bg-dark bg-black my-3 lg:hidden' /> */}
                <ul className={`${inDrawer ? 'flex' : 'hidden'} container mx-auto  ml-auto pt-3 items-start lg:items-center font-ubuntu flex-col lg:flex lg:flex-row`}>
                    <li className="group  mb-6 lg:mb-0 hidden lg:block">
                        <DarkModeToggler />
                    </li>
                    <li className="group  mb-6 lg:mb-0">
                        <Link href="/">
                            <a className="navMenu">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="group  mb-6 lg:mb-0">
                        <Link href="/hello">
                            <a>
                                <Dropdown overlay={ourServiceMenu} placement="bottomCenter" arrow>
                                    <p className="navMenu">
                                        Our Service
                                    </p>
                                </Dropdown>
                            </a>
                        </Link>
                    </li>
                    <li className="group  mb-6 lg:mb-0">
                        <Link href="/">
                            <a className="navMenu">
                                About Us
                            </a>
                        </Link>
                    </li>
                    <li className="group  mb-6 lg:mb-0">
                        <Link href="/">
                            <a className="navMenu">
                                Our Portfolio
                            </a>
                        </Link>
                    </li>
                    <li className="group  mb-6 lg:mb-0">
                        <Link href="/">
                            <a className="navMenu">
                                Contact us
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu
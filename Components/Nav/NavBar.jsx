import Image from "next/image"
import Link from "next/link"
import { Menu, Dropdown, Drawer } from 'antd'
import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import NavMenu from "./NavMenu"
import Branding from "./Branding"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
const DarkModeToggler = dynamic(() => import('./DarkModeToggler'), { ssr: false })

const drawerWidth = 240;
const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const headerRef = useRef(null);
    const emptyDiv = useRef(null)

    const handleMenuOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);

    }
    const handleCloseDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    useEffect(() => {
        let setHeightAfterTimeOut = setTimeout(() => {
            emptyDiv.current.style.height = headerRef.current.offsetHeight + 'px'
        }, 500)
        return () => {
            clearTimeout(setHeightAfterTimeOut)
        }
    }, [])

    return (
        <>
            <header ref={headerRef} className="fixed shadow-lg dark:bg-dark bg-white normal-transition w-full z-10">
                <nav className="container mx-auto flex items-center py-3">
                    <Branding />
                    <button className="block px-5 lg:hidden">
                        <DarkModeToggler />
                    </button>
                    <button>
                        <i onClick={handleMenuOpen} className={`bi ${!isDrawerOpen ? 'bi-list' : 'bi-x-lg'} text-primary dark:text-secondary hover:dark:text-secondary text-2xl block lg:hidden normal-transition`}></i>
                    </button>

                    <SwipeableDrawer
                        anchor="left"
                        open={isDrawerOpen}
                        onClose={handleCloseDrawer}
                        onOpen={handleCloseDrawer}
                    >
                        <NavMenu inDrawer closeDrawer={handleCloseDrawer} />
                    </SwipeableDrawer>

                    <NavMenu />
                </nav>
            </header>
            <div ref={emptyDiv} style={{ height: headerRef?.current?.offsetHeight }} />
        </>
    )
}

export default NavBar
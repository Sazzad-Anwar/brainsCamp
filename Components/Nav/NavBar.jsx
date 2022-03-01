import Image from "next/image"
import Link from "next/link"
import { Menu, Dropdown, Drawer } from 'antd'
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import NavMenu from "./NavMenu"
import Branding from "./Branding"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
const DarkModeToggler = dynamic(() => import('./DarkModeToggler'), { ssr: false })

const drawerWidth = 240;
const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);

    }
    const handleCloseDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <header className="shadow-lg dark:bg-dark normal-transition">
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
    )
}

export default NavBar
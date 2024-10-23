import React, { useState, useEffect } from 'react';
import './Nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { navMenu, social } from '../utilits/constants';
import { CloseRounded, MenuRounded } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(window.innerWidth);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const updateMenuHeight = () => {
        setMenuHeight(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMenuHeight);
        return () => window.removeEventListener('resize', updateMenuHeight);
    }, []);

    const menuVariants = {
        open: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 0,
            x: '-100%',
            y: '-100%',
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };
    const textVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };

    return (
        <nav className='nav md:py-14 py-5 w-full'>
            <div className="container mx-auto md:px-16 px-4 flex justify-between items-center">
                <ul className='md:flex hidden columns-6 gap-x-7 text-white text-lg'>
                    {navMenu.map((menu) =>
                        <li key={menu.linkName}>
                            <AnchorLink href={menu.slug}>
                                {menu.linkName}
                            </AnchorLink>
                        </li>
                    )}
                </ul>

                {/* BURGER MENU BUTTON */}
                <div className="md:hidden flex items-center justify-center bg-white rounded-lg w-8 h-8 z-20">
                    <button onClick={handleToggle} className="flex items-center justify-center">
                        {isOpen ? (
                            <CloseRounded />
                        ) : (
                            <MenuRounded />
                        )}
                    </button>
                </div>

                {/* MOBILE NAV MENU */}
                <motion.div
                    className="md:hidden bg-[#162950] absolute top-0 left-0 w-full px-4 rounded-br-full z-10 overflow-hidden"
                    style={{ height: `${menuHeight}px` }}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={menuVariants}
                >
                    <ul className='flex flex-col text-white text-xl mt-20'>
                        {navMenu.map((menu) =>
                            <motion.li
                                className='w-full mt-5 first-of-type:mt-0' key={menu.linkName}
                                initial="closed"
                                animate={isOpen ? "open" : "closed"}
                                variants={textVariants}
                            >
                                <AnchorLink href={menu.slug} onClick={() => setIsOpen(false)}>
                                    {menu.linkName}
                                </AnchorLink>
                                <div className="w-full bg-white h-px"></div>
                            </motion.li>
                        )}
                    </ul>
                </motion.div>

                <ul className='flex gap-x-3 z-20'>
                    {social.map((icon) =>
                        <li key={icon.title} className='cursor-pointer'>
                            <a href={icon.slug} target='_blank' rel='noreferrer' download={icon.download}
                                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
                            >
                                {icon.icon}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
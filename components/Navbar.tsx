import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
]

export const Navbar: FC = () => {
    return (
        <nav className={styles['menu-container']}>
            {menuItems.map((item, index) => (
                <ActiveLink key={index} href={item.href} text={item.text} />
            ))}
        </nav>
    )
}

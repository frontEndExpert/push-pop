import React from 'react';
import styles from '@/styles/Nav.module.css'
import Link from 'next/link';


const Nav = () => {

    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.navItem}>
                    <Link className="cursor-pointer "
                        href={{ pathname: "/pop" }}>
                        PopOrderedList
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className="cursor-pointer "
                        href={{ pathname: "/push" }}>
                        PushOrderedList
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav;



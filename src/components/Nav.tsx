import React from 'react';
import styles from '@/styles/Nav.module.css'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames'
const Nav = () => {
    const pathname = usePathname();
    const router: any = useRouter();


    const handleClick = (path: string) => {
        router.push(path);
    }
    return (
        <nav data-testid="nav" className={styles.nav}>
            <ul className={styles.list}>
                <li className={classNames(styles.navItem, (pathname == '/pop') ? styles.active : '')}
                    onClick={() => handleClick('/pop')}
                >
                    <Link className={styles.link}

                        href={{ pathname: "/pop" }}>
                        <span className={styles.linkable}>PopOrderedList</span>
                    </Link>
                </li>
                <li className={classNames(styles.navItem, (pathname == '/push') ? styles.active : '')}
                    onClick={() => handleClick('/push')}>
                    <Link className={styles.link}
                        href={{ pathname: "/push" }}>
                        <span className={styles.linkable}>PushOrderedList</span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav;



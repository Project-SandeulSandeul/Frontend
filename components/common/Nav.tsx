import React from 'react';
import styles from '../../styles/layout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import home from '../../public/assets/home.png';
import homeFill from '../../public/assets/home-filled.png';
import map from '../../public/assets/map.png';
import mapFill from '../../public/assets/map-filled.png';
import group from '../../public/assets/fa_group.png';
import groupFill from '../../public/assets/fa_group-filled.png';
import mypage from '../../public/assets/menu.png';
import mypageFill from '../../public/assets/menu-filled.png';
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname.slice(1);

    const menuImage = [home, map, group, mypage];
    const menuFillImage = [homeFill, mapFill, groupFill, mypageFill];
    const menuName = ['', 'map', 'group', 'mypage'];

    return (
        <nav className={styles.nav}>
            {menuImage.map((item) => (
                <Link key={`${menuImage.indexOf(item)}`} href={`/${menuName[menuImage.indexOf(item)].toString()}`}>
                    <Image
                        src={
                            pathname === `${menuName[menuImage.indexOf(item)].toString()}`
                                ? menuFillImage[menuImage.indexOf(item)]
                                : item
                        }
                        alt={`${menuName[menuImage.indexOf(item)].toString()}`}
                        width={28}
                        height={28}
                    />
                </Link>
            ))}
        </nav>
    );
};

export default Nav;

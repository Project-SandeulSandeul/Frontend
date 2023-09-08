import React, { ReactNode } from 'react';
import styles from '../../styles/layout.module.scss';
import Nav from './Nav';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.Layout}>
            {children}
            <Nav />
        </div>
    );
};

export default Layout;

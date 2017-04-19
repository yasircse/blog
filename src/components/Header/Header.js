import React from 'react';
import {AppBar} from 'material-ui'
import styles from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar
                title="Articles Blog"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                className={styles.header}
            >
            <li className={styles.listItem}><Link className={styles.link} to='/'>Posts</Link></li>
            </AppBar>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Articles Blog</h1>
                    <nav>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link className={styles.link} to='/'>Posts</Link></li>
                            <li className={styles.listItem}><Link className={styles.link} to='/about'>About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
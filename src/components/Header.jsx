import React from 'react';
import styles from '../../src/styles.module.css';
import image from '../static/moses.jpg';

const Header = () => {

    return (
    <div className="container">
        <div className="row justify-content-center">
            <img className={styles.profilePicture} src={image} alt="Moses Godinez"></img>
        </div>
        <div className="row justify-content-center">
        <h1 style={{marginBottom: 0}}>
            <span>Moses Godinez</span>
        </h1>
        </div>
     </div>
    );
}

export default Header;
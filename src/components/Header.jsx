import React, { useEffect, useState } from 'react';
import styles from '../../src/styles.module.css';
import image from '../static/moses.jpg';
import Typed from 'react-typed';


const Header = () => {

    return (
    <div className="container">
        <div className="row justify-content-center">
            <img className={styles.profilePicture} src={image} alt="Moses Godinez"></img>
        </div>
        <div className="row justify-content-center">
            <Typed 
            strings={['Hello My Name is Moses!']} 
            typeSpeed={40}           
            />
        </div>
     </div>
    );
}

export default Header;
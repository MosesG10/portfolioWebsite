import React from 'react';
import styles from '../styles.module.css';

const Card = ({image, subHeader}) => {
    return (
    <div className={styles.card}>
        <img className={styles.cardArt} src={image} alt={"title"}></img>
        <div>
            <h4>{subHeader}</h4>
        </div>
    </div>
    );
};

export default Card;
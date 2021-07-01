import React from 'react';
import styles from '../styles.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Card = ({image, subHeader}) => {
    return (
    <div className={styles.card}>
        <div className={styles.customContainer}>
            <img className={styles.cardArt} src={image} alt={"title"}></img>
        </div>
        <div className={styles.customContainer}>
            <h4>{subHeader}</h4>
        </div>
    </div>
    );
};

Card.PropTypes = {
    image: PropTypes.node.isRequired,
    subHeader: PropTypes.string,
};

Card.defaultProps = {
    subHeader: '',
};

export default Card;
import React from 'react';
import styles from '../styles.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Card = ({image, subHeader, details, showButton, buttonTitle}) => {
    return (
    <div className={styles.card}>
        <div className={styles.customContainer}>
            <img className={styles.cardArt} src={image} alt={"title"}></img>
        </div>
        <div className={styles.customContainer}>
            <h4>{subHeader}</h4>
        </div>
        { details && (
            <div className={styles.customContainer}>
                <p>{details}</p>
            </div>
        )}
        { showButton && (
            <div className={styles.customContainer}>
                <button className="btn btn-outline-dark">{buttonTitle}</button>
            </div>
        )
        }
    </div>
    );
};

Card.PropTypes = {
    image: PropTypes.node.isRequired,
    subHeader: PropTypes.string,
    showButton: PropTypes.bool,
    buttonTitle: PropTypes.string,
};

Card.defaultProps = {
    subHeader: '',
    details: '',
    showButton: false,
    buttonTitle: 'More Info'
};

export default Card;
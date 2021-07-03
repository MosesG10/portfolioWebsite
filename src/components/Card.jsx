/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "../styles.module.css";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const Card = ({ image, subHeader, details, buttonTitle, modalDetails }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.customContainer}>
        <img className={styles.cardArt} src={image} alt={"title"}></img>
      </div>
      <div className={styles.customContainer}>
        <h4>{subHeader}</h4>
      </div>
      {details && (
        <div className={styles.customContainer}>
          <p className={styles.cardText}>{details}</p>
        </div>
      )}
      {buttonTitle && (
        <>
          <div className={styles.customContainer}>
            <button className="btn btn-outline-dark" onClick={setShowModal}>
              {buttonTitle}
            </button>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
            <div className={`${styles.customContainer} ${styles.cardText} ${styles.pad2}`}>
                {modalDetails}
            </div>
            <div className={`${styles.customContainer} ${styles.cardText} ${styles['pad-2-bottom']}`}>
              <button
                className="btn btn-outline-dark"
                onClick={() => setShowModal(!showModal)}
              >
                Close
              </button>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

Card.PropTypes = {
  image: PropTypes.node.isRequired,
  subHeader: PropTypes.string,
  showButton: PropTypes.bool,
  buttonTitle: PropTypes.string,
  modalDetails: PropTypes.string,
};

Card.defaultProps = {
  subHeader: "",
  details: "",
  showButton: false,
  buttonTitle: "",
  modalDetails: "",
};

export default Card;

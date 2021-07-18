import React, { useState } from 'react';
import styles from '../styles.module.css';
import { Modal } from "react-bootstrap";

const SubHeader = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.subHeaderStyle}>
            <span className={styles['margin-right']}>
                <button className={`${styles.linkButton} ${styles.anchorColor}`} onClick={()=> setShowModal(!showModal)}>Email</button>
            </span>
            •
            <span className={`${styles['margin-right']} ${styles['margin-left']}`}>
                <a className={styles.anchorColor} href="https://github.com/MosesG10">Github</a>
            </span>
            •
            <span className={styles['margin-left']}>
                <a className={styles.anchorColor} href="https://www.linkedin.com/in/moses-godinez/">LinkedIn</a>
            </span>
           <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
            <div className={`${styles.customContainer} ${styles.modalFont} ${styles.pad2}`}>
                <a className={styles['margin-1-top']} href="mailto:mosesgodinez@outlook.com">mosesgodinez@outlook.com</a>
            </div>
            <div className={`${styles.customContainer} ${styles.modalFont} ${styles['pad-2-bottom']}`}>
              <button
                className="btn btn-outline-dark"
                onClick={() => setShowModal(!showModal)}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
    )
}

export default SubHeader;
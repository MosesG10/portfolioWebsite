import React from 'react';
import styles from '../styles.module.css';

const SubHeader = () => {
    const toggleEmailModal = () => {
        console.log('toggleModal Called');
    }
    return (
        <div className={styles['margin-1-bottom']}>
           <div className="row justify-content-center">
            <span className={styles['margin-right']}>
                <button className={`${styles.linkButton} ${styles.anchorColor}`} onClick={toggleEmailModal}>Email</button>
            </span>
            •
            <span className={`${styles['margin-right']} ${styles['margin-left']}`}>
                <a className={styles.anchorColor} href="https://github.com/MosesG10">Github</a>
            </span>
            •
            <span className={styles['margin-left']}>
                <a className={styles.anchorColor} href="https://www.linkedin.com/in/moses-godinez/">LinkedIn</a>
            </span>
           </div>
        </div>
    )
}

export default SubHeader;
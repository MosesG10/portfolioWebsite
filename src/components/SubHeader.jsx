import React from 'react';
import styles from '../styles.module.css';

const SubHeader = () => {
    const toggleEmailModal = () => {
        console.log('toggleModal Called');
    }
    return (
        <div className="container">
           <div className="row justify-content-center">
            <span>
                <button className={`${styles.linkButton} ${styles.anchorColor}`} onClick={toggleEmailModal}>Email</button>
            </span>
            •
            <span>
                <a className={styles.anchorColor} href="https://github.com/MosesG10">Github</a>
            </span>
            •
            <span>
                <a className={styles.anchorColor} href="https://www.linkedin.com/in/moses-godinez/">LinkedIn</a>
            </span>
           </div>
        </div>
    )
}

export default SubHeader;
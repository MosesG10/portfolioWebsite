import React from 'react';
import styles from '../styles.module.css';

const SubHeader = () => {
    // Email with >> modal 
    // Link to Github 
    // Link to LinkedIn
    const toggleEmailModal = () => {
        console.log('toggleModal Called');
    }
    return (
        <div className="container">
           <div className="row justify-content-center">
            <span>
                <button className={styles.linkButton} onClick={toggleEmailModal}>Email</button>
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
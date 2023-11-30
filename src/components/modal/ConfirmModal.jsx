import styles from './modal.module.css';

const ConfirmModal = ({children,visible}) => {
  const modalClassName = `${styles['modal-overlay']} ${visible ? styles['modal-visible'] : ''}`;

  return (
    <div className={modalClassName}>
        <div className={styles["modal-container"]}>
            <h2>Confirm Reservation</h2>
            <p>Are you sure you want to confirm this reservation?</p>
            <div className={styles["button-container"]}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default ConfirmModal
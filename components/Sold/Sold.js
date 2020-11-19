import styles from '../../styles/Sold.module.css'

const Sold = ({ apartments }) => {
  return <div className={styles.container}>
    <div className={styles.label}>MYYDYT</div>
    <div className={styles.apartmentWrapper}>
      {apartments.map(apartment =>
        <div className={styles.apartment} key={apartment.address}>
          <img className={styles.image} src={apartment.picture}></img>
          <div className={styles.apartmentInfo}>
            <div>{apartment.address}</div>
            <div>{apartment.size}</div>
          </div>
        </div>
      )}
    </div>
  </div>
}

export default Sold
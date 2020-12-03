import styles from '../../styles/Sold.module.css'

const Sold = ({ apartments, soldAmount }) => {

  const getTodayString = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return day + '.' + month + '.' + year
  }

  return <div className={styles.container}>
    <span className={styles.idAnchor} id="myydyt"></span>
    <div className={styles.label}>{soldAmount} MYYTYÄ ASUNTOA</div>
    <div className={styles.sublabel}>{getTodayString()} mennessä</div>
    <div className={styles.apartmentWrapper}>
      {apartments.map(apartment =>
        <div className={styles.apartment} key={apartment.address}>
          <img className={styles.image} src={apartment.picture}></img>
          <div className={styles.apartmentInfo}>
            <div className={styles.address}>{apartment.address}</div>
            <div className={styles.size}>{apartment.size} m<sup className={styles.powerof}>2</sup></div>
          </div>
        </div>
      )}
    </div>
  </div>
}

export default Sold
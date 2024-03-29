import styles from '../../styles/Sold.module.css'
import Image from "next/image";

const Sold = ({ apartments, soldAmount }) => {

  return <div className={styles.container}>
    <span className={styles.idAnchor} id="myydyt"></span>
    <div className={styles.label}>MYYTYJÄ KOHTEITA</div>
    <div className={styles.apartmentWrapper}>
      {apartments.map((apartment, index) =>
        <div className={styles.apartment} key={index}>
          <Image className={styles.image} width={600} height={300} src={"https:" + apartment.picture} />
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
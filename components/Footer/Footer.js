import styles from '../../styles/Footer.module.css'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";

const Footer = ({ info }) => {

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={info.logo} alt="ROOF logo" height={100} width={250} />
      <div className={styles.info}>
        <div className={styles.label}>{info.companyName}</div>
        <div>{info.companyAddress}</div>
        <div><a href={info.companyWebpage} target="_blank">{info.companyWebpage}</a></div>
        <div>{info.companyId}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Miko Rikala</div>
        <div><a href={"tel:" + info.phone} >{info.phone}</a></div>
        <div><a href={"mailto:" + info.email} >{info.email}</a></div>
        <div className={styles.someContainer}>
          <a href={info.instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} className={styles.someIcon} />
          </a>
          <a href={info.facebook} target="_blank">
            <FontAwesomeIcon icon={faFacebook} className={styles.someIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
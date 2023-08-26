import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Slider.module.css'

const Slider = ({ open, setOpen, info }) => {

    const isOpen = () => open ? '0px' : '100vw'

    return (
        <div className={styles.container} style={{ left: isOpen() }}>
            <div className={styles.navigationList}>
                <a href={`#kuka`} onClick={() => setOpen(false)}><div className={styles.listItem}>Minusta</div></a>
                <a href={`#myydyt`} onClick={() => setOpen(false)}><div className={styles.listItem}>Myytyjä</div></a>
                <a href={`#palaute`} onClick={() => setOpen(false)}><div className={styles.listItem}>Asiakaskokemukset</div></a>
                <a href={`#yhteystiedot`} onClick={() => setOpen(false)}><div className={styles.listItem}>Ota yhteyttä</div></a>
                <a className={`${styles.listItem} ${styles.oikotieButton}`} href="https://asunnot.oikotie.fi/yritys/roof-lkv/miko-rikala-16410180" target="_blank">
                    <img className={styles.oikotieLogo} src="oikotie_blue.svg"></img>
                    <div className={styles.oikotieText}>Myynnissä</div>
                </a>
            </div>
            <div className={styles.contactInformation}>
                <a href={"tel:" + info.phone} className={styles.information}>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className={styles.informationText}>{info.phone}</div>
                </a>
                <a  href={"mailto:" + info.email} className={styles.information}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className={styles.informationText}>{info.email}</div>
                </a>
            </div>
        </div>
    )
}

export default Slider
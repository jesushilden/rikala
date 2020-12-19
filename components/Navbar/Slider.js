import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Slider.module.css'

const Slider = ({ open, setOpen, info }) => {

    const isOpen = () => open ? '0px' : '100vw'

    return (
        <div className={styles.container} style={{ left: isOpen() }}>
            <div className={styles.navigationList}>
                <a href={`#kuka`} onClick={() => setOpen(false)}><div className={styles.listItem}>Minusta</div></a>
                <a href={`#myydyt`} onClick={() => setOpen(false)}><div className={styles.listItem}>Myydyt</div></a>
                <a href={`#palaute`} onClick={() => setOpen(false)}><div className={styles.listItem}>Asiakaskokemukset</div></a>
                <a href={`#yhteystiedot`} onClick={() => setOpen(false)}><div className={styles.listItem}>Ota yhteyttä</div></a>
                <a className={`${styles.listItem} ${styles.oikotieButton}`} href="https://asunnot.oikotie.fi/yritys/roof-group-helsinki/miko-rikala-15811780" target="_blank">
                    <img className={styles.oikotieLogo} src="oikotie_blue.svg"></img>
                    <div className={styles.oikotieText}>Myynnissä</div>
                </a>
            </div>
            <div className={styles.contactInformation}>
                <div className={styles.information}>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className={styles.informationText}>{info.phone}</div>
                </div>
                <div className={styles.information}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className={styles.informationText}>{info.email}</div>
                </div>
            </div>
        </div>
    )
}

export default Slider
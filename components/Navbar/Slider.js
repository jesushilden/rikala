import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Slider.module.css'

const Slider = ({ open, setOpen }) => {

    const isOpen = () => open ? '0px' : '100vw'

    return (
        <div className={styles.container} style={{ left: isOpen() }}>
            <div className={styles.navigationList}>
                <a href={`#prosessi`} onClick={() => setOpen(false)}><div className={styles.listItem}>Myyntiprosessi</div></a>
                <a href={`#kuka`} onClick={() => setOpen(false)}><div className={styles.listItem}>Minusta</div></a>
                <a href={`#myydyt`} onClick={() => setOpen(false)}><div className={styles.listItem}>Myydyt</div></a>
                <a href={`#palaute`} onClick={() => setOpen(false)}><div className={styles.listItem}>Asiakaskokemukset</div></a>
                <a href={`#yhteystiedot`} onClick={() => setOpen(false)}><div className={styles.listItem}>Ota yhteyttä</div></a>
            </div>
        </div>
    )
}

export default Slider
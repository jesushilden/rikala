import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Slider.module.css'

const Slider = ({open}) => {

    const isOpen = () => open ? '0px' : '100vw'

    return (
        <div className={styles.container} style={{left: isOpen()}}>
            <div className={styles.navigationList}>
                <div className={styles.listItem}>Myyntiprosessi</div>
                <div className={styles.listItem}>Minusta</div>
                <div className={styles.listItem}>Myydyt</div>
                <div className={styles.listItem}>Asiakaskokemukset</div>
                <div className={styles.listItem}>Ota yhteyttä</div>
            </div>
        </div>
    )
}

export default Slider
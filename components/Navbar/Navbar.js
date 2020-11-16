import { faBars, faCocktail, faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Slider from './Slider'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Miko Rikala</div>
            <div className={styles.navigationList}>
                <div className={styles.listItem}>Myyntiprosessi</div>
                <div className={styles.listItem}>Minusta</div>
                <div className={styles.listItem}>Myydyt</div>
                <div className={styles.listItem}>Asiakaskokemukset</div>
                <div className={styles.listItem}>Ota yhteyttä</div>
            </div>
            <div className={styles.navigationButton} onClick={() => setOpen(!open)}>
                {open?
                    <FontAwesomeIcon icon={faTimes} />
                    :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
            <Slider open={open}/>
        </div>
    )
}

export default Navbar
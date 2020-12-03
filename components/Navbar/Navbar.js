import { faBars, faCocktail, faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Slider from './Slider'

const Navbar = ({ logo }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <a href="#otsikko"><img className={styles.logo} src={logo}></img></a>
            <div className={styles.navigationList}>
                <a href={`#kuka`}><div className={styles.listItem}>Kuka on Miko</div></a>
                <a href={`#myydyt`}><div className={styles.listItem}>Myydyt</div></a>
                <a href={`#palaute`}><div className={styles.listItem}>Palautteet</div></a>
                <a href={`#yhteystiedot`}><div className={styles.listItem}>Ota yhteyttä</div></a>
            </div>
            <div className={styles.navigationButton} onClick={() => setOpen(!open)}>
                {open ?
                    <FontAwesomeIcon icon={faTimes} />
                    :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
            <Slider open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Navbar
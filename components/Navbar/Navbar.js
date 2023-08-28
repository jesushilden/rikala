import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Slider from './Slider'
import Image from "next/image";

const Navbar = ({ logo, info }) => {
    const [open, setOpen] = useState(false)

    const toggleSlider = (value) => {
        if (value) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
        setOpen(value)
    }

    return (
        <div className={styles.container}>
            <a href="#otsikko">
                <Image className={styles.logo} src={logo} alt="ROOF logo" loading="eager" height={50} width={125} />
            </a>
            <div className={styles.navigationList}>
                <a href={`#kuka`}><div className={styles.listItem}>Minusta</div></a>
                <a href={`#myydyt`}><div className={styles.listItem}>Myytyjä</div></a>
                <a href={`#palaute`}><div className={styles.listItem}>Palautteet</div></a>
                <a href={`#yhteystiedot`}><div className={styles.listItem}>Ota yhteyttä</div></a>
                <div className={`${styles.listItem} ${styles.someButtons}`}>
                    <a href={info.instagram} target="_blank" className={styles.someIcon}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={info.facebook} target="_blank" className={styles.someIcon}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <a className={`${styles.listItem} ${styles.oikotieButton}`} href="https://asunnot.oikotie.fi/yritys/roof-lkv/miko-rikala-16410180" target="_blank">
                    <img className={styles.oikotieLogo} src="oikotie.svg"></img>
                    <div className={styles.oikotieText}>Myynnissä</div>
                </a>
            </div>
            <div className={styles.navigationButtons}>
                {open && <div className={styles.someButtons}>
                    <a href={info.instagram} target="_blank" className={styles.someIcon}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={info.facebook} target="_blank" className={styles.someIcon}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>}
                <div className={styles.navigationButton} onClick={() => toggleSlider(!open)}>
                    {open ?
                        <FontAwesomeIcon icon={faTimes} />
                        :
                        <FontAwesomeIcon icon={faBars} />
                    }
                </div>
            </div>
            <Slider open={open} setOpen={toggleSlider} info={info} />
        </div>
    )
}

export default Navbar
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {

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
            <div className={styles.navigationButton}>
                button
            </div>
        </div>
    )
}

export default Navbar
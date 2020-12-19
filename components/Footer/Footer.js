import styles from '../../styles/Footer.module.css'

const Footer = ({ info }) => {

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={info.logo}></img>
      <div className={styles.info}>
        <div className={styles.label}>{info.companyName}</div>
        <div>{info.companyAddress}</div>
        <div><a href={info.companyWebpage}>{info.companyWebpage}</a></div>
        <div>{info.companyId}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Miko Rikala</div>
        <div>{info.phone}</div>
        <div>{info.email}</div>
      </div>
    </div>
  )
}

export default Footer
import styles from '../../styles/Process.module.css'

const Process = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        Ota yhteyttä
      </div>
      <div className={styles.node}>
        <div className={styles.line}></div>
        <div className={styles.circle}>1</div>
      </div>
      <div className={styles.node}>
        <div className={styles.line}></div>
        <div className={styles.circle}>2</div>
        <div className={styles.info}>Suomessa asunnot luokitellaan käyttötavan mukaan jatkuvaan asuinkäyttöön tarkoitetuiksi tai vapaa-ajan asunnoiksi. Asuntoon liittyvät määritykset on koottu lähinnä Suomen rakentamismääräyskokoelman osaan Asuntosuunnittelu (G1).</div>
      </div>
      <div className={styles.node}>
        <div className={styles.line}></div>
        <div className={styles.circle}>3</div>
        <div className={styles.info}>Nykyisin yhä useampi ihminen asuu kaupungeissa tai niiden laitamilla. Asumisen siirtyminen maaseudulta kaupunkeihin, kaupungistuminen, on maailmanlaajuinen ilmiö.</div>
      </div>
      <div className={styles.node}>
        <div className={styles.line}></div>
        <div className={styles.circle}>4</div>
        <div className={styles.info}>Vuonna 2009 Suomessa asuinkerrostaloissa asui 32,7 % asuntokunnista, omakotitaloissa 47 % ja rivitaloissa 19,8 %.</div>
      </div>
      <div className={styles.node}>
        <div className={styles.line}></div>
        <div className={styles.circle}>5</div>
        <div className={styles.info}>Suomessa prosentissa asunnoista ei ole suihkua ja 0,8 % asunnoista ei sisällä sisävessaa.</div>
      </div>
    </div>
  )
}

export default Process
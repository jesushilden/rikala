import styles from '../../styles/Process.module.css'
import { faBars, faChartBar, faPhotoVideo, faSignature, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const Process = () => {

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  function onScroll() {
    const nodePosition1 = document.getElementById("node1").offsetTop;
    const nodePosition2 = document.getElementById("node2").offsetTop;
    const nodePosition3 = document.getElementById("node3").offsetTop;
    const nodePosition4 = document.getElementById("node4").offsetTop;

    if (window.pageYOffset + window.innerHeight > nodePosition1 + 200) {
      document.getElementById("node1").style.opacity = '1'
    }
    if (window.pageYOffset + window.innerHeight > nodePosition2 + 200) {
      document.getElementById("node2").style.opacity = '1'
    }
    if (window.pageYOffset + window.innerHeight > nodePosition3 + 200) {
      document.getElementById("node3").style.opacity = '1'
    }
    if (window.pageYOffset + window.innerHeight > nodePosition4 + 200) {
      document.getElementById("node4").style.opacity = '1'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        Ota yhteyttä
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)` }} >
          </div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faPhotoVideo} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node1">
          <div className={styles.title}> Helppoa </div>
          <div className={styles.info}>Suomessa prosentissa asunnoista ei ole suihkua ja 0,8 % asunnoista ei sisällä sisävessaa.</div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={`${styles.leftColumn} ${styles.textColumn}`} id="node2">
          <div className={styles.title}> Kivaa </div>
          <div className={styles.info}>Suomessa asunnot luokitellaan käyttötavan mukaan jatkuvaan asuinkäyttöön tarkoitetuiksi tai vapaa-ajan asunnoiksi. Asuntoon liittyvät määritykset on koottu lähinnä Suomen rakentamismääräyskokoelman osaan Asuntosuunnittelu (G1).</div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faChartBar} /></div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1302&q=80` }} ></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541404421518-1bf8f79c9789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)` }} ></div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faUsers} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node3">
          <div className={styles.title}> Kevyttä </div>
          <div className={styles.info}>Nykyisin yhä useampi ihminen asuu kaupungeissa tai niiden laitamilla. Asumisen siirtyminen maaseudulta kaupunkeihin, kaupungistuminen, on maailmanlaajuinen ilmiö.</div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={`${styles.leftColumn} ${styles.textColumn}`} id="node4">
          <div className={styles.title}> Kätevää </div>
          <div className={styles.info}>Vuonna 2009 Suomessa asuinkerrostaloissa asui 32,7 % asuntokunnista, omakotitaloissa 47 % ja rivitaloissa 19,8 %.</div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faSignature} /></div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)` }} ></div>
        </div>
      </div>
      <div className={styles.endNode}>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.centerEndColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faTrophy} /></div>
        </div>
        <div className={styles.rightColumn}>
        </div>
      </div>
    </div>
  )
}

export default Process
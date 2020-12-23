import styles from '../../styles/TimelineMobile.module.css'
import { faChartBar, faPhotoVideo, faSignature, faTrophy, faUsers, faHome } from '@fortawesome/free-solid-svg-icons'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const TimelineMobile = ({ process }) => {

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

  const getStepByOrder = (order) => {
    return process.items.find(item => item.fields.order === order)
  }

  return (
    <div className={styles.container}>
      <a href="#yhteystiedot">
        <div className={styles.button}>
          Varaa arviokäynti
        </div>
      </a>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faPhotoVideo} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node1">
          <div className={styles.title}>{getStepByOrder(1).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(1).fields.description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faChartBar} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node2">
          <div className={styles.title}>{getStepByOrder(2).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(2).fields.description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faUsers} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node3">
          <div className={styles.title}>{getStepByOrder(3).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(3).fields.description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faSignature} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node4">
          <div className={styles.title}>{getStepByOrder(4).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(4).fields.description) }}></div>
        </div>
      </div>
      <div className={styles.endNode}>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.centerEndColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faHome} /></div>
        </div>
        <div className={styles.rightColumn}>
        </div>
      </div>
    </div>
  )
}

export default TimelineMobile
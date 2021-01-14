import styles from '../../styles/TimelinePC.module.css'
import { faChartBar, faPhotoVideo, faSignature, faTrophy, faUsers, faHome } from '@fortawesome/free-solid-svg-icons'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const TimelinePC = ({ process }) => {

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  function onScroll() {
    const nodePosition1 = document.getElementById("node1").offsetTop;
    const nodePosition2 = document.getElementById("node2").offsetTop;
    const nodePosition3 = document.getElementById("node3").offsetTop;
    const nodePosition4 = document.getElementById("node4").offsetTop;
    const nodePosition5 = document.getElementById("node5").offsetTop;

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
    if (window.pageYOffset + window.innerHeight > nodePosition5 + 200) {
      document.getElementById("node5").style.opacity = '1'
    }
  }

  const getStepByOrder = (order) => {
    return process.find(item => item.order === order)
  }

  return (
    <div className={styles.container}>
      <div className={styles.startNode}>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.buttonColumn}>
          <div className={styles.line}></div>
          <div className={styles.button}>
            <a href="#yhteystiedot">
              Varaa arviokäynti
              </a>
          </div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`}>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(${getStepByOrder(1).picture})` }} >
          </div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faPhotoVideo} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node1">
          <div className={styles.title}>{getStepByOrder(1).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(1).description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={`${styles.leftColumn} ${styles.textColumn}`} id="node2">
          <div className={styles.title}>{getStepByOrder(2).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(2).description) }}></div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faChartBar} /></div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(${getStepByOrder(2).picture})` }} ></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(${getStepByOrder(3).picture})` }} ></div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faUsers} /></div>
        </div>
        <div className={`${styles.rightColumn} ${styles.textColumn}`} id="node3">
          <div className={styles.title}>{getStepByOrder(3).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(3).description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={`${styles.leftColumn} ${styles.textColumn}`} id="node4">
          <div className={styles.title}>{getStepByOrder(4).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(4).description) }}></div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faSignature} /></div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.image} style={{ backgroundImage: `url(${getStepByOrder(4).picture})` }} ></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={`${styles.leftColumn} ${styles.textColumn}`}>
        </div>
        <div className={styles.centerEndColumn}>
          <div className={styles.centerContent}>
            <div className={styles.line}></div>
            <div className={styles.endCircle}><FontAwesomeIcon icon={faHome} /></div>
          </div>
          <div className={`${styles.centerEmpty} ${styles.textColumn}`} id="node5">
            <div className={styles.title}>{getStepByOrder(5).name}</div>
            <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(5).description) }}></div>
          </div>
        </div>
        <div className={styles.rightColumn}>
        </div>
      </div>
    </div>
  )
}

export default TimelinePC
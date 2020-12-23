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
          <div className={styles.image} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)` }} >
          </div>
        </div>
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
        <div className={`${styles.leftColumn} ${styles.textColumn}`} id="node2">
          <div className={styles.title}>{getStepByOrder(2).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(2).fields.description) }}></div>
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
          <div className={styles.title}>{getStepByOrder(3).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(3).fields.description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={`${styles.leftColumn} ${styles.textColumn}`} id="node4">
          <div className={styles.title}>{getStepByOrder(4).fields.name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(4).fields.description) }}></div>
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
          <div className={styles.circle}><FontAwesomeIcon icon={faHome} /></div>
        </div>
        <div className={styles.rightColumn}>
        </div>
      </div>
    </div>
  )
}

export default TimelinePC
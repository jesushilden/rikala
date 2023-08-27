import styles from '../../styles/TimelineMobile.module.css'
import { faChartBar, faPhotoVideo, faUsers, faHome } from '@fortawesome/free-solid-svg-icons'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TimelineMobile = ({ process }) => {

  const getStepByOrder = (order) => {
    return process.find(item => item.order === order)
  }

  return (
    <div className={styles.container}>
      <a className={styles.button} href="#yhteystiedot">
        Varaa arviokäynti
      </a>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faPhotoVideo} /></div>
        </div>
        <div className={styles.rightColumn} id="node1">
          <div className={styles.title}>{getStepByOrder(1).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(1).description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faChartBar} /></div>
        </div>
        <div className={styles.rightColumn} id="node2">
          <div className={styles.title}>{getStepByOrder(2).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(2).description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faUsers} /></div>
        </div>
        <div className={styles.rightColumn} id="node3">
          <div className={styles.title}>{getStepByOrder(3).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(3).description) }}></div>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faUsers} /></div>
        </div>
        <div className={styles.rightColumn} id="node4">
          <div className={styles.title}>{getStepByOrder(4).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(4).description) }}></div>
        </div>
      </div>
      <div className={styles.endNode}>
        <div className={styles.centerEndColumn}>
          <div className={styles.centerEndContent}>
            <div className={styles.endLine}></div>
            <div className={styles.endCircle}><FontAwesomeIcon icon={faHome} /></div>
          </div>
          <div className={styles.centerEndEmpty}>
          </div>
        </div>
        <div className={styles.rightEndColumn} id="node5">
        <div className={styles.title}>{getStepByOrder(5).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(5).description) }}></div>
        </div>
      </div>
    </div>
  )
}

export default TimelineMobile
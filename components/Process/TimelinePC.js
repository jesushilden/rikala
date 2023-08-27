import styles from '../../styles/TimelinePC.module.css'
import { faChartBar, faPhotoVideo, faSignature, faUsers, faHome } from '@fortawesome/free-solid-svg-icons'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";

const TimelinePC = ({ process }) => {

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
        <div className={styles.rightColumn}>
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
          <Image src={"https:" + getStepByOrder(1).picture} alt={`Kuva joka kuvailee: ${getStepByOrder(1).name}`} width={400} height={275} style={{objectFit: "cover"}} />
        </div>
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
        <div className={styles.leftColumn} id="node2">
          <div className={styles.title}>{getStepByOrder(2).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(2).description) }}></div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faChartBar} /></div>
        </div>
        <div className={styles.rightColumn}>
        <Image src={"https:" + getStepByOrder(2).picture} alt={`Kuva joka kuvailee: ${getStepByOrder(2).name}`} width={400} height={275} style={{objectFit: "cover"}} />
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
        <Image src={"https:" + getStepByOrder(3).picture} alt={`Kuva joka kuvailee: ${getStepByOrder(3).name}`} width={400} height={275} style={{objectFit: "cover"}} />
        </div>
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
        <div className={styles.leftColumn} id="node4">
          <div className={styles.title}>{getStepByOrder(4).name}</div>
          <div className={styles.info} dangerouslySetInnerHTML={{ __html: documentToHtmlString(getStepByOrder(4).description) }}></div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.line}></div>
          <div className={styles.circle}><FontAwesomeIcon icon={faSignature} /></div>
        </div>
        <div className={styles.rightColumn}>
        <Image src={"https:" + getStepByOrder(4).picture} alt={`Kuva joka kuvailee: ${getStepByOrder(4).name}`} width={400} height={275} style={{objectFit: "cover"}} />
        </div>
      </div>
      <div className={styles.node}>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.centerEndColumn}>
          <div className={styles.centerContent}>
            <div className={styles.line}></div>
            <div className={styles.endCircle}><FontAwesomeIcon icon={faHome} /></div>
          </div>
          <div className={styles.centerEmpty} id="node5">
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
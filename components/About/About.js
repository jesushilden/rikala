import styles from '../../styles/About.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const About = ({ about }) => {
  return (
    <div className={styles.container}>
      <span className={styles.idAnchor} id="kuka"></span>
      <div className={styles.title}>{about.fields.title}</div>
      <div className={styles.content}>
        <div className={styles.picture} style={{ backgroundImage: `url(${about.picture})` }}>
        </div>
        <div className={styles.presentation}>
          <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(about.fields.presentation) }} className={styles.text}></div>
        </div>
      </div>
    </div>
  )
}

export default About
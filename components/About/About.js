import styles from '../../styles/About.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const About = ({ about, soldAmount, soldAmountYear }) => {

  const getTodayString = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return day + '.' + month + '.' + year
  }

  return (
    <div className={styles.container}>
      <span className={styles.idAnchor} id="kuka"></span>
      <div className={styles.title}>{about.fields.title}</div>
      <div className={styles.content}>
        <div className={styles.picture} style={{ backgroundImage: `url(${about.picture})` }}>
          <div className={styles.badge}>
          <div className={styles.soldAmount}>{soldAmount}</div>
            <div className={styles.soldText}>myytyä kohdetta</div>
            <div className={styles.soldText}>{soldAmountYear}</div>
          </div>
        </div>
        <div className={styles.presentation}>
          <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(about.fields.presentation) }} className={styles.text}></div>
        </div>
      </div>
    </div>
  )
}

export default About
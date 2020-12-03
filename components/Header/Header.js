import styles from '../../styles/Header.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const Header = ({ header }) => {

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${header.picture})` }}>
      <span className={styles.idAnchor} id="otsikko"></span>
      <div className={styles.information}>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: documentToHtmlString(header.fields.description) }}></div>
        <div className={styles.title}>{header.fields.name}</div>
      </div>
      <div className={styles.mikosSpace}>
      </div>
    </div>
  )
}

export default Header
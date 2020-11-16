import styles from '../../styles/Header.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const Header = ({ header }) => {
  
  return (
    //<div className={styles.container} style={{backgroundImage: `url(${header.picture})`}}>
    <div className={styles.container} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1898&q=80)` }}>
      <div className={styles.mikosSpace}>
      </div>
      <div className={styles.information}>
        <div className={styles.title}>{header.fields.name}</div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: documentToHtmlString(header.fields.description) }}></div>
      </div>
    </div>
  )
}

export default Header
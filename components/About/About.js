import styles from '../../styles/About.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const About = ({ about }) => {
  console.log(about)
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <div className={styles.image} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)` }} >
        </div>
        <div className={styles.imageBorder}>
        </div>
      </div>
      <div className={styles.presentation}>
        <div>{about.fields.title}</div>
        <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(about.fields.presentation) }}></div>
      </div>
    </div>
  )
}

export default About
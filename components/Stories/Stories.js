import styles from '../../styles/Stories.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stories = ({ stories }) => {
  return <div className={styles.container}>
    <span className={styles.idAnchor} id="palaute"></span>
    <div className={styles.label}>ASIAKASPALAUTTEET</div>
    {stories.map(story =>
      <div className={styles.storyWrapper} key={story.name}>
        <FontAwesomeIcon className={styles.quoteIcon} icon={faQuoteLeft}/>
        <div className={styles.story} dangerouslySetInnerHTML={{ __html: documentToHtmlString(story.story)}}></div>
        <div className={styles.name}>{story.name}</div>
      </div>
    )}
  </div>
}

export default Stories
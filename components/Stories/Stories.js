import styles from '../../styles/Stories.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const Stories = ({ stories }) => {
  return <div className={styles.container}>
    <div className={styles.label}>ASIAKASTARINAT</div>
    {stories.map(story =>
      <div className={styles.storyWrapper} key={story.name}>
        <div className={styles.story} dangerouslySetInnerHTML={{ __html: documentToHtmlString(story.story)}}></div>
        <div className={styles.name}>{story.name}</div>
      </div>
    )}
  </div>
}

export default Stories
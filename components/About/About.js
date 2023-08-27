import styles from '../../styles/About.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Image from "next/image";

const About = ({ about, soldAmount, soldAmountYear }) => {

  return (
    <div className={styles.container}>
      <span className={styles.idAnchor} id="kuka"></span>
      <div className={styles.title}>{about.fields.title}</div>
      <div className={styles.content}>
        <div className={styles.pictureWrapper}>
          <Image className={styles.image} src={about.picture} alt="Kuva mikosta" width={600} height={600} />
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
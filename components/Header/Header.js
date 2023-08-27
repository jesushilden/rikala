import styles from '../../styles/Header.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Image from "next/image";

const Header = ({ header }) => {

  return (
    <div className={styles.container}>
      <Image
        src={header.picture}
        alt="Miko Rikala kuvassa"
        style={{zIndex: -1, objectFit: "cover", objectPosition: "92%"}}
        loading="eager"
        unoptimized
        fill
      />
      <span className={styles.idAnchor} id="otsikko"></span>
      <div className={styles.information}>
        <div className={styles.title}>{header.fields.name}</div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: documentToHtmlString(header.fields.description) }}></div>
        <div className={styles.textMobile} dangerouslySetInnerHTML={{ __html: documentToHtmlString(header.fields.descriptionMobile) }}></div>
      </div>
      <div className={styles.mikosSpace}>
      </div>
    </div>
  )
}

export default Header
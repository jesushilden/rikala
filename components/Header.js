import styles from '../styles/Header.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const Header = ({ header }) => {

  return (
    <div style={{backgroundImage: `url(${header.picture})`}}>
      <div>{header.fields.name}</div>
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(header.fields.description) }}></div>
    </div>
  )
}

export default Header
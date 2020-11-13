import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import About from '../components/About'
import Process from '../components/Process'
import Sold from '../components/Sold'
import Social from '../components/Social'
import Contact from '../components/Contact'
import Stories from '../components/Stories'
import contentfulService from '../utils/contentfulService'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Miko Rikala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.page}>
          <div className={styles.contentBlock}>
            <Header header={props.header} />
          </div>
          <div className={styles.contentBlock}><About /></div>
          <div className={styles.contentBlock}><Process /></div>
          <div className={styles.contentBlock}><Sold /></div>
          <div className={styles.contentBlock}><Social /></div>
          <div className={styles.contentBlock}><Contact /></div>
          <div className={styles.contentBlock}><Stories /></div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {

  const header = await contentfulService.getEntrie('1uvdCG04dNhMCOPzN5iLWi')
  const about = await contentfulService.getEntrie('1K2OSmNIgXt0PIKlr8b922')
  const process = await contentfulService.getProcessEntries()

  const headerPicture = await contentfulService.getAssetUrl(header.fields.picture.sys.id)
  
  return {
    props: { 
      header: {...header, picture: headerPicture},
      about: about,
      process: process
    },
  }
}
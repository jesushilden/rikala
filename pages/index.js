import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Process from '../components/Process/Process'
import Sold from '../components/Sold/Sold'
import Contact from '../components/Contact/Contact'
import Stories from '../components//Stories/Stories'
import contentfulService from '../utils/contentfulService'
import Navbar from '../components/Navbar/Navbar'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Miko Rikala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.page}>
          <div className={styles.contentBlock} id="otsiko">
            <Header header={props.header} />
          </div>
          <div className={styles.contentBlock} id="prosessi"> 
            <Process process={props.process}/>
          </div>
          <div className={styles.contentBlock} id="kuka">
            <About about={props.about} />
          </div>
          <div className={styles.contentBlock} id="myydyt">
            <Sold apartments={props.apartments} />
          </div>
          <div className={`${styles.contentBlock} ${styles.contentBlockDark}`} id="palaute">
            <Stories stories={props.stories} />
          </div>
          <div className={styles.contentBlock} id="yhteystiedot">
            <Contact />
          </div>
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
  const apartments = await contentfulService.getApartmentEntries()
  const stories = await contentfulService.getStoryEntries()

  const headerPicture = await contentfulService.getAssetUrl(header.fields.picture.sys.id)

  return {
    props: {
      header: { ...header, picture: headerPicture },
      about: about,
      process: process,
      apartments: apartments,
      stories: stories
    },
  }
}
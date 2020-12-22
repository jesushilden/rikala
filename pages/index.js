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
import Footer from '../components/Footer/Footer'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miko Rikala</title>
        <link rel="icon" href="/MR_white.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar logo={props.info.logo} info={props.info}/>
        <div className={styles.page}>
          <div className={styles.contentBlock}>
            <Header header={props.header} />
          </div>
          <div className={styles.contentBlock}> 
            <Process process={props.process}/>
          </div>
          <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
            <About about={props.about} soldAmount={props.info.soldAmount}/>
          </div>
          <div className={styles.contentBlock}>
            <Sold apartments={props.apartments} />
          </div>
          <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
            <Stories stories={props.stories} />
          </div>
          <div className={styles.contentBlock}>
            <Contact />
          </div>
          <div className={`${styles.contentBlock} ${styles.contentBlockDarkBlue}`}>
            <Footer info={props.info}/>
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
  const info = await contentfulService.getEntrie('1rCyfuRoJj27hdZoboCcoj')

  const logoUrl = await contentfulService.getAssetUrl(info.fields.logo.sys.id)
  const headerPicture = await contentfulService.getAssetUrl(header.fields.picture.sys.id)
  const aboutPicture = await contentfulService.getAssetUrl(about.fields.picture.sys.id)

  return {
    props: {
      header: { ...header, picture: headerPicture },
      about: {...about, picture: aboutPicture},
      process: process,
      apartments: apartments,
      stories: stories,
      info: {...info.fields, logo: logoUrl }
    },
  }
}
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
import Script from "next/script";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miko Rikala - Kiinteistönvälitys</title>
        <meta name="description" content="Miko Rikala toimii kiinteistönvälittäjänä pääsääntöisesti Espoon alueella. Aluetuntemusta minulla on Espoon lisäksi myös Kauniaisissa, Kirkkonummella, Vantaalla ja Helsingin keskustassa sekä Lauttasaaressa. Harkitsetko asunnon vaihtoa? Varaa ilmainen arviokäynti."></meta>
        <meta name="keywords" content="Miko Rikala, Kiinteistönvälitys, kiinteistönvälittäjä, vuokravälitys, asunnon myynti, kiinteistövälittäjä espoo, kiinteistövälittäjä helsinki"></meta>
        <meta property="og:title" content="Miko Rikala - Kiinteistönvälitys"></meta>
        <meta property="og:description" content="Miko Rikala toimii kiinteistönvälittäjänä pääsääntöisesti Espoon alueella. Aluetuntemusta minulla on Espoon lisäksi myös Kauniaisissa, Kirkkonummella, Vantaalla ja Helsingin keskustassa sekä Lauttasaaressa. Harkitsetko asunnon vaihtoa? Varaa ilmainen arviokäynti."></meta>
        <meta property="og:image" content={props.header.picture}></meta>
        <meta property="og:url" content="https://www.mikorikala.fi/"></meta>
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="google-site-verification" content="Avw38jTiFG68jb_viHt2IkvImJOEOXXI9thTvKv_ekY" />
        <link rel="icon" href="/MR_white.ico" />
        <Script
            id="facebook-pixel-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '817234820200504');
                fbq('track', 'PageView');
              `,
            }}
        />
        <noscript id="facebook-pixel-image">
          <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=817234820200504&ev=PageView&noscript=1"
          />
        </noscript>

        <!-- Meta Pixel Code -->
        <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '817234820200504');
          fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
                       src="https://www.facebook.com/tr?id=817234820200504&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Meta Pixel Code -->
      </Head>

      <main className={styles.main}>
        <Navbar logo={props.info.logo} info={props.info} />
        <div className={styles.page}>
          <div className={styles.contentBlock}>
            <Header header={props.header} />
          </div>
          <div className={styles.contentBlock}>
            <Process process={props.process} />
          </div>
          <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
            <About about={props.about} soldAmount={props.info.soldAmount} soldAmountYear={props.info.soldAmountYear} />
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
            <Footer info={props.info} />
          </div>
        </div>
      </main>
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
      about: { ...about, picture: aboutPicture },
      process: process,
      apartments: apartments,
      stories: stories,
      info: { ...info.fields, logo: logoUrl }
    },
  }
}
import styles from '../../styles/Process.module.css'
import TimelinePC from './TimelinePC'
import TimelineMobile from './TimelineMobile'
import { useEffect, useState } from 'react'

const Process = () => {

  const [isMobile, setDevice] = useState(false)

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [])

  function onResize() {
    setDevice(window.innerWidth < 1050)
    console.log(isMobile)
  }

  return (
    <div className={styles.container}>
      {isMobile ? <TimelineMobile /> : <TimelinePC />}
    </div>
  )
}

export default Process
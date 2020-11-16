import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = async () => {
    
    if (!name || !email || !message) {
      console.log('Missing info')
      return
    }
    
    const body = JSON.stringify({
      name,
      phone,
      email,
      message
    })
    await fetch('/api/email', { method: 'POST', body: body })
  }


  return <div className={styles.container}>
    <div className={styles.label}>OTA YHTEYTTÄ</div>
    <div className={styles.inputWrapper}>
      <input className={styles.textInput} placeholder='Nimi*' value={name} onChange={event => setName(event.target.value)}></input>
    </div>
    <div className={styles.inputWrapper}>
      <input className={styles.textInput} placeholder='Puhelinnumero' value={phone} onChange={event => setPhone(event.target.value)}></input>
    </div>
    <div className={styles.inputWrapper}>
      <input className={styles.textInput} placeholder='Sähköposti*' value={email} onChange={event => setEmail(event.target.value)}></input>
    </div>
    <div className={styles.inputWrapper}>
      <textarea rows={4} className={styles.textInput} placeholder='Viesti*' value={message} onChange={event => setMessage(event.target.value)}></textarea>
    </div>
    <div className={styles.submitButton} onClick={submit}>Lähetä</div>
  </div>
}

export default Contact
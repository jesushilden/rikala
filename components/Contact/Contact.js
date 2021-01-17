import { useState } from 'react'
import styles from '../../styles/Contact.module.css'
import { faThumbsUp, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [nameError, setNameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [globalError, setGlobalError] = useState('')

  const submit = async () => {

    let valid = true

    if (!name) {
      valid = false
      setNameError('Täytä vaadittu kenttä')
    }
    if (!email) {
      valid = false
      setEmailError('Täytä vaadittu kenttä')
    }
    if (!message) {
      valid = false
      setMessageError('Täytä vaadittu kenttä')
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      valid = false
      setEmailError('Sähköposti on väärässä muodossa')
    }

    if (!valid) {
      return
    }

    const body = JSON.stringify({
      name,
      phone,
      email,
      message
    })

    setSubmitting(true)

    try {
      const response = await fetch('/api/email', { method: 'POST', body: body })

      if (response.status === 200) {
        setSubmitted(true)
      } else {
        setGlobalError('Lomaketta ei voitu lähettää. Kokeile uudestaan tai ole suoraan yhteydessä.')
        setSubmitting(false)
      }
      
    } catch (error) {
      setGlobalError('Lomaketta ei voitu lähettää. Tarkista internetyhteytesi.')
      setSubmitting(false)
    }
  }

  const handleNameChange = (event) => {
    setNameError('')
    setName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhoneError('')
    setPhone(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmailError('')
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessageError('')
    setMessage(event.target.value)
  }

  if (submitted) {
    return <div className={styles.container}>
      <span className={styles.idAnchor} id="yhteystiedot"></span>
      <div className={styles.label}>KIITOS YHTEYDENOTOSTA</div>
      <div className={styles.sublabel}>Olen yhteydessä mahdollisimman pian.</div>
      <div className={styles.oklogo}>
        <FontAwesomeIcon icon={faThumbsUp} size='2x' />
      </div>
    </div>
  }


  return <div className={styles.container}>
    <span className={styles.idAnchor} id="yhteystiedot"></span>
    <div className={styles.label}>OTA YHTEYTTÄ</div>
    <div className={styles.sublabel}>Harkitsetko asunnon vaihtoa? Varaa ilmainen arviokäynti.</div>
    <div className={styles.inputWrapper}>
      <input className={`${styles.textInput} ${nameError ? styles.textInputError : ''}`} placeholder='Nimi*' value={name} onChange={handleNameChange}></input>
      <div className={styles.errorMessage}>{nameError}</div>
    </div>
    <div className={styles.inputWrapper}>
      <input className={`${styles.textInput} ${phoneError ? styles.textInputError : ''}`} placeholder='Puhelinnumero' value={phone} onChange={handlePhoneChange}></input>
      <div className={styles.errorMessage}>{phoneError}</div>
    </div>
    <div className={styles.inputWrapper}>
      <input className={`${styles.textInput} ${emailError ? styles.textInputError : ''}`} placeholder='Sähköposti*' inputMode={'email'} value={email} onChange={handleEmailChange}></input>
      <div className={styles.errorMessage}>{emailError}</div>
    </div>
    <div className={styles.inputWrapper}>
      <textarea rows={4} className={`${styles.textInput} ${messageError ? styles.textInputError : ''}`} placeholder='Viesti*' value={message} onChange={handleMessageChange}></textarea>
      <div className={styles.errorMessage}>{messageError}</div>
    </div>
    <div className={styles.inputWrapper}>
      <div className={styles.submitButton} onClick={submit}>
        {submitting ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Lähetä'}
      </div>
      <div className={styles.errorMessage}>{globalError}</div>
    </div>

  </div>
}

export default Contact
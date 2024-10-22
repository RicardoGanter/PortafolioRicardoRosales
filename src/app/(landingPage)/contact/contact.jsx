'use client'
import styles from '@/styles/(landingPage)/contact/contact.module.scss'
import AnimatedComponent from '../utils/animation'
import Button from '@/components/ui/button/button'
import Send from '@/public/Send.svg'
import Input from '@/components/ui/input/input'

const Contact = () => {
  // const sendMail = (e)=>{
  //     e.preventDefault()
  // }
  // const a = (a)=>{
  //     return console.log(a)
  // }
  return (
    <div className={styles.contain}>
      <AnimatedComponent animationType="rightToLeft">
        <h2 id="contact">Contacto</h2>
        <form onSubmit={sendMail} className={styles.form}>
          <label>Nombre</label>
          <Input functionOnChange={a} placeHolder="Tu nombre" />
          <label>Correo electrónico</label>
          <Input type="email" functionOnChange={a} placeHolder="Tu@email.com" />
          <label>Mensaje</label>
          <Input functionOnChange={a} placeHolder="Tu mensaje aquí..." />
          <Button text="Enviar mensaje" icon={<Send />} />
        </form>
      </AnimatedComponent>
    </div>
  )
}

export default Contact

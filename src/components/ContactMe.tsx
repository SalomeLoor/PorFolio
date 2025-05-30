import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import NavOptions from './NavOptions'

const ContactMe: React.FC = () => {
  return (
    <IonPage className="container">
      <IonContent>
        <h2>Hola</h2>
        <NavOptions />
      </IonContent>
    </IonPage>
  )
}

export default ContactMe

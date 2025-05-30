import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import NavOptions from '../components/NavOptions'

const MyProyects:React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <h2>Hola</h2>
            <NavOptions />
        </IonContent>
    </IonPage>
  )
}

export default MyProyects

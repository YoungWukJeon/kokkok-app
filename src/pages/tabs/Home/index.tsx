import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AreaName from '../../../components/AreaName';

import './index.scss';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AreaName name="괴산" color="rgb(148, 153, 210)" />
        <AreaName name="단양" color="rgb(94, 142, 191)" />
        <AreaName name="보은" color="rgb(94, 167, 191)" />
        <AreaName name="영동" color="rgb(94, 191, 142)" />
        <AreaName name="옥천" color="rgb(142, 191, 94)" />
        <AreaName name="음성" color="rgb(191, 133, 181)" />
        <AreaName name="제천" color="rgb(191, 133, 152)" />
        <AreaName name="증평" color="rgb(191, 159, 133)" />
        <AreaName name="진천" color="rgb(193, 179, 102)" />
        <AreaName name="청주" color="rgb(177, 210, 147)" />
        <AreaName name="충주" color="rgb(147, 210, 175)" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
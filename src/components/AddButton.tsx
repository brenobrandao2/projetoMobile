import React, { useState } from 'react';
import { IonContent, IonFabButton, IonAlert } from '@ionic/react';
import './AddButton.css';
import { GrAdd } from 'react-icons/gr';
import * as TarefaAPI from '../services/TarefaAPI';

const AddButton: React.FC<{refresh: Function}> = ({refresh}) => {

  const [showAlert, setShowAlert] = useState<boolean>(false);
 
  const newTask = async () => {
    const response = await TarefaAPI.createTask();
    if(response.id)
      refresh();
    else if(response.non_field_errors && response.non_field_errors[0] == "The fields title, description must make a unique set.")
      setShowAlert(true);
  }

  return (
    <IonContent>
      <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={''}
          subHeader={'Já foi criada uma nova tarefa!'}
          message={''}
          buttons={['OK']}
        />
      <IonFabButton onClick={() => newTask()} className="fab" slot="fixed" color="light">
          <GrAdd size="18"/>
      </IonFabButton>
    </IonContent>
  );
};

export default AddButton;
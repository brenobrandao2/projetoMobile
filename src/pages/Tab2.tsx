import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import AddButton from '../components/AddButton'; 
import TaskCard from '../components/TaskCard';
import * as TarefaAPI from '../services/TarefaAPI';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [listaTarefas, setListaTarefas] = useState<{"id": number, "title": string, "status": number, "description": string, "created_at": Date, "updated_at": Date, "completed_at": Date, "excluded_at": Date}[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getTarefas = async () => {
    const response = await TarefaAPI.getListByStatus(0);
    setListaTarefas(response.results);
  };

  useEffect(() => {
    getTarefas();
    setLoading(false);
  }, [])

  const refresh = async () => {
    setLoading(true);
    await getTarefas();
    window.location.reload(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TO DO</IonTitle>
        </IonToolbar>
      </IonHeader>
      {loading ?
      <IonContent>
        <IonSpinner id="loadingSpinner" />
      </  IonContent>
      :
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TO DO</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          listaTarefas.map(tarefa => {
            return <TaskCard key={tarefa.id} id={tarefa.id} titulo={tarefa.title} descricao={tarefa.description} status={tarefa.status} refresh={() => refresh()}/>
          })
        }
      </IonContent>}
    </IonPage>
  );
};

export default Tab2;

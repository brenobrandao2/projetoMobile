import React, { useState, useEffect } from 'react';
import { IonTabBar, IonButton, IonTabButton, IonLabel, IonIcon, IonContent } from '@ionic/react';
import { checkmarkOutline, stopOutline, playOutline, refresh } from 'ionicons/icons';
import './StatusBar.css';
import * as TarefaAPI from '../services/TarefaAPI';

const StatusTab: React.FC<{id: number, status: number, refresh: Function}> = ({id, status, refresh}) => {
    const [todoColor, setTodoColor] = useState<string>();
    const [doingColor, setDoingColor] = useState<string>();
    const [doneColor, setDoneColor] = useState<string>();

    useEffect(() => {
        switch(status) {
            case 0:
                setTodoColor("light");
                setDoingColor("medium");
                setDoneColor("medium");
                break;
            case 1:
                setTodoColor("medium");
                setDoingColor("light");
                setDoneColor("medium");
                break;
            case 2:
                setTodoColor("medium");
                setDoingColor("medium");
                setDoneColor("light");
                break;
        }
    }, []);

    const changeStatus = (value: number) => {
        const tarefa: {"id": number, "status": number} = {
            "id": id,
            "status": value
        }
        TarefaAPI.editTask(tarefa);
        refresh();
    }

    return (
    <div id="statusArea">
        <IonButton color={todoColor} onClick={() => changeStatus(0)}>TO DO</IonButton>
        <IonButton color={doingColor} onClick={() => changeStatus(1)}>DOING</IonButton>
        <IonButton color={doneColor} onClick={() => changeStatus(2)}>DONE</IonButton>
    </div>

    );
};

export default StatusTab;
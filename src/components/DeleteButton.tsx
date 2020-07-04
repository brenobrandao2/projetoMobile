import React from 'react';
import { IonFabButton } from '@ionic/react';
import './DeleteButton.css';
import { AiOutlineDelete } from 'react-icons/ai';
import * as TarefaAPI from '../services/TarefaAPI';

const DeleteButton: React.FC<{display: string, id: number, refresh: Function}> = ({display, id, refresh}) => {
    const deleteTaskCard = async () => {
        await TarefaAPI.deleteTask(id);
        refresh();
    }

    return(
    <IonFabButton className="fabDelete" size="small" color="danger" style={{display: display}} onClick={() => deleteTaskCard()}>
        <AiOutlineDelete size={20} />
    </IonFabButton>
)};

export default DeleteButton;
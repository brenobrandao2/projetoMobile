import React from 'react';
import { IonFabButton } from '@ionic/react';
import './DeleteButton.css';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteButton: React.FC<{display: string}> = ({display}) => (
    <IonFabButton className="fabDelete" size="small" color="danger" style={{display: display}}>
        <AiOutlineDelete size={20} />
    </IonFabButton>
);

export default DeleteButton;
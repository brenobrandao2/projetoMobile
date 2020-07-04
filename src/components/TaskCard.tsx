import React, { useState, useEffect } from 'react';
import { IonTextarea , IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { chevronUpOutline } from 'ionicons/icons';
import DeleteButton from '../components/DeleteButton';
import StatusTab from '../components/StatusTab';
import './TaskCard.css';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import '../utils/Colors';
import colors from '../utils/Colors';
import * as TarefaAPI from '../services/TarefaAPI';

const TaskCard: React.FC<{id: number, titulo: string, descricao: string, status: number, refresh: Function}> = ({id, titulo, descricao, status, refresh}) => {
    const [title, setTitulo] = useState<string>();
    const [content, setDescricao] = useState<string>();
    const [focus, setFocus] = useState<boolean>(false);
    const [expand, setExpand] = useState<boolean>(false);
    const [color, setColor] = useState<string>();

    useEffect(() => {
        setTitulo(titulo);
        setDescricao(descricao);
        switch(status) {
            case 0:
                setColor(colors.azul);
                break;
            case 1:
                setColor(colors.amarelo);
                break;
            case 2:
                setColor(colors.verde);
                break;
            default:
                setColor(colors.azul);
                break;
        }
    }, [])

    const onLostFocus = async () => {
        setFocus(false);
        const tarefa: {"id": number, "title": string | undefined, "description": string | undefined} = {
            "id": id,
            "title": title,
            "description": content
        }
        await TarefaAPI.editTask(tarefa);
    }

    return (
        <IonCard style={{backgroundColor: color}}>
            <IonCardHeader>
                <IonCardTitle>
                    <IonInput id="title" value={title} onIonFocus={() => setFocus(true)} onIonBlur={() => onLostFocus()} placeholder="Digite o título" onIonChange={e => setTitulo(e.detail.value!)} clearInput></IonInput>
                    <DeleteButton display={focus ? "none" : "block"} id={id} refresh={() => refresh()}/>
                </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {expand && <IonTextarea id="descriptionTxt" rows={4} value={content} onIonFocus={() => setFocus(true)} onIonBlur={() => onLostFocus()} placeholder="Digite a descrição" onIonChange={e => setDescricao(e.detail.value!)}></IonTextarea >}
                {expand && <IoIosArrowUp id="expandIcon" color="white" size={20} onClick={() => setExpand(false)} />}
                {!expand && <IoIosArrowDown id="expandIcon" color="white" size={20} onClick={() => setExpand(true)} />}
                <StatusTab id={id} status={status} refresh={() => refresh()}/>
            </IonCardContent>
        </IonCard>
    );
};

export default TaskCard;
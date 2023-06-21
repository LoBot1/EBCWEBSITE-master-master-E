import React, { useMemo } from 'react';
import { useState } from "react";
import { conditionDelete_ } from "../../../components/condition/conditionDelete";
import { conditionInsert_ } from "../../../components/condition/conditionInsert";
import { conditionUpdate_ } from "../../../components/condition/conditionUpdate";
import Admenu from ".././.././../components/admin-menu";

export default function ConditionInfo(props) {
    const [desc, setDesc] = useState(props.condition.desc);
    const [name, setName] = useState(props.condition.name);
    const [id, setId] = useState(props.condition.id);

    const changeDesc = useMemo(() => (params) => {
        setDesc(params.target.value)
    }, [desc])
    const changeName = useMemo(() => (params) => {
        setName(params.target.value)
    },[name])
    const changeId = useMemo(() => (params) => {
        setId(params.target.value)
    },[id])

    const onClickDeleteCondition = async () => {
        let data = {
            "id": id,
        };
        conditionDelete_(data);
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => {   window.location.replace('/admin_condition'); }, 1000);
    }

    const onClickInsertCondition = async () => {
        let datas = {
            "name": name,
            "desc": desc,
        };
        conditionInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => {   window.location.replace('/admin_condition'); }, 1000);
       
    }

    const onClickUpdateCondition = async () => {
        let datas = {
            "id" : id,
            "name": name,
            "desc": desc,
        };
        conditionUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => {   window.location.replace('/admin_condition'); }, 1000);
    }

    return <div className="condition-info-contain">
        <Admenu/>
    <form>
        <input type="hidden" id="reservationId" value={id} onChange={changeId} />
        <input placeholder="Nom de la condition" type="text" id="name" onChange={changeName} defaultValue={name} />
        <textarea placeholder="Description" type="text" id="desc" onChange={changeDesc} defaultValue={desc} />
        <input type="button" value="Modifier la condition" onClick={onClickUpdateCondition} />
        <input type="button" value="Supprimer la condition" onClick={onClickDeleteCondition} />
        <input type="button" value="Ajouter une condition" onClick={onClickInsertCondition} />
    </form>
</div>
}
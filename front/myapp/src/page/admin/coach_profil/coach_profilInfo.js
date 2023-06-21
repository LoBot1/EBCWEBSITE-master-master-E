import React, { useMemo } from 'react';
import { useState } from "react";
import { coach_profilDelete_ } from "../../../components/coach_profil/coach_profilDelete";
import { coach_profilUpdate_ } from "../../../components/coach_profil/coach_profilUpdate";

import "../../../style/admin/ad-userprofil.css"
export default function Coach_profilInfo(props) {
    const [desc, setDesc] = useState(props.profil.desc);
    const [coach_name, setCoach_name] = useState(props.profil.coach_name);
    const [id, setId] = useState(props.profil.id);
    const [userId, setUserId] = useState(props.profil.user_id);



    const changeDesc = useMemo(() => (params) => {
        setDesc(params.target.value)
    }, [desc]);
    const changeCoach_name = useMemo (() =>(params) => {
        setCoach_name(params.target.value)
    }, [coach_name])
    const changeId = useMemo (() =>(params) => {
        setId(params.target.value)
    }, [id])
    const changeUserId = useMemo (() =>(params) => {
        setUserId(params.target.value)
    },[userId])

    const onClickDeleteCoach_profil = async () => {
        let data = {
            "id": id,
        };
        coach_profilDelete_(data);
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_coach_profil'); }, 1000);
    }

    const onClickUpdateCoach_profil = async () => {
        let datas = {
            "id": id,
            "user_id": userId,
            "coach_name": coach_name,
            "desc": desc,
        };
        coach_profilUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_coach_profil'); }, 1000);
    }

    return <div className="user_profilinfo-contain">
        <div className="form-user">
            <form>
                <div className="input-info">
                    <div className="info">
                        <input placeholder="Nom du coach" type="text" id="coach_name" onChange={changeCoach_name} defaultValue={coach_name} />
                    </div>
                    <div className="info"><input type="hidden" id="reservationId" value={id} onChange={changeId} /></div>
                    <div className="info"> <input type="hidden" id="userID" value={userId} onChange={changeUserId} /></div>
                    <div className="info"><textarea placeholder="Description" type="text" id="desc" onChange={changeDesc} defaultValue={desc} /></div>
                    <div className="input-action-coach">
                        <div className="info2"><input type="button" value="Modifier le coach" onClick={onClickUpdateCoach_profil} /></div>
                        <div className="info2"><input type="button" value="Supprimer le coach" onClick={onClickDeleteCoach_profil} /></div>
                    </div>



                </div>
            </form>
        </div>

    </div>
}
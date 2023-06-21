import md5 from "md5";
import React, { useMemo } from 'react';
import { useState, useEffect } from "react";
import { ReactSession } from 'react-client-session';
import { coach_profilUpdate_ } from "../../components/coach_profil/coach_profilUpdate";
import Navbar from "../../components/navbar";
import "../../style/coach.css"
export default function Profil_coachInfo(props) {
    const [user_id, setId] = useState(ReactSession.get("id"));
    const [coach_name, setCoach_name] = useState();
    const [desc, setDesc] = useState();

    const changeId = useMemo(() => (params) => {
        setId(params.target.value)
    }, [user_id])
    const changeCoach_name = useMemo(() => (params) => {
        setCoach_name(params.target.value)
    }, [coach_name])
    const changeDesc = useMemo(() => (params) => {
        setDesc(params.target.value)
    }, [desc])

    const onClickUpdateUser = async (coach) => {
        let datas = {
            "id": props.coach.id,
            "user_id": user_id,
            "coach_name": coach_name,
            "desc": desc,
        };
        coach_profilUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/profil_coach'); }, 1000);
    }

    return <div className="profil-coachinfo-contain">
        <Navbar />
        <div className="form-coach">
            <form key={props.coach.id}>
                <div className="form-contain">
                    <div className="coach-info">
                        <input type="hidden" id="userId" value={props.coach.user_id} onChange={changeId} />
                        <div className="c-form-info">
                            <p>Nom de coach</p>
                            <input placeholder="Nom" type="text" id="coach_name" onChange={changeCoach_name} defaultValue={props.coach.coach_name} />
                        </div>
                        <div className="c-form-info">
                            <p>Description</p>
                            <textarea placeholder="Description" type="text" id="desc" onChange={changeDesc} defaultValue={props.coach.desc} />
                        </div>

                    </div>
                    <div className="coach-check">
                        <input className="check" type="button" value="Modifier l'utilisateur" onClick={onClickUpdateUser} />
                    </div>
                </div>

            </form>
        </div>

    </div>

}
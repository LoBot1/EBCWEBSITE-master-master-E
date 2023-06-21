import React from 'react';
import { useState, useEffect } from "react";
import { ReactSession } from 'react-client-session';
import { coach_profilList_ } from "../../components/coach_profil/coach_profilList";

import Profil_coachInfo from "./profil_coachInfo";
export default function Profil_coach(props) {
    const [user_id, setId] = useState(ReactSession.get("id"));
    const [coachList, setCoachList] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    if (ReactSession.get("login") && ReactSession.get("login") != 1)
    {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 2000);
    }

    useEffect(() => {
        const getCoachList = setInterval(() => {
            if(!isLoaded){
                const CoachListFetched = coach_profilList_();
                CoachListFetched.then(result => {
                    setCoachList(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getCoachList);
                }
            }, coachList);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getCoachList);
    }, [isLoaded]);

    if (ReactSession.get("coach") && ReactSession.get("coach") == 1) {
        return (coachList && coachList.map((coach) => {
            if (coach.user_id == user_id) {
                return <div  key={coach.id} className="profil-coach-contain">
                    <Profil_coachInfo coach={coach} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} />
                </div>
            }
        }))
    } else {
        window.location.replace('/home')
    }
}
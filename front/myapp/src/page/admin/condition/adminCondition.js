import React, { useEffect, useState } from 'react';
import { conditionList_ } from '../../../components/condition/conditionList';
import { conditionInsert_ } from '../../../components/condition/conditionInsert';
import ConditionInfo from './conditionInfo';
import { ReactSession } from 'react-client-session';
import Admenu from ".././.././../components/admin-menu";

export function AdminCondition(props) {
    const [conditions, setConditions] = useState();
    const [isLoaded, setIsLoaded] = useState();

    const onClickInsertCondition = async () => {
        let datas = {
            "name": "",
            "desc": "",
        };
        conditionInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_condition'); }, 1000);

    }
    useEffect(() => {
        const info = async () => {
            const list = await conditionList_();
            setConditions(list);
        }
        info()
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, [conditions]);

    useEffect(() => {
        const getConditions = setInterval(() => {
            if(!isLoaded){
                const conditionListFetched = conditionList_();
                conditionListFetched.then(result => {
                        setConditions(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getConditions);
                }
            }, conditions);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getConditions);
    }, [isLoaded]);

    

    if (ReactSession.get("admin") && ReactSession.get("admin") == 1) {
        return (conditions && JSON.stringify(conditions) != "[]" ?
            conditions.map((condition) => {
                return <div key={condition.id} className="ad-condition-contain">
                    <Admenu/>
                    <div><ConditionInfo condition={condition} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} />
                    </div>
                </div>
            })
            :
            <input type="submit" value="Ajouter une condition" onClick={onClickInsertCondition} />
        )
    } else {
        window.location.replace('/home')
    }
}

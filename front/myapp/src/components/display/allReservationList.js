import { useEffect, useState } from "react";
import { bagInsert_ } from "../bag/bagInsert";
import { ReactSession } from 'react-client-session';

export function Display(props) {
    const userId = ReactSession.get("id");
    const [path , setPath ] = useState("") ;

    // console.log("props : " + props.resa.place);

    const newBag = async (reservation_id) => {
        if (ReactSession.get("login") != 1)
        {
            props.setAlerts(20); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(2); //toast vert
        }
        else{
        bagInsert_({ "user_id": userId, "reservation_id": reservation_id })
        props.setAlerts(17); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/all_reservation_list') }, 2000);
        }
    }

    const showInfo = async (props) => { 
        ReactSession.set("props", props);
        ReactSession.set("info", true);
        setTimeout(() => { window.location.replace('/reservation_info') }, 1000);
    }


    useEffect (() => {
        if (props.resa.mainImage.length > 0)
    {    
        setPath ((require("../../image/picture/" + props.resa.mainImage)))
    }

    }, [props.resa.mainImage])  
    
    return <div className="allrsrvlist-contain">
        <div className="card" key={props.resa.id}>
            <div>
                <img src= {path} alt="Image du stage d'Elite Basket Camp" /></div>
            <div className="Cardinfo Ecrit">
                <div className="cardinfo1"><h2 value="place">{props.resa.place}</h2></div>
                <div className="cardinfo2"><p>Coach réferent :</p><p value="coach_name">{props.resa.coach_name}</p></div>
                <div className="dateinfo">
                    <div className="cardinfo3"><p value="start_date">{props.resa.start_date}</p></div>
                    <div className="cardinfo4"><p value="finish_date">{props.resa.finish_date}</p></div>
                </div>
                <div className="cardinfo5"><p value="category">{props.resa.category}</p></div>
                <div className="cardinfo6"><p value="price">{props.resa.price} €</p></div>
                <div className="cardinfo7"><p value="avaible">{props.resa.avaible} </p></div>
            </div>
            <div className="inputCardinfo">
                <input className="validbasket" type="button" onClick={() => showInfo(props)} value="Voir le produit" ></input>
                <input className="validbasket" type="button" onClick={() => newBag(props.resa.id)} value="Ajouter au panier" />
            </div>

        </div>
    </div>

}
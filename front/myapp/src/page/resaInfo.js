import { ReactSession } from 'react-client-session';
import { bagInsert_ } from "../components/bag/bagInsert";
import ReactPlayer from 'react-player'
import "../style/resainfo.css";
import NavBarBlack from "../components/navbariconblack";
import Slider from '../components/slider';
import { useEffect, useState } from 'react';

export function ReservationInfo(props) {
    const userId = ReactSession.get("id");
    const info = ReactSession.get("props");

    const [pathMainImage , setPathMainImage ] = useState("") ;
    const [pathImage1 , setPathImage1 ] = useState("") ;
    const [pathImage2 , setPathImage2 ] = useState("") ;
    const [pathImage3 , setPathImage3 ] = useState("") ;
    const [pathVideo , setPathVideo ] = useState("") ;

    useEffect (() => {
        if (info.resa.mainImage.length > 0)
    {    
        setPathMainImage ((require(`${_dirname}/../image/pictures/` + info.resa.mainImage)))
    }
    if (info.resa.image1.length > 0)
    {    
        setPathImage1 ((require(`${_dirname}/../image/pictures/` + info.resa.image1)))
    }
    if (info.resa.image2.length > 0)
    {    
        setPathImage2 ((require(`${_dirname}/../image/pictures/` + info.resa.image2)))
    }
    if (info.resa.image3.length > 0)
    {    
        setPathImage3 ((require(`${_dirname}/../image/pictures/` + info.resa.image3)))
    }
    if (info.resa.video.length > 0)
    {    
        setPathVideo ((require(`${_dirname}/../image/pictures/` + info.resa.video)))
    }

    }, [info.resa.mainImage])



    const newBag = async (resa) => {
        if (ReactSession.get("login") != 1) {
            props.setAlerts(20); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(2); //toast vert
        }
        else {
            bagInsert_({ "user_id": userId, "reservation_id": resa })
            props.setAlerts(17); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(0); //toast vert
            setTimeout(() => { ReactSession.set("props", "") }, 1000);
            setTimeout(() => { window.location.replace('/all_reservation_list') }, 1000);
        }
    }

    if (ReactSession.get("login") && ReactSession.get("login") == 1) {
        return info && <div className="allrsrvlist-contain">
            <NavBarBlack />
            <div className="slide" >
                <div className="slide1 card">
                    <div className="pt"><div className="ptG ">
                        <div className="imgproduct"><img src={pathMainImage} alt="Image du stage d'Elite Basket Camp" /></div>
                        <div className="imgproduct"><img src={pathImage1} alt="Image du stage d'Elite Basket Camp" /></div>
                        <div className="imgproduct"><img src={pathImage2} alt="Image du stage d'Elite Basket Camp" /></div>
                        <div className="imgproduct"><img src={pathImage3} alt="Image du stage d'Elite Basket Camp" /></div>
                        <div className="imgproduct"><ReactPlayer url={pathVideo} /></div>
                    </div>
                        <div className="ptD">

                            <div className="cardinfo">"<h1>"Elite BasketCamp</h1><h1 className="typeage" value="category">{info.resa.category}"</h1></div>
                            <div className="info2">
                                <div className="cardinfo"><h2>{info.resa.place}</h2></div>
                                <div className="cardinfo 2"><h2 className="p2" value="price">{info.resa.price}€</h2></div>
                            </div>
                            <div className="info3">
                                <div className="cardinfoDate"><h2> Début du stage  </h2><p value="start_date">{info.resa.start_date}</p></div>
                                <div className="cardinfoDate"><h2> fin du stage  </h2><p value="finish_date">{info.resa.finish_date}</p></div>
                            </div>
                            <div className="checkproduct">
                                <input className="validbasket" type="button" onClick={() => newBag(info.resa.id)} value="Ajouter au panier" />
                            </div>
                            <div className="cardinfoDesc"><p value="description">{info.resa.desc}</p></div>
                        </div></div>

                </div>

                <div className="slide2card">
                    <Slider />
                </div>


                <div className="slide3card">
                    <div className="ptG">
                        <div className="cardinfo1"><p value="category">"Elite BasketCamp {info.resa.category}"</p></div>
                        <div className="cardinfo2"><h2>Salle de {info.resa.place}</h2></div>
                        <div className="cardinfoDesc"><p value="description">{info.resa.desc2}</p></div>
                    </div>
                    <div className="ptD">
                        <div className="cardinfo"><p value="avaible">{info.resa.avaible}</p></div>
                    </div>
                </div>
                <div className="card" key={info.resa.id}>

                </div></div>

        </div>
    } else {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500)
    }

}

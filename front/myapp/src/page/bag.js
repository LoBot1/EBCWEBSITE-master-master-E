import { useEffect, useState } from "react";
import { ReactSession } from 'react-client-session';
import Collapse from '@mui/material/Collapse';
import { bagDelete_ } from "../components/bag/bagDelete";
import { user_resaInsert_ } from "../components/user_resa/user_resaInsert";
import { bagInfo } from "../components/bag/bagInform";
import emailjs from "@emailjs/browser";
import { userUpdate_ } from "../components/user/userUpdate";
import "../style/bag.css"
import NavBar from "../components/navbar";
import IconTrash from "../components/icon/icontrash";
import NavBarBlack from "../components/navbariconblack";
import "../style/navbarblack.css"

export function Bag(props) {
    ReactSession.set("bagId", 0)
    const [bag, setBag] = useState(null);
    const [bagMap, setBagMap] = useState(null);
    const [isOpen, setIsOpen] = useState(-1);
    const [isLoaded, setIsLoaded] = useState(false);
    const userId = ReactSession.get("id");
    const [path, setPath] = useState("")

    const sendEmail = (params) => {
        emailjs.send("service_ot9spch", "template_uxpo7hu ", params, "yNODtIDxnNl4dtlzZ")
    }

    const changeRegistered_first_name = (params) => {
        ReactSession.set("registered_first_name", params.target.value)
    }
    const changeRegistered_last_name = (params) => {
        ReactSession.set("registered_last_name", params.target.value)
    }
    const changeAge = (params) => {
        ReactSession.set("registered_age", params.target.value)
    }
    const changeLicence = (params) => {
        ReactSession.set("registered_licence", params.target.value)
    }
    const changeEmail = (params) => {
        ReactSession.set("registered_email", params.target.value)
    }
    const changeUrgency_number = (params) => {
        ReactSession.set("urgency_number", params.target.value)
    }


    const bagDelete = (bag) => {
        bagDelete_({
            "id": bag
        })
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/bag') }, 1500);

    }

    const newUser_resa = (bag) => {
        user_resaInsert_({
            "user_id": userId,
            "reservation_id": bag.reservation_id,
            "registered_first_name": ReactSession.get("registered_first_name"),
            "registered_last_name": ReactSession.get("registered_last_name"),
            "age": ReactSession.get("registered_age"),
            "licence": ReactSession.get("registered_licence"),
            "email": ReactSession.get("registered_email"),
            "urgency_number": ReactSession.get("urgency_number")
        })
        var templateParams = {
            name: ReactSession.get("registered_first_name"),
            email: ReactSession.get("registered_email"),
            start_date: bag.start_date,
            finish_date: bag.finish_date,
            price: bag.price,
        };
        sendEmail(templateParams);

        if (ReactSession.get("reservation") == 0) {
            userUpdate_({
                "id": ReactSession.get("id"),
                "first_name": ReactSession.get("first_name"),
                "last_name": ReactSession.get("last_name"),
                "email": ReactSession.get("email"),
                "password": ReactSession.get("password"),
                "phone_number": ReactSession.get("phone_number"),
                "city": ReactSession.get("city"),
                "postal_code": ReactSession.get("postal_code"),
                "adress": ReactSession.get("adress"),
                "appartment": ReactSession.get("appartment"),
                "coach": ReactSession.get("coach"),
                "admin": ReactSession.get("admin"),
                "reservation": 1
            })
            ReactSession.set("reservation", 1)
        }


        ReactSession.remove("registered_first_name");
        ReactSession.remove("registered_last_name");
        ReactSession.remove("registered_age");
        ReactSession.remove("registered_licence");
        ReactSession.remove("registered_email");
        ReactSession.remove("urgency_number");
        bagDelete(bag.id);
    }


    useEffect(() => {
        const getBag = setInterval(() => {
            if (!isLoaded) {
                const bagListFetched = bagInfo();
                bagListFetched.then(result => {
                    setBag(result)
                }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
            } else {
                // Make sure to clear your interval in the else case,
                // or it will keep running (even though you don't see it)
                clearInterval(getBag);
            }
        }, bag);

        // Clear the interval every time useEffect runs
        return () => clearInterval(getBag);
    }, [isLoaded]);

    useEffect(() => {
        setBagMap((bag && bag.map((bag, key) => {
            return <div key={key} className="bag-contain">
                <div className="containbag" key={bag.id}>
                    <div className="baginfo">
                        <div className="ptG">
                            <div className="G">
                                <img src={(require(`${__dirname}/../../image/pictures/` + bag.mainImage))}></img>
                            </div>
                            <div className="D">
                                <p value="place" className="t1">Stage de {bag.place}</p>
                                <p value="coach_name" className="t2">{bag.coach_name}</p>
                                <div className="date">
                                    <p value="start_date">{bag.start_date}</p>
                                    <p> / </p>
                                    <p value="finish_date">{bag.finish_date}</p>
                                </div>
                                <p value="registered_first_name">{bag.registered_first_name}</p>
                                <p value="registered_last_name">{bag.registered_last_name}</p>
                                <p value="age">{bag.age}</p>
                                <p value="licence">{bag.licence}</p>
                                <p value="email">{bag.email}</p>
                                <p value="urgency_number">{bag.urgency_number}</p>
                                <div className="checkbag">
                                    <input id="bagrsrv" type="button" value="Reserver" onClick={() => {
                                        if (isOpen == bag.id) {
                                            setIsOpen(-1);
                                        }
                                        else {
                                            setIsOpen(bag.id);
                                        }
                                    }
                                    } />

                                    <input type="button" value="Annuler la réservation" id="trash" />
                                    <label className="trashlabel" onClick={() => bagDelete(bag.id)} htmlFor="trash"><IconTrash /></label>

                                </div>
                            </div>

                        </div>


                        <div className="ptD">
                            <h2>Recapitulatif</h2>
                            <h3>Produit : "Stage De Basket"</h3>
                            <div>
                            <p value="price">Sous-Total : </p> 
                            <p className="p2">{bag.price} €</p>
                            </div>
                            <Collapse in={isOpen == bag.id} >

                                <form>

                                    <div className="form__group field">

                                        <div className="flex">
                                            <label htmlFor="registered_last_name" className="ha-screen-reader">Nom du réservateur</label>
                                            <input className="field__input" placeholder="Nom" type="text" id="registered_last_name" onChange={changeRegistered_last_name} />
                                        </div>

                                        <div className="flex">
                                            <label htmlFor="registered_first_name" className="ha-screen-reader">Prénom du réservateur</label>
                                            <input className="field__input" placeholder="Prénom" type="text" id="registered_first_name" onChange={changeRegistered_first_name} />
                                        </div>

                                        <div className="flex">
                                            <label htmlFor="age" className="ha-screen-reader">Age du réservateur</label>
                                            <input className="field__input" placeholder="Age" type="number" id="age" onChange={changeAge} />
                                        </div>

                                        <div className="flex">
                                            <label htmlFor="licence" className="ha-screen-reader">Licence du réservateur</label>
                                            <input className="field__input" placeholder="Licence" type="text" id="licence" onChange={changeLicence} />
                                        </div>

                                        <div className="flex">
                                            <label htmlFor="email" className="ha-screen-reader">Email du réservateur</label>
                                            <input className="field__input" placeholder="Email " type="text" id="email" onChange={changeEmail} />
                                        </div>

                                        <div className="flex">
                                            <label htmlFor="urgency_number" className="ha-screen-reader">Tel. d'un responsable legal</label>
                                            <input className="field__input" placeholder="Numero de telephone" type="number" id="urgency_number" onChange={changeUrgency_number} />
                                        </div>

                                    </div>
                                    <div className="check-formbag">
                                        <input type="button" value="Valider" onClick={() => newUser_resa(bag)} />
                                    </div>

                                </form>
                            </Collapse>
                        </div>

                    </div>



                </div>
            </div>
        })))
    }, [bag, isOpen]);
    if (ReactSession.get("login") && ReactSession.get("login") == 1) {
        return (bagMap && <div className="all-containbag"><NavBarBlack /> <div className="bagmap">{bagMap}</div></div>)
    } else {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500)    
    }


}

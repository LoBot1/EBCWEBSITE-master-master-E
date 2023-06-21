import md5 from "md5";
import React, { useMemo } from 'react';
import { useState, useEffect } from "react";
import { ReactSession } from 'react-client-session';
import { userList_ } from "../components/user/userList";
import { userUpdate_ } from "../components/user/userUpdate";
import "../style/profil-user.css"
import Navbar from "../components/navbar";
import NavBarBlack from "../components/navbariconblack";
export default function Profil_user(props) {
    const [id, setId] = useState(ReactSession.get("id"));
    const [first_name, setFirst_name] = useState(ReactSession.get("first_name"));
    const [last_name, setLast_name] = useState(ReactSession.get("last_name"));
    // const [password, setPassword] = useState(ReactSession.get("password"));
    const [email, setEmail] = useState(ReactSession.get("email"));
    const [phone_number, setPhone_number] = useState(ReactSession.get("phone_number"));
    const [city, setCity] = useState(ReactSession.get("city"));
    const [adress, setAdress] = useState(ReactSession.get("adress"));
    const [postal_code, setPostal_code] = useState(ReactSession.get("postal_code"));
    const [apartment, setApartment] = useState(ReactSession.get("apartment"));
    const [banking_information, setBanking_information] = useState(ReactSession.get("banking_information"));
    const [admin, setAdmin] = useState(ReactSession.get("admin"));
    const [coach, setCoach] = useState(ReactSession.get("coach"));
    const [reservation, setReservation] = useState(ReactSession.get("reservation"));
    const [userList, setUserList] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const changeId = useMemo(() => (params) => {
        setId(params.target.value)
    }, [id])
    const changeFirst_name = useMemo(() => (params) => {
        setFirst_name(params.target.value)
    }, [first_name])
    const changeLast_name = useMemo(() => (params) => {
        setLast_name(params.target.value)
    }, [last_name])
    const changeEmail = useMemo(() => (params) => {
        setEmail(params.target.value)
    }, [email])
    const changePhone_number = useMemo(() => (params) => {
        setPhone_number(params.target.value)
    }, [phone_number])
    // const changePassword = useMemo(() => (params) => {
    //     setPassword(params.target.value)
    // }, [password])
    const changeCity = useMemo(() => (params) => {
        setCity(params.target.value)
    }, [city])
    const changePostal_code = useMemo(() => (params) => {
        setPostal_code(params.target.value)
    }, [postal_code])
    const changeAdress = useMemo(() => (params) => {
        setAdress(params.target.value)
    }, [adress])
    const changeApartment = useMemo(() => (params) => {
        setApartment(params.target.value)
    }, [apartment])
    const changeBanking_information = useMemo(() => (params) => {
        setBanking_information(md5(params.target.value))
    }, [banking_information])


    const onClickUpdateUser = async () => {
        let datas = {
            "id": id,
            "first_name": first_name,
            "last_name": last_name,
            // "password": md5(password),
            "email": email,
            "phone_number": phone_number,
            "city": city,
            "postal_code": postal_code,
            "adress": adress,
            "apartment": apartment,
            "banking_information": banking_information,
            "admin": admin,
            "coach": coach,
            "reservation": reservation,
        };

        ReactSession.set("first_name", first_name);
        ReactSession.set("last_name", last_name);
        // ReactSession.set("password", md5(password));
        ReactSession.set("email", email);
        ReactSession.set("phone_number", phone_number);
        ReactSession.set("city", city);
        ReactSession.set("adress", adress);
        ReactSession.set("postal_code", postal_code);
        ReactSession.set("apartment", apartment);
        ReactSession.set("banking_information", banking_information);
        ReactSession.set("admin", admin);
        ReactSession.set("coach", coach);
        ReactSession.set("reservation", reservation);

        userUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/profil_user'); }, 1000);
    }

    useEffect(() => {
        const getUserList = setInterval(() => {
            if (!isLoaded) {
                const userListFetched = userList_();
                userListFetched.then(result => {
                    setUserList(result)
                }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
            } else {
                // Make sure to clear your interval in the else case,
                // or it will keep running (even though you don't see it)
                clearInterval(getUserList);
            }
        }, userList);

        // Clear the interval every time useEffect runs
        return () => clearInterval(getUserList);
    }, [isLoaded]);

    if (ReactSession.get("login") && ReactSession.get("login") == 1) {
        return (userList && userList.map((user, key) => {
            if (user.id == id) {
                return <div key={key} className="profil_user_contain">
                    <NavBarBlack />
                    <form key={user.id}>
                        <div className="profil-value">
                            <div className="title-profil">
                                <div className="title-profil1">
                                    <h2>{first_name} {last_name}</h2>
                                </div>
                                <div className="title-profil2">
                                    <h2>{email}</h2>
                                </div>

                            </div>
                            <div className="profil-value-1">
                                <h1>Profil Settings</h1>
                                <div className="profil-info1">
                                    <div className="info1">
                                        <p>Prénom</p>
                                        <input className="info-user" placeholder="Prénom d'utilisateur" type="text" id="first_name" onChange={changeFirst_name} defaultValue={first_name} />
                                    </div>
                                    <div className="info1">
                                        <p>Nom</p>
                                        <input className="info-user" placeholder="Nom d'utilisateur" type="text" id="last_name" onChange={changeLast_name} defaultValue={last_name} />
                                    </div>
                                    <div className="info1">
                                        <p>Tel.</p>
                                        <input className="info-user" placeholder="Numéro de téléphone" type="text" id="phone_number" onChange={changePhone_number} defaultValue={phone_number} />
                                    </div>
                                    <div className="info1">
                                        <p>Email</p>
                                        <input className="info-user" placeholder="Email" type="text" id="email" onChange={changeEmail} defaultValue={email} />
                                    </div>
                                    <input type="hidden" id="userId" value={id} onChange={changeId} />
                                </div>

                                <div className="check-userinfo">
                                    <input className="check" type="button" value="sauvegarder" onClick={onClickUpdateUser} />
                                </div>
                            </div>
                            <div className="profil-value-2">
                                <div className="info1">
                                    <p>Ville</p>
                                    <input className="info-user" placeholder="Ville" type="text" id="city" onChange={changeCity} defaultValue={city} />
                                </div>
                                <div className="info1">
                                    <p>Code Postal</p>
                                    <input className="info-user" placeholder="Code postal" type="text" id="postal_code" onChange={changePostal_code} defaultValue={postal_code} />
                                </div>
                                <div className="info1">
                                    <p>Adresse</p>
                                    <input className="info-user" placeholder="Adresse" type="text" id="adress" onChange={changeAdress} defaultValue={adress} />
                                    <input className="info-user" placeholder="Appartement" type="text" id="apartment" onChange={changeApartment} defaultValue={apartment} />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            }
        }))
    } else {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500)
    }
}   
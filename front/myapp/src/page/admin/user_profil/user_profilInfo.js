import React, { useMemo } from 'react';
import { useState} from "react";
import { userDelete_ } from "../../../components/user/userDelete";
import { userInsert_ } from "../../../components/user/userInsert";
import { userUpdate_ } from "../../../components/user/userUpdate";

export default function User_profilInfo(props) {
    const [id, setId] = useState(props.profil.id);
    const [first_name, setFirst_name] = useState(props.profil.first_name);
    const [last_name, setLast_name] = useState(props.profil.last_name);
    const [password, setPassword] = useState(props.profil.password);
    const [email, setEmail] = useState(props.profil.email);
    const [phone_number, setPhone_number] = useState(props.profil.phone_number);
    const [city, setCity] = useState(props.profil.city);
    const [adress, setAdress] = useState(props.profil.adress);
    const [postal_code, setPostal_code] = useState(props.profil.postal_code);
    const [apartment, setApartment] = useState(props.profil.apartment);
    const [banking_information, setBanking_information] = useState(props.profil.banking_information);
    const [admin, setAdmin] = useState(props.profil.admin);
    const [coach, setCoach] = useState(props.profil.coach);
    const [reservation, setReservation] = useState(props.profil.reservation);


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
    const changePassword = useMemo(() => (params) => {
        setPassword(params.target.value)
    }, [password])
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
        setBanking_information(params.target.value)
    }, [banking_information])
    const changeAdmin = (params) => {
        setAdmin(params.target.value)
    }
    const changeCoach = (params) => {
        setCoach(params.target.value)
    }
    const changeReservation = (params) => {
        setReservation(params.target.value)
    }

    const onClickDeleteUser_profil = async () => {
        let data = {
            "id": id,
        };
        userDelete_(data);
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_user_profil'); }, 1000);
    }

    const onClickInsertUser_profil = async () => {
        let datas = {
            "first_name": first_name,
            "last_name": last_name,
            "password": password,
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
        userInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_user_profil'); }, 1000);

    }

    const onClickUpdateReservation = async () => {
        let datas = {
            "id": id,
            "first_name": first_name,
            "last_name": last_name,
            "password": password,
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
        userUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_user_profil'); }, 1000);
    }

    return <div className="user_profilinfo-contain">
        
        <div className="form-user">
            <form>
                <div className="input-info">
                    <div className="info">
                        <input type="hidden" id="reservationId" value={id} onChange={changeId} />
                    </div>
                    <div className="info">
                        <p>Prénom</p><input placeholder="Prénom d'utilisateur" type="text" id="first_name" onChange={changeFirst_name} defaultValue={first_name} />
                    </div>
                    <div className="info">
                        <p>Nom</p><input placeholder="Nom d'utilisateur" type="text" id="last_name" onChange={changeLast_name} defaultValue={last_name} />
                    </div>
                    <div className="info">
                        <input placeholder="Mot de passe" type="hidden" id="password" onChange={changePassword} defaultValue={password} />
                    </div>
                    <div className="info">
                        <p>Email</p><input placeholder="Email" type="text" id="email" onChange={changeEmail} defaultValue={email} />
                    </div>
                    <div className="info">
                        <p>Tel</p><input placeholder="Numéro de téléphone" type="text" id="phone_number" onChange={changePhone_number} defaultValue={phone_number} />
                    </div>
                    <div className="info">
                        <p>Ville</p> <input placeholder="Ville" type="text" id="city" onChange={changeCity} defaultValue={city} />
                    </div>
                    <div className="info">
                        <p>Code postal</p> <input placeholder="Code postal" type="text" id="postal_code" onChange={changePostal_code} defaultValue={postal_code} />
                    </div>
                    <div className="info">
                        <p>Adresse</p> <input placeholder="Adresse" type="text" id="adress" onChange={changeAdress} defaultValue={adress} />
                    </div>
                    <div className="info">
                        <p>Appartement</p>  <input placeholder="Appartement" type="text" id="apartment" onChange={changeApartment} defaultValue={apartment} />
                    </div>
                    <div className="info">
                        <input placeholder="Informations bancaires" type="hidden" id="banking_information" onChange={changeBanking_information} defaultValue={banking_information} />
                    </div>
                    <div className="info">
                        <p>Admin</p> <input placeholder="Admin" type="text" id="admin" onChange={changeAdmin} defaultValue={admin} />
                    </div>
                    <div className="info">
                        <p>Coach</p>  <input placeholder="Coach" type="text" id="coach" onChange={changeCoach} defaultValue={coach} />
                    </div>
                    <div className="info">
                        <p>Reservation</p> <input placeholder="Reservation" type="text" id="reservation" onChange={changeReservation} defaultValue={reservation} />
                    </div>
                </div>
                <div className="input-action">
                    <input type="button" value="Modifier l'utilisateur" onClick={onClickUpdateReservation} />
                    <input type="button" value="Supprimer l'utilisateur" onClick={onClickDeleteUser_profil} />
                    <input type="button" value="Ajouter un utilisateur" onClick={onClickInsertUser_profil} />
                </div>
            </form>
        </div>

    </div>

}
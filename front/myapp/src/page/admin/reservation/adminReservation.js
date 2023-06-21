import React, {useEffect, useState } from 'react';
import ReservationInfo from './reservationInfo';
import { reservationList_ } from '../../../components/reservation/reservationList';
import { reservationInsert_ } from '../../../components/reservation/reservationInsert';
import { ReactSession } from 'react-client-session';
import Admenu from ".././.././../components/admin-menu";
import "../../../style/admin/ad-resalist.css"
import "../../../style/admin/ad-menu.css"
import Iconsearch from '../../../components/icon/iconsearch';
export function AdminReservation(props) {
    const [reservations, setReservations] = useState();
    const [SearchChoice, setSearchChoice] = useState("");
    const [search, setSearch] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const onClickInsertReservation = async () => {
        let datas = {
            "coach_name": "",
            "place": "",
            "start_date": "",
            "finish_date": "",
            "category": "",
            "price": 0,
            "desc": "",
            "desc2": "",
            "avaible": true,
            "mainImage": "",
            "image1": "",
            "image2": "",
            "image3": "",
            "video": ""
        };
        reservationInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);
    }

    useEffect(() => {
        const getReservations = setInterval(() => {
            if(!isLoaded){
                const reservationsListFetched = reservationList_();
                reservationsListFetched.then(result => {
                        setReservations(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getReservations);
                }
            }, reservations);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getReservations);
    }, [isLoaded]);


    //search bar place
    const searchChoice = (params) => {
        var choice = params.target.value;
        ReactSession.set("searchbar", choice)
        var valChoice = ReactSession.get("searchbar")
        if (valChoice != "") {
            setSearch(true)
            setSearchChoice(reservations.map((reservation, key2) => {
                var verif = false;
                for (const key in reservation) {
                    try {
                        if (key == "coach_name" || key == "category" || key == "place" || key == "start_date" || key == "finish_date" || key == "price" || key == "avaible") {
                            verif = verif || reservation[key].toString().toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(valChoice.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        }
                    } catch (err) { }
                }
                if (verif) {
                    return <div key={key2} className="ad-rsrv-contain">
                        <Admenu /><Iconsearch className="search" />
                        <div><ReservationInfo reservation={reservation} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                    </div>
                }
            }))
        } else {
            setSearch(false);
        }
    }

    if (ReactSession.get("admin") && ReactSession.get("admin") == 1) {
        return <div className='resaadd'>
            <Admenu />
            <input type='text' id='research' placeholder='Rechercher' onChange={searchChoice} /><Iconsearch className="search" />
            {search ?
                SearchChoice
                :
                (reservations && JSON.stringify(reservations) != "[]" ?
                    reservations.map((reservation, key) => {
                        return <div key={key}className="ad-rsrv-contain">
                            <Iconsearch className="search" />
                            <div><ReservationInfo reservation={reservation} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                        </div>
                    })
                    :
                    <input className='add' type="submit" value="Ajouter une reservation" onClick={onClickInsertReservation} />
                )}
        </div>

    } else {
        window.location.replace('/home')
    }

}


import { useEffect, useState } from "react";
import { reservationList_ } from "../components/reservation/reservationList";
import { user_resaDelete_ } from "../components/user_resa/user_resaDelete";
import Navbar from "../components/navbar";
import { ReservationList } from "../components/display/userReservationList";
import { ReactSession } from 'react-client-session';


export function UserReservation(props) {
    const today = new Date(); // date et heure actuelle
    const day = today.getDate(); // jour actuel
    const month = today.getMonth(); // mois actuel
    const year = today.getFullYear(); // année actuelle
    const date = `${day}/${month}/${year}`; // jour, mois, année actuelle sous la forme j/m/aaaa
    const [reservation, setReservation] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const deleteUser_resa = async (bag) => {
        user_resaDelete_({ "id": bag })
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/user_reservation') }, 2000);

    }

    useEffect(() => {
        const getReservations = setInterval(() => {
            if (!isLoaded) {
                const reservationFetched = reservationList_();
                reservationFetched.then(result => {
                    setReservation(result)
                }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
            } else {
                // Make sure to clear your interval in the else case,
                // or it will keep running (even though you don't see it)
                clearInterval(getReservations);
            }
        }, reservation);

        // Clear the interval every time useEffect runs
        return () => clearInterval(getReservations);
    }, [isLoaded]);

    if (ReactSession.get("login") && ReactSession.get("login") == 1) {
        return (reservation && reservation.map((resa) => {
            if (resa.finish_date != date) {
                return <div key={resa.id} className="user-rsrv-contain">
                    <Navbar />
                    <div>
                        <ReservationList resa={resa} />
                    </div>
                </div>
            }
            // else {
            //     deleteUser_resa(resa.id);
            // }

        }))
    } else {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500)
    }


}

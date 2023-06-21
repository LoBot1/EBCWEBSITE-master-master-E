import { useEffect, useState } from "react";
import { user_resaInform_ } from "../components/user_resa/user_resaInform";
import { ReactSession } from 'react-client-session';
import Navbar from "../components/navbar";

export function User_resaList(props) {

    const [user_resa, setUser_resa] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getUser_resa = setInterval(() => {
            if (!isLoaded) {
                const user_resaFetched = user_resaInform_();
                user_resaFetched.then(result => {
                    setUser_resa(result)
                }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
            } else {
                // Make sure to clear your interval in the else case,
                // or it will keep running (even though you don't see it)
                clearInterval(getUser_resa);
            }
        }, user_resa);

        // Clear the interval every time useEffect runs
        return () => clearInterval(getUser_resa);
    }, [isLoaded]);

    if (ReactSession.get("login") && ReactSession.get("login") == 1) {
        return (user_resa && user_resa.map((resa) => {
            return <div key={resa.id} className="user-rsrvlist-contain">
                <Navbar />
                <div>
                    <p value="coach_name">{resa.coach_name}</p>
                    <p value="place">{resa.place}</p>
                    <p value="price">{resa.price}</p>
                    <p value="start_date">{resa.start_date}</p>
                    <p value="finish_date">{resa.finish_date}</p>
                    <p value="registered_first_name">{resa.registered_first_name}</p>
                    <p value="registered_last_name">{resa.registered_last_name}</p>
                    <p value="age">{resa.age}</p>
                    <p value="licence">{resa.licence}</p>
                    <p value="email">{resa.email}</p>
                    <p value="urgency_number">{resa.urgency_number}</p>
                </div>
            </div>

        }))
    } else {
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500)
    }

}

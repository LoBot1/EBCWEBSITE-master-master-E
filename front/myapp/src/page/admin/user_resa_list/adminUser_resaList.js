import { useEffect, useState } from "react";
import { ReactSession } from 'react-client-session';
import { user_resaAdminInform_ } from "../../../components/user_resa/user_resaAdminInform";
import ".././../../style/admin/ad-userresa.css"
import Iconsearch from "../../../components/icon/iconsearch";

export function AdminUser_resaList() {

    const [user_resa, setUser_resa] = useState(null);
    const [SearchChoice, setSearchChoice] = useState("");
    const [search, setSearch] = useState();
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const getUser_resa = setInterval(() => {
            if(!isLoaded){
                const userListFetched = user_resaAdminInform_();
                userListFetched.then(result => {
                    setUser_resa(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getUser_resa);
                }
            }, user_resa);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getUser_resa);
    }, [isLoaded]);

    //search bar place
    const searchChoice = (params) => {
        var choice = params.target.value;
        ReactSession.set("searchbar", choice)
        var valChoice = ReactSession.get("searchbar")
        if (valChoice != "") {
            setSearch(true)
            setSearchChoice(user_resa.map((resa, key2) => {
                var verif = false;
                for (const key in resa) {
                    try {
                        if (key == "registered_first_name" || key == "registered_last_name" || key == "age" || key == "urgency_number" || key == "licence" || key == "email" || key == "start_date") {
                            verif = verif || resa[key].toString().toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(valChoice.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        }
                    } catch (err) { }
                }
                if (verif) {
                    return <div key={key2} className="ad-user-resalist-contain">
                        <div className="info-resa" >
                            <p value="registered_first_name">{resa.registered_first_name}</p>
                            <p value="registered_last_name">{resa.registered_last_name}</p>
                            <p value="age">{resa.age}</p>
                            <p value="licence">{resa.licence}</p>
                            <p value="email">{resa.email}</p>
                            <p value="urgency_number">{resa.urgency_number}</p>
                            <p value="start_date">{resa.start_date}</p>
                            <p value="finish_date">{resa.finish_date}</p>
                            <p value="coach_name">{resa.coach_name}</p>
                            <p value="place">{resa.place}</p>
                        </div>
                    </div>
                }
            }))
        } else {
            setSearch(false);
        }
    }


    if (ReactSession.get("admin") && ReactSession.get("admin") == 1) {
        return <div className="all-rsrv-list">
            <div className="list">
            <input type='text' id='research' placeholder='Rechercher' onChange={searchChoice} /><Iconsearch className="search"/>
                {search ?
                    SearchChoice
                    :
                    (user_resa && user_resa.map((resa, key) => {
                        return <div key={key} className="ad-user-resalist-contain">
                            <div className="info-resa" >
                                <p value="registered_first_name">{resa.registered_first_name}</p>
                                <p value="registered_last_name">{resa.registered_last_name}</p>
                                <p value="age">{resa.age}</p>
                                <p value="licence">{resa.licence}</p>
                                <p value="email">{resa.email}</p>
                                <p value="urgency_number">{resa.urgency_number}</p>
                                <p value="start_date">{resa.start_date}</p>
                                <p value="finish_date">{resa.finish_date}</p>
                                <p value="coach_name">{resa.coach_name}</p>
                                <p value="place">{resa.place}</p>
                            </div>
                        </div>
                    })
                    )}
            </div>
        </div>
    } else {
        window.location.replace('/home')
    }
}

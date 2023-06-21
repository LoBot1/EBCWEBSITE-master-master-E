import React, { useEffect, useState } from 'react';
import { coach_profilList_ } from '../../../components/coach_profil/coach_profilList';
import Coach_profilInfo from './coach_profilInfo';
import { ReactSession } from 'react-client-session';
import "../../../style/admin/ad-userprofil.css"
import Iconsearch from '../../../components/icon/iconsearch';

export function AdminCoach_profil(props) {
    const [coach_profil, setCoach_profil] = useState();
    const [SearchChoice, setSearchChoice] = useState("");
    const [search, setSearch] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getCoachProfils = setInterval(() => {
            if(!isLoaded){
                const userListFetched = coach_profilList_();
                userListFetched.then(result => {
                        setCoach_profil(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getCoachProfils);
                }
            }, coach_profil);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getCoachProfils);
    }, [isLoaded]);


    //search bar place
    const searchChoice = (params) => {
        var choice = params.target.value;
        ReactSession.set("searchbar", choice)
        var valChoice = ReactSession.get("searchbar")
        if (valChoice != "") {
            setSearch(true)
            setSearchChoice(coach_profil.map((profil) => {
                var verif = false;
                for (const key in profil) {
                    try {
                        if (key == "coach_name" || key == "desc") {
                            verif = verif || profil[key].toString().toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(valChoice.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        }
                    } catch (err) { }
                }
                if (verif) {
                    return <div key={profil.id} className="ad-coach-contain">
                        <div><Coach_profilInfo profil={profil} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                    </div>
                }
            }))
        } else {
            setSearch(false);
        }
    }


    if (ReactSession.get("admin") && ReactSession.get("admin") == 1) {
        return <div className='coach-contain'>

            <h1>Coach Profil</h1>
            <input type='text' id='research' placeholder='Rechercher' onChange={searchChoice} /><Iconsearch className="search"/>
            {search ?
                SearchChoice
                :
                (coach_profil && coach_profil.map((profil) => {
                    return <div key={profil.id}className="ad-coach-contain">
                        <div ><Coach_profilInfo profil={profil} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                    </div>
                })
                )}
        </div>

    } else {
        window.location.replace('/home')
    }

}


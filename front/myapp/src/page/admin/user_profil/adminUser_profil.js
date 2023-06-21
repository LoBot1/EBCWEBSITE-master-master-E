import React, {useEffect, useState } from 'react';
import { userList_ } from '../../../components/user/userList';
import { userInsert_ } from '../../../components/user/userInsert';
import User_profilInfo from './user_profilInfo';
import { ReactSession } from 'react-client-session';
import Admenu from ".././.././../components/admin-menu";
import "../.././../style/admin/ad-userprofil.css"
import Iconsearch from '../../../components/icon/iconsearch';
export function AdminUser_profil(props) {
    const [user_profil, setUser_profil] = useState();
    const [SearchChoice, setSearchChoice] = useState("");
    const [search, setSearch] = useState();
    const [isLoaded, setIsLoaded] = useState(false);


    const onClickInsertUser_profil = async () => {
        let datas = {
            "first_name": "",
            "last_name": "",
            "password": "",
            "email": "",
            "phone_number": "",
            "city": "",
            "postal_code": "",
            "adress": "",
            "apartment": "",
            "banking_information": "",
            "admin": false,
            "coach": false,
            "reservation": false,
        };
        userInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_user_profil'); }, 1000);

    }

    useEffect(() => {
        const getUser = setInterval(() => {
            if(!isLoaded){
                const userListFetched = userList_();
                userListFetched.then(result => {
                    setUser_profil(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getUser);
                }
            }, user_profil);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getUser);
    }, [isLoaded]);

    //search bar place
    const searchChoice = (params) => {
        var choice = params.target.value;
        ReactSession.set("searchbar", choice)
        var valChoice = ReactSession.get("searchbar")
        if (valChoice != "") {
            setSearch(true)
            setSearchChoice(user_profil.map((profil) => {
                var verif = false;
                for (const key in profil) {
                    try {
                        if (key == "first_name" || key == "last_name" || key == "email" || key == "adress" || key == "phone_number" || key == "city") {
                            verif = verif || profil[key].toString().toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(valChoice.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        }
                    } catch (err) { }
                }
                if (verif) {
                    return <div key={profil.id} className="adminuser-profil-contain">
                        <Admenu />
                        <div><User_profilInfo profil={profil} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                    </div>
                }
            }))
        } else {
            setSearch(false);
        }
    }


    if (ReactSession.get("admin") && ReactSession.get("admin") == 1) {
        return <div className='user-containad'>
            <input type='text' id='research' placeholder='Rechercher' onChange={searchChoice} />
            {search ?
                SearchChoice
                :
                (user_profil && user_profil.map((profil) => {
                    return <div key={profil.id} className="adminuser-profil-contain">
                        <Iconsearch className="search"/>
                        <div><User_profilInfo profil={profil} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                    </div>
                })
                )}
        </div>

    } else {
        window.location.replace('/home')
    }

}


import md5 from "md5";
import { userList_ } from "../components/user/userList";
import { useState, useEffect, useMemo } from "react";
import { ReactSession } from 'react-client-session';
import logo from '../image/logop/logo.png'

import { Coach_profilInform_, Coach_profilInsert_ } from '../api/coach_profil';
export default function Login(props) {
    const [password, setPassword] = useState();
    const [email, setEmail] = useState(ReactSession.get("email"));
    const [coach_list, setCoachList] = useState();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const getCoachProfils = setInterval(() => {
            if (!isLoaded) {
                const userListFetched = Coach_profilInform_();
                userListFetched.then(result => {
                    setCoachList(result)
                }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
            } else {
                // Make sure to clear your interval in the else case,
                // or it will keep running (even though you don't see it)
                clearInterval(getCoachProfils);
            }
        }, coach_list);

        // Clear the interval every time `useEffect` runs
        return () => clearInterval(getCoachProfils);
    }, [isLoaded]);



    const changeEmail = useMemo(() => (params) => {
        setEmail(params.target.value)
    }, [email])

    const changePassword = useMemo(() => (params) => {
        setPassword(params.target.value)
    }, [password])

    const onSubmitLogin = async () => {
        let datas = {
            "email": email,
            "password": password
        };

        const userList = await userList_();
        const userPassword = await userList.filter(userList => userList.password.match(md5(datas["password"])))
        if (userList.filter(user => user.email.match(datas["email"])).length > 0 & userPassword.length > 0) {
            userList.filter(user => user.email.match(datas["email"])).map((user, key) => {
                if (user.email == datas["email"] & user.password == md5(datas["password"])) {
                    ReactSession.set("id", user.id);
                    ReactSession.set("first_name", user.first_name);
                    ReactSession.set("last_name", user.last_name);
                    ReactSession.set("email", user.email);
                    ReactSession.set("password", user.password);
                    ReactSession.set("phone_number", user.phone_number);
                    ReactSession.set("city", user.city);
                    ReactSession.set("postal_code", user.postal_code);
                    ReactSession.set("adress", user.adress);
                    ReactSession.set("appartment", user.appartment);
                    ReactSession.set("coach", user.coach);
                    ReactSession.set("admin", user.admin);
                    ReactSession.set("reservation", user.reservation);
                    ReactSession.set("login", 1);

                    // ajout automatique d'un coach_profile si l'utilisateur est un coach et si il n'a pas déjà un coach_profil
                    const userId = ReactSession.get("id")
                    ReactSession.set("isCoach", false);

                    if (ReactSession.get("coach") == 1) {


                        (coach_list && coach_list.map((list) => {
                            if (list.id == userId) {
                                ReactSession.set("isCoach", true);
                            }
                        }
                        ));

                        if (ReactSession.get("isCoach") == false) {
                            let datas = {
                                "user_id": userId,
                                "coach_name": "",
                                "desc": ""
                            };
                            ReactSession.remove("isCoach")
                            Coach_profilInsert_(datas);
                        }
                    }
                    //

                    props.setAlerts(0); //toast d'alerte
                    props.setShow(true); //toast afficher
                    props.setColors(2); //toast vert
                    setTimeout(() => { window.location.replace('/home'); }, 2000);
                } else {
                    props.setAlerts(2); //toast d'alerte
                    props.setShow(true); //toast afficher
                    props.setColors(1); //toast vert
                    setTimeout(() => { props.setShow(false); }, 2000);
                }
            })
        } else {
            props.setAlerts(2); //toast d'alerte
            props.setShow(true); //toast afficher
            props.setColors(1); //toast vert
            setTimeout(() => { props.setShow(false); }, 2000);
        }
    }



    return <div className="login-page">
        <div className="login-contain">
            <div className="box">
                <form>
                    <div className="login-input">
                        <div className='logo'><img src={logo} alt="Basket EBC" /></div>

                        <h1>Quel est votre mot de passe ?</h1>
                        <div className="input">
                            <p className="email">{email}</p>

                            <div className="checker">
                                <input placeholder="Mot de passe" type="password" id="password" onChange={changePassword} />
                            </div>
                            <div className="valid">
                                <input type="button" value="Se connecter" id="valid" onClick={onSubmitLogin} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

}
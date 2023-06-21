import { useEffect, useMemo, useState } from "react";
import { UserEmail_ } from "../api/user";
import { ReactSession } from 'react-client-session';
import "../style/verifemail.css"
import logo from '../image/logop/logo.png'

export function VerifyEmail() {
    const [emailList, setEmailList] = useState();
    const [email, setEmail] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isEmail, setIsEmail] = useState(false);


    useEffect(() => {
        const getUserEmail = setInterval(() => {
            if (!isLoaded) {
                const userListFetched = UserEmail_();
                userListFetched.then(result => {
                    setEmailList(result)
                }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
            } else {
                // Make sure to clear your interval in the else case,
                // or it will keep running (even though you don't see it)
                clearInterval(getUserEmail);
            }
        }, emailList);

        // Clear the interval every time `useEffect` runs
        return () => clearInterval(getUserEmail);
    }, [isLoaded]);


    const changeEmail = useMemo(() => (params) => {
        setEmail(params.target.value)
    }, [email])

    const onClick = (() => {
        ReactSession.set("email", email)
        if (isEmail) {
            setTimeout(() => { window.location.replace('/login'); }, 1000);
        }
        else {
            setTimeout(() => { window.location.replace('/sign_up'); }, 1000);
        }
    })

    useEffect(() => {
        emailList?.map((mail) => {
            if (mail.email === email) {
                setIsEmail(true)
            }
        })
    }, [email])


    return <div className="login-page">
        <div className="login-contain">
            <div className="box">
                <form>
                    <div className="login-input">
                        <div className='logo'><img src={logo} alt="Basket EBC" /></div>
                        <h1>Saisissez votre adresse e-mail pour<br></br> nous rejoindre ou vous connecter.</h1>
                        <div className="input">
                            <div className="checker">
                                <input placeholder="E-mail" type="text" id="email" onChange={changeEmail} />
                            </div>
                            <p>En continuant, vous acceptez les Conditions <br></br> d'utilisation et vous confirmez avoir lu la Politique <br></br>de confidentialité de Elite Basket Camp.</p>
                            <div className="valid">
                                <input id="valid" type="button" onClick={onClick} value="Continuer" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
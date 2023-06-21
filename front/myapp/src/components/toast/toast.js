import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

export function Toast_(props){
    const [close, setClose] = useState(true);

    const changeStatut = () =>{
        setClose(false);
    }

    const all_things=[
    "Connexion effectuée, bon retour parmis nous", //0
    "Déconnexion effectuée", //1
    "Adresse email/mot de passe incorrect", //2
    "Le mail ne peut pas être vide", //3
    "Les mots de passe ne correspondent pas", //4
    "Le nom d'utilisateur ne peut pas être vide", //5
    "Cette adresse email est déjà assignée à un compte", //6
    "Merci de bien vouloir mettre un caractère spécial, un chiffre, une minuscule et une majuscule dans votre mot de passe", //7
    "Informations modifiées avec succès", //8
    "Informations ajoutées avec succès", //9
    "Informations supprimées avec succès", //10
    "Merci de rentrer un numéro de carte valide", //11
    "Merci de rentrer les champs Mois et Année", //12
    "Merci de rentrer un cryptogramme valide", //13
    "Paiement effectué avec succès", //14
    "Carte sauvegardé et paiement effectué avec succès", //15
    "Création du compte effectuée", //16
    "Réservation ajoutée au panier", //17
    "Réservation supprimée du panier", //18
    "Stage réservé", //19
    "Pour pouvoir ajouter au panier il vous faut créer un compte", //20
    "Pour pouvoir accéder au contenu il est nécessaire de se connecter " //21
    ]
    const colors=['success','danger', "primary"]
return <Toast onClose={() => props.setShow(close)} show={props.show} delay={8000} autohide className='fixed' bg={colors[props.colors]}>
        <Toast.Header onClick={changeStatut}>
                    <img 
                        src="holder.js/20x20?text=%20"
                        alt=""      
                        className="rounded me-2"                  
                    />
                    <strong className="me-auto"><p>Alerte</p></strong>
                </Toast.Header>
                <Toast.Body><p>{all_things[props.alerts]}</p></Toast.Body>
    </Toast>
}
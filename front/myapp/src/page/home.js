import { ReactSession } from 'react-client-session';
import Navbar from "../components/navbar";
import EBC from './test';
import "../style/home.css"
import Iconflechright from '../components/icon/iconarrowright';
import GRP from '../image/GroupeBasket.JPG'
import GRPcurb from '../image/backgroundEBCstart.png'
import Insta from '../components/icon/iconinsta';
import Tiktok from '../components/icon/icontiktok';
import YTB from '../components/icon/iconytb';
import N4 from '../components/note/not4';
import FCB from '../components/icon/iconfcb';
import N5 from '../components/note/note5';
import N4half from '../components/note/note4half';
import G4half from '../image/NOTEhome/G4half.jpeg'
import G4 from '../image/NOTEhome/G4.jpeg'
import logo from '../image/logop/logo.png'
import Wave from '../components/wave';
import NavBarBlack from '../components/navbariconblack';

<script src="https://kit.fontawesome.com/bc8591f4e3.js" crossorigin="anonymous"></script>

function Home() {
    if (!ReactSession.get("id")) {
        ReactSession.set("id", -1);
        ReactSession.set("first_name", "");
        ReactSession.set("last_name", "");
        ReactSession.set("email", "");
        ReactSession.set("password", "");
        ReactSession.set("phone_number", "");
        ReactSession.set("city", "");
        ReactSession.set("postal_code", "");
        ReactSession.set("adress", "");
        ReactSession.set("appartment", "");
        ReactSession.set("coach", "");
        ReactSession.set("admin", 0);
        ReactSession.set("reservation", 0);
        ReactSession.set("login", 0);
    }

    return <div className="-contain">
        <NavBarBlack />
        <div className='home2'>
            <EBC />
            <div className='btn-to-rsrv'>
                <a href='/all_reservation_list'> Reserver votre Stage</a>
            </div>
        </div>

        <div className='slide1'>
            <div className='BGgrp'>
                <div className='logo'><img src={logo} alt="Basket EBC" /></div>
                <div className='img'>
                    <div className='img1'></div>
                    <div className='bloc'>

                        <span className='wave1'></span>
                        <span className='bloc1'></span>

                        <span className='wave2'></span>
                        <span className='bloc2'></span>

                    </div>

                </div>
                <div className='dzzd'>
                    <div className='vidéoEBC'>
                        <video width="100%" height="100%" preload="auto">
                            <source src={GRPcurb} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
        </div>


        <div className='slide2'>
            <span className='whitecorner righph'></span>
            <div className='back'>
                <div className='slide2 ptG'>
                    <div className='ptG top'></div>
                    <div className='ptD bottom'></div>
                </div>
                <div className='slide3 ptD'>
                </div>
            </div>
            <div className='relative slide 2'>
                <div className='photo1'>
                    <div className='img1 D1'></div>
                    <div className='img2 D2'></div>
                    <div className='img3 D3'></div>
                    <div className='img4 CENTER'></div>
                    <div className='img4 CENTERBack'></div>
                    <div className='img5 G1'></div>
                    <div className='img6 G2'></div>
                    <div className='img7 G3'></div>
                </div>
                <div className='text1'>
                    <h1>Rejoins Nous</h1>
                    <p className='1'>et viens découvrir l'ambiance <br></br> "Elite Basket Camp"</p>
                    <p className='2'>Sélectionne le stage de ton choix parmi de nombreuse <br></br> possibilités :</p>
                    <h2 className='1'>Il y en a pour tous les gouts.</h2>
                    <p className='3'>Que tu souhaites te confronter à un <span className='blue'>niveau d’exigence</span>  et <br></br> de travail similaire au <span className='blue'>monde professionnel</span> , tout en <br></br>partageant une aventure exceptionnelle entourés des <br></br> <span className='blue'> meilleurs basketteurs</span> <br></br> de la région : </p>
                    <h2 className='2'>"Elite Basket "Performance" </h2>
                    <p className='4'>Ou que tu souhaites tout simplementte <br></br><span className='blue'>perfectionner</span> , tout en prenant  <br></br> <span className='blue'>du plaisir</span>  durant une semaine de vacances :</p>
                    <h2 className='3'>"Elite Basket Camp"</h2>
                    <div className='morinfo'>
                        <a href='#'><h3>Retrouver nos camps</h3></a>
                    </div>
                </div>

            </div>
        </div>


        <div className='slide4'>

            <div className='reseaux'>

                <span className='wave'></span>
                <span className='bloc'></span>

                <span className='wave2'></span>
                <span className='bloc2'></span>

                <span className='wave3'></span>
                <span className='bloc3'></span>

                <span className='wave4'></span>
                <span className='bloc4'></span>


                <div id='intro'>
                    <h1>Nos reseaux</h1>
                </div>
                <div id='contact-info'>
                    <div className='links'>
                        <a href='#' target='_blank' className='orange-border'>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <FCB />
                                </span>
                            </div>
                        </a>
                        <a href='#' target='_blank' className='orange-border' >
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <YTB />
                                </span>

                            </div>
                        </a>
                        <a href='#' className='orange-border' target='_blank'>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <Tiktok />
                                </span>
                            </div>
                        </a>
                        <a href='#' className='orange-border' target='_blank'>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <Insta />
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='slide3'>
            <div className='back'>
                <div className='slide3 ptG'>

                </div>
                <div className='slide3 ptD'>
                    <div className='ptG top'></div>
                    <div className='ptD bottom'></div>
                </div>
            </div>
            <div className='relative2 slide-3'>
                <div className='text2'>
                    <h1>Notre équipe</h1>
                    <p className='1'>jeune et surmotivée rendra vos vacances inoubliables.</p>
                    <p className='2'>Avec un STAFF composé de plus de 20 expert dans leur domaine.<br></br><span className='blue'>Vous ne serez pas déçu.</span></p>
                    <p className='3'>Car nous souhaitons que tu sois dans les <span className='blue'>meilleurs <br></br> conditions possible</span>, Nous avons composer une équipe de <br></br> choc :<br></br>
                        <span className='blue'> Des joueurs et joueuses professionnels</span> ou<span className='blue'> en équipe de <br></br> France</span> mais aussi des coachs et recruteurs en <span className='blue'>centre de <br></br> formation</span> ou au <span className='blue'>pole espoir</span>.</p>
                    <h2 className='1'>Les cartes sont entre tes mains </h2>
                    <p className='4'>De plus pour rendre ta semaine encore plus<br></br><span className='blue'> exceptionnelle</span>. Tu auras peut-être la chance de <br></br> rencontrer notre <span className='blue'>coiffeur</span>, notre  <span className='blue'>photographe</span>, notre <span className='blue'>kiné</span> <br></br> ou</p>
                    <h2 className='2'>bien d'autres encore !</h2>
                    <div className='morinfo'>
                        <a href='#'><h3>En savoir +</h3></a>
                    </div>

                </div>
                <div className='photo2'>
                    <div className='img1 D1'></div>
                    <div className='img2 D2'></div>
                    <div className='img3 D3'></div>
                    <div className='img4 CENTER'></div>
                    <div className='img4 CENTERBack'></div>
                    <div className='img5 G1'></div>
                    <div className='img6 G2'></div>
                    <div className='img7 G3'></div>
                </div>


            </div>
        </div>


        <div className='slide5'>
            <div className='bgs5'><Wave /></div>
            <div className='pt'>
                <div className='pt1'>
                    <div className='pt1G'>
                        <div className='card1'>
                            <div className='cardinfo'>
                                <div className='photo'><img src={G4half} alt="Basket EBC" />
                                    <div className='content-PR-FCTN'>
                                        <div className='prenom'><h3>Liam</h3></div>
                                        <div className='fonction'>Eleve EBC</div>
                                    </div>
                                </div>
                                <div className='note'>
                                    <N4half />
                                </div>
                            </div>
                            <div className='cardinfo2'>
                                <div className='texte'><p>"Il y a plein d'activités en dehors du basket, il y a une bonne ambiance, je trouve ça amusant et unique"</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='pt1D'>
                        <div className='card1'>
                            <div className='cardinfo'>
                                <div className='photo'><img src={G4} alt="Basket EBC" />
                                    <div className='content-PR-FCTN'>
                                        <div className='prenom'><h3>Hugo</h3></div>
                                        <div className='fonction'>Eleve EBC</div>
                                    </div>
                                </div>
                                <div className='note'><N4 /></div>
                            </div>
                            <div className='cardinfo2'>
                                <div className='texte'><p>"J'ai le sentiment d'avoir progressé en m'entrainant avec un coach de centre de formation, il nous a poussé à fond, c'était cool"</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt2'>
                    <div className='card2'>
                        <div className='card1'>
                            <div className='cardinfo'>
                                <div className='photo'><img src={G4} alt="Basket EBC" />
                                    <div className='content-PR-FCTN'>
                                        <div className='prenom'><h3>Eric</h3></div>
                                        <div className='fonction'>Parent d'eleve EBC</div>
                                    </div>
                                </div>
                                <div className='note'><N5 /></div>
                            </div>
                            <div className='cardinfo2'>
                                <div className='texte'><p>"Le stage est super intéressant, les enfants s'ouvrent aux autres, ils sont avec les copains, ils partagent des moments ensemble au lieu d'être sur la PS4. Pour moi le sport c'est l'école de la vie"</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=''>

        </div>
        <div className='slide6'>
            <div className='title6'><h2>Nos Partenaire</h2></div>
            <div className='partenaire'>
                <img src={logo} alt="Basket EBC" />
                <img src={logo} alt="Basket EBC" />
                <img src={logo} alt="Basket EBC" />
                <img src={logo} alt="Basket EBC" />
            </div>
        </div>
        <div>

        </div>
    </div>
}

export default Home;
import React, {useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import Admenu from "../../../components/admin-menu";
import "../../../style/admin/ad-resalist.css"
import { newsInsert_ } from '../../../components/news/newsInsert';
import { newsList_ } from '../../../components/news/newsList';
import NewsInfo from './newsInfo';

export function AdminNews(props) {
    const [news, setNews] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const onClickInsertNews = async () => {
        let datas = {
            "img": "",
            "desc": "" 
        };
        newsInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_news'); }, 1000);
    }

    useEffect(() => {
        const getNews = setInterval(() => {
            if(!isLoaded){
                const newsListFetched = newsList_();
                newsListFetched.then(result => {
                        setNews(result) 
                    }).catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getNews);
                }
            }, news);

            // Clear the interval every time useEffect runs
            return () => clearInterval(getNews);
    }, [isLoaded]);




    if (ReactSession.get("admin") && ReactSession.get("admin") != 0) {
        return <div className='resaadd'>
            <Admenu />
            {news && JSON.stringify(news) != "[]" ?
                    news.map((newss) => {
                        return <div key={newss.id} className="ad-rsrv-contain">
                            <div><NewsInfo newss={newss} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} /></div>
                        </div>
                    })
                    :
                    <input type="submit" value="Ajouter une actualité" onClick={onClickInsertNews} />
                }
        </div>

    } else {
        window.location.replace('/home')
    }

}


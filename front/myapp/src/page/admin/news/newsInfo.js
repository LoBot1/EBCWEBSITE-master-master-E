import React, { useMemo } from 'react';
import { useState } from "react";
import { newsDelete_ } from "../../../components/news/newsDelete";
import { newsUpdate_ } from "../../../components/news/newsUpdate";
import { newsInsert_ } from "../../../components/news/newsInsert";
import { UploadFile } from '../../../components/file/uploadFile';
import { DeleteFile } from '../../../components/file/deleteFile';



export default function NewsInfo(props) {
    const [id, setId] = useState(props.newss.id);
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState(props.newss.desc);


    const changeId = useMemo(() => (params) => {
        setId(params.target.value)
    }, [id])

    const changeImg = useMemo(() => (params) => {
        setImg(params.target.files[0])
    }, [img])
    const changeDesc = useMemo(() => (params) => {
        setDesc(params.target.value)
    }, [desc])


    const uploadFile = () => 
    {
        UploadFile(id, "news", "img", img);
    }

    const deleteFile = () => 
    {
        DeleteFile(props.newss.img);
    }

    const onClickDeleteNews = async () => {
        let data = {
            "id": id,
        };
        deleteFile();
        newsDelete_(data);
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_news'); }, 1000);
    }

    const onClickInsertNews = async () => {
        let datas = {
            "id": id,
            "img": img,
            "desc": desc            
        };
        uploadFile();
        newsInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_news'); }, 1000);

    }

    const onClickUpdateNews = async () => {
        let datas = {
            "id": id,
            "img": img,
            "desc": desc 
        };
        deleteFile();
        uploadFile();
        newsUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_news'); }, 1000);
    }

    return <div className="rsrv-info-contain">

        <form>
            <div className="info-resadd">
                <div className="info3"><input type="hidden" id="reservationId" value={id} onChange={changeId} /></div>
                <div className="info3"><p>Description</p><input placeholder="Description" type="text" id="desc" onChange={changeDesc} defaultValue={desc} /></div>
                <div className="info3"><p>Image</p>
                <input placeholder="Image" type="file" id="img" onChange={changeImg} defaultValue={img} />
                {props.newss.img.length > 0 &&
                <img src={require(`${_dirname}/../../image/pictures/` + props.newss.img)}></img>
                }
                </div>
            </div>

            <div className="checka-add">
                <input type="button" value="Modifier l'actualité" onClick={onClickUpdateNews} />
                <input type="button" value="Supprimer l'actualité" onClick={onClickDeleteNews} />
                <input type="button" value="Ajouter une actualité" onClick={onClickInsertNews} />
            </div>
        </form>
    </div>
}
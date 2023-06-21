import React, { useMemo } from 'react';
import { useState} from "react";
import "../../../style/admin/ad-menu.css"

import { reservationDelete_ } from "../../../components/reservation/reservationDelete";
import { reservationUpdate_ } from "../../../components/reservation/reservationUpdate";
import { reservationInsert_ } from "../../../components/reservation/reservationInsert";
import { UploadFile } from '../../../components/file/uploadFile';
import { DeleteFile } from '../../../components/file/deleteFile';

export default function ReservationInfo(props) {
    const [price, setPrice] = useState(props.reservation.price);
    const [avaible, setAvaible] = useState(props.reservation.avaible);
    const [start_date, setStart_Date] = useState(props.reservation.start_date);
    const [finish_date, setFinish_Date] = useState(props.reservation.finish_date);
    const [category, setCategory] = useState(props.reservation.category);
    const [place, setPlace] = useState(props.reservation.place);
    const [coach_name, setCoach_name] = useState(props.reservation.coach_name);
    const [id, setId] = useState(props.reservation.id);
    const [desc, setDesc] = useState(props.reservation.desc);   
    const [desc2, setDesc2] = useState(props.reservation.desc2);

    const [mainImage, setMainImage] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [video, setVideo] = useState("");


    const changePrice = useMemo(() => (params) => {
        setPrice(params.target.value)
    }, [price])
    const changeAvaible = useMemo(() => (params) => {
        setAvaible(params.target.value)
    }, [avaible])
    const changeCategory = useMemo(() => (params) => {
        setCategory(params.target.value)
    }, [category])
    const changeStart_Date = useMemo(() => (params) => {
        setStart_Date(params.target.value)
    }, [start_date])
    const changeFinish_Date = useMemo(() => (params) => {
        setFinish_Date(params.target.value)
    }, [finish_date])
    const changePlace = useMemo(() => (params) => {
        setPlace(params.target.value)
    }, [place])
    const changeCoach_name = useMemo(() => (params) => {
        setCoach_name(params.target.value)
    }, [coach_name])
    const changeId = useMemo(() => (params) => {
        setId(params.target.value)
    }, [id])
    const changeDesc = useMemo(() => (params) => {
        setDesc(params.target.value)
    }, [desc])
    const changeDesc2 = useMemo(() => (params) => {
        setDesc2(params.target.value)
    }, [desc2])

    const changeMainImage = useMemo(() => (params) => {
        setMainImage(params.target.files[0])
    }, [mainImage])
    const changeImage1 = useMemo(() => (params) => {
        setImage1(params.target.files[0])
    }, [image1])
    const changeImage2 = useMemo(() => (params) => {
        setImage2(params.target.files[0])
    }, [image2])
    const changeImage3 = useMemo(() => (params) => {
        setImage3(params.target.files[0])
    }, [image3])
    const changeVideo = useMemo(() => (params) => {
        setVideo(params.target.files[0])
    }, [video])

    const uploadFile = () => {
        UploadFile(id, "reservation", "mainImage", mainImage);
        UploadFile(id, "reservation", "image1", image1);
        UploadFile(id, "reservation", "image2", image2);
        UploadFile(id, "reservation", "image3", image3);
        UploadFile(id, "reservation", "video", video);
    }

    const deleteFile = () => 
    {
        DeleteFile(props.reservation.mainImage);
        DeleteFile(props.reservation.image1);
        DeleteFile(props.reservation.image2);
        DeleteFile(props.reservation.image3);
        DeleteFile(props.reservation.video);
    }


    const onClickDeleteReservation = async () => {
        let data = {
            "id": id,
        };
        deleteFile();
        reservationDelete_(data);
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);
    }

    const onClickInsertReservation = async () => {
        let datas = {
            "coach_name": coach_name,
            "place": place,
            "start_date": start_date,
            "finish_date": finish_date,
            "category": category,
            "price": price,
            "desc": desc,
            "desc2": desc2,
            "avaible": avaible,
            "mainImage": "mainImage",
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "video": video
        };        
        uploadFile();
        reservationInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);

    }

    const onClickUpdateReservation = async () => {
        let datas = {
            "id": id,
            "coach_name": coach_name,
            "place": place,
            "start_date": start_date,
            "finish_date": finish_date,
            "category": category,
            "price": price,
            "desc": desc,
            "desc2": desc2,
            "avaible": avaible,
            "mainImage": mainImage,
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "video": video
        };
        deleteFile();
        uploadFile();
        console.log(mainImage)
        reservationUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);
    }

    return <div className="rsrv-info-contain">

        <form>
            <div className="info-resadd">
                <div className="info3"><input type="hidden" id="reservationId" value={id} onChange={changeId} /></div>
                <div className="info3"><p>Nom de Coach</p><input placeholder="Nom du coach" type="text" id="coach_name" onChange={changeCoach_name} defaultValue={coach_name} /></div>
                <div className="info3"><p>Lieu</p><input placeholder="Lieu" type="text" id="place" onChange={changePlace} defaultValue={place} /></div>
                <div className="info3"><p>Date - Start</p><input placeholder="Date de début (jour/mois/année) (j/m/aaaa) " type="date" id="start_date" onChange={changeStart_Date} defaultValue={start_date} /></div>
                <div className="info3"><p>Date - End</p><input placeholder="Date de fin (jour/mois/année) (j/m/aaaa) " type="date" id="finish_date" onChange={changeFinish_Date} defaultValue={finish_date} /></div>
                <div className="info3"><p>Catégorie d'âge</p><input placeholder="Catégorie d'âge" type="text" id="category" onChange={changeCategory} defaultValue={category} /></div>
                <div className="info3"><p>Prix</p><input placeholder="Prix" type="text" id="price" onChange={changePrice} defaultValue={price} /></div>
                <div className="info3"><p>Description</p><input placeholder="Desc" type="text" id="desc" onChange={changeDesc} defaultValue={desc} /></div>
                <div className="info3"><p>Description2</p><input placeholder="Desc2" type="text" id="desc2" onChange={changeDesc2} defaultValue={desc2} /></div>
                <div className="info3"><p>Disponible</p><input placeholder="Disponible (true or false)" type="text" id="avaible" onChange={changeAvaible} defaultValue={avaible} /></div>
                
                <div className="info3"><p>Image Pricipale</p>
                <input placeholder="Image Pricipale" type="file" id="mainImage" onChange={changeMainImage} defaultValue={mainImage} /> 
                {props.reservation.mainImage.length > 0 &&
                <img src={require(`${_dirname}/../../../image/pictures/`+ props.reservation.mainImage)}></img>
                }
                </div>

                <div className="info3"><p>Image1</p>
                <input placeholder="Image1" type="file" id="image1" onChange={changeImage1} defaultValue={image1} />
                {props.reservation.image1.length > 0 &&
                <img src={require(`${_dirname}/../../../image/pictures/`+ props.reservation.image1)}></img>
                }
                </div>

                <div className="info3"><p>Image2</p>
                <input placeholder="Image2" type="file" id="image2" onChange={changeImage2} defaultValue={image2} />
                {props.reservation.image2.length > 0 &&
                <img src={require(`${_dirname}/../../../image/pictures/` + props.reservation.image2)}></img>
                }
                </div>

                <div className="info3"><p>Image3</p>
                <input placeholder="Image3" type="file" id="image3" onChange={changeImage3} defaultValue={image3} />
                {props.reservation.image3.length > 0 &&
                <img src={require(`${_dirname}/../../../image/pictures/` + props.reservation.image3)}></img>
                }
                </div>
                <div className="info3"><p>Video</p>
                <input placeholder="Video" type="file" id="vide" onChange={changeVideo} defaultValue={video} />
                {console.log(props.reservation.video)}
                {props.reservation.video.length > 0 &&
                <img src={require(`${_dirname}/../../../image/pictures/` + props.reservation.video)}></img>
                }
                </div>
               

            </div>
            <div className="checka-add">
                <input type="button" value="Sauvergarder" onClick={onClickUpdateReservation} />
                <input type="button" value="Supprimer " onClick={onClickDeleteReservation} />
                <input type="button" value="Ajouter une reservation" onClick={onClickInsertReservation} />
            </div>
        </form>
    </div>
}
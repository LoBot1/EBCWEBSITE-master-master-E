import { useEffect, useMemo, useState } from "react";
import { ReactSession } from 'react-client-session';
import { reservationDate_ } from "../components/reservation/reservationDate";
import { reservationPlace_ } from "../components/reservation/reservationPlace";
import { reservationCategory_ } from "../components/reservation/reservationCategory";
import "../style/reservationCard.css";
import { Display } from "../components/display/allReservationList";
import { reservationList_ } from "../components/reservation/reservationList";
import { RemoveEntity, RemoveEntityObject } from "../components/sliceArray";
import NavBar from "../components/navbar";
import NavBarBlack from "../components/navbariconblack";


export function AllReservationList(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [reservation, setReservation] = useState(null);
    const [search, setSearch] = useState();
    const [resaListDate, setResaListDate] = useState(); // date de début
    const [resaListPlace, setResaListPlace] = useState();
    const [resaListCategory, setResaListCategory] = useState();
    const [filterArray, setFilterArray] = useState([]);
    const [displayValue, setDisplayValue] = useState([]);
    const [value, setValue] = useState([]);

    const renderValue = useMemo( () =>
    {
        return value?.map((resa, key) => {
            return <Display key={key} resa={resa} setAlerts={props.setAlerts} setShow={props.setShow} setColors={props.setColors} />
        })
    }, [value])

    useEffect(() => {
        const getData = setInterval(() => {
            if(!isLoaded){
                const reservationFetched = reservationList_();
                const placeFetched = reservationPlace_();
                const dateFetched = reservationDate_();
                const categoryFetched = reservationCategory_();
        
                reservationFetched
                    .then(result => setReservation(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
        
                placeFetched
                    .then(result => setResaListPlace(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
        
                dateFetched
                    .then(result => setResaListDate(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
        
                categoryFetched
                    .then(result => setResaListCategory(result))
                    .catch(error => console.error('Erreur avec notre API :', error.message));
                return setIsLoaded(!isLoaded);
                }else{
                    // Make sure to clear your interval in the else case,
                    // or it will keep running (even though you don't see it)
                    clearInterval(getData);
                }
            }, []);
    
            // Clear the interval every time `useEffect` runs
            return () => clearInterval(getData);       

    }, [isLoaded]);

    useEffect(() => {
        if (reservation) {
            setDisplayValue([...reservation])
            setValue([...reservation])
        }
    }, [reservation]);


    useEffect (() => {
        if (filterArray.length > 0){
            setValue([])
            filterArray.forEach((filter, key2) => {
                const filterKey = Object.keys(filter) 
                reservation.forEach((resa, key) => {
                    if (filter[filterKey] == resa[filterKey])
                    {
                    setValue((oldFilter) => {
                        let newFilter = [...oldFilter];
                        newFilter = [...oldFilter, resa]
                        return newFilter
                    });
                    }
                })
            })
    }else{
        setValue(displayValue);
    }
        
    }, [filterArray])

    
    // useEffect (() => {
    //     if (filterArray.length > 0){
    //         setValue([])
    //         filterArray.forEach((filter, key2) => {
    //             const filterKey = Object.keys(filter) 
    //             reservation.forEach((resa, key) => {
    //                 value.forEach((val, key3) => {
    //                     // console.log(filter[filterKey])
    //                     // console.log(resa[filterKey])
    //                     if (filter[filterKey] == resa[filterKey] && filter[filterKey] != val[filterKey])
    //                     {
    //                     setValue((oldFilter) => {
    //                         let newFilter = [...oldFilter];
    //                         newFilter = [...oldFilter, resa]
    //                         // console.log(newFilter)
    //                         return newFilter
    //                     });
    //                     }
    //             })
    //             })
    //         })
    // }else{
    //     setValue(displayValue);
    // }
        
    // }, [filterArray])



    const searchChoice = (params, object) => {
        if (params.target.checked) {
            setFilterArray((oldFilter) => {
                let newFilter = [...oldFilter, object];                
                return newFilter
            });}
        else {
            setFilterArray((oldFilter) => {
                let newFilter = [...oldFilter];
                newFilter = newFilter.filter(value => value !== object)
                return newFilter
            });
        }

        setSearch(true)
        // console.log(filterArray)
        
    }

    

    if ( ReactSession.get("login") && ReactSession.get("login") == 1){
    return reservation &&
        <div className="rsrv-content">
            <NavBarBlack />
            <div className="all-rsrv">
                <div className="search-rsrvlist PTG">
                    <h2>Lieux</h2>
                    {/* <input type="checkbox" value="all" onChange={searchChoice} /> All */}
                    {resaListPlace && resaListPlace.map((resa, key) => {
                        return <div key={key}><input type="checkbox" value={resa.place} onChange={(params) =>{searchChoice(params,resa)}} /> {resa.place}  </div>
                    })}
                    <h2>Date de début</h2>
                    {/* <input type="checkbox" value="all" onChange={searchChoice} /> All */}
                    {resaListDate && resaListDate.map((resa, key) => {
                        return <div key={key}><input type="checkbox" value={resa.start_date} onChange={(params) =>{searchChoice(params,resa)}} /> {resa.start_date}  </div>
                    })}
                    <h2>Catégorie d'âge</h2>
                    {/* <input type="checkbox" value="all" onChange={searchChoice} /> All */}
                    {resaListCategory && resaListCategory.map((resa, key) => {
                        return <div key={key}><input type="checkbox" value={resa.category} onChange={(params) =>{searchChoice(params,resa)}} /> {resa.category}  </div>
                    })}
                </div>
                <div className="card-all PTD">
                     {renderValue}
                </div>
            </div>
        </div>
    }else{
        props.setAlerts(21); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(2); //toast vert
        setTimeout(() => { window.location.replace('/verify_email') }, 1500);
    }

}

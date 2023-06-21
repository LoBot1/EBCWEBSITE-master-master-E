export function ReservationList({resa}) {

    return <div>
        <div>
            <p value="coach_name">{resa.coach_name}</p>
            <p value="place">{resa.place}</p>
            <p value="price">{resa.price}</p>
            <p value="start_date">{resa.start_date}</p>
            <p value="finish_date">{resa.finish_date}</p>
            <p value="avaible">{resa.avaible}</p>
        </div>

    </div>
}
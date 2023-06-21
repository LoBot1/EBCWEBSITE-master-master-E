import { ReservationInsert_ } from "../../api/reservation";   
       
export async function reservationInsert_(reservation){
    return await ReservationInsert_(reservation) ; 
}
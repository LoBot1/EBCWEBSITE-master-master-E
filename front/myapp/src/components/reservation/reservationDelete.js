import { ReservationDelete_ } from "../../api/reservation";   
       
export async function reservationDelete_(reservation){
    return await ReservationDelete_(reservation) ; 
}
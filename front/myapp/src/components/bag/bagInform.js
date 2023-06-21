import { BagInform_ } from "../../api/bag";

export async function bagInfo(bag){
    return await BagInform_(bag) ; 
}
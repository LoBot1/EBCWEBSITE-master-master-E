import Admenu from "../../components/admin-menu";
import "../../style/admin/ad_home.css"
export function Admin_home() {
    return <div className="ad-home-contain">
        <div className="title">
            <h1>Panel Administrateur</h1>
            </div>
        <Admenu/>
    </div>
}

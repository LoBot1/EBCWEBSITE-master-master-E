import NavBar from "../components/navbar";
import "../style/404.css"

function error404(params) {
    return <div className="404-contain">
        <NavBar />
        <div className="e404">
            <div className="ee">
                <div className="e404-1"><h1>Erreur 404</h1></div>
                <div className="e404-2"><p>Page introuvable</p></div>
            </div>
        </div>
    </div>

}
export default error404;
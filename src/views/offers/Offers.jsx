import "./offers.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
    return (
        <div className="offers">
            <Sidebar />
            <div className="offersContainer">
                <Navbar />
                <h1>Liste des Annonces</h1>

            </div>
        </div>
    )
}

export default List
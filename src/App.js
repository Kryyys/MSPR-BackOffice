import Home from "./views/home/Home";
import Login from "./views/login/Login";
import List from "./views/list/List";
import Offers from "./views/offers/Offers";
import SeeUser from "./views/seeUser/SeeUser";
<<<<<<< HEAD
import SeeOffer from "./views/seeOffer/SeeOffer";
=======
import ModifyUser from "./views/modifyUser/ModifyUser";
>>>>>>> user
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="offers" element={<Offers />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="informations/:idUser" element={<SeeUser />} />
              <Route path="modify/:idUser" element={<ModifyUser />} />
            </Route>
          </Route>
<<<<<<< HEAD
          <Route path="informations/:idUser" element={<SeeUser/>}/>
          <Route path="informationsOffer/:idAdvertisement" element={<SeeOffer/>}/>
        </Route>
      </Routes>
=======
        </Routes>
>>>>>>> user
      </BrowserRouter>
    </div>
  );
}

export default App;

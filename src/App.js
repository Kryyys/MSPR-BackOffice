import Home from "./views/home/Home";
import Login from "./views/login/Login";
import List from "./views/list/List";
import Offers from "./views/offers/Offers";
import SeeUser from "./views/seeUser/SeeUser";
import SeeOffer from "./views/seeOffer/SeeOffer";
import SignUp from "./views/signUp/SignUp";
import ModifyUser from "./views/modifyUser/ModifyUser";
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
          <Route path="signup" element={<SignUp/>}/>
            <Route path="offers" element={<Offers />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="informations/:idUser" element={<SeeUser />} />
              <Route path="modify/:idUser" element={<ModifyUser />} />
            </Route>
            <Route path="informationsOffer/:idAdvertisement" element={<SeeOffer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

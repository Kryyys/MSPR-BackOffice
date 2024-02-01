import Home from "./views/home/Home";
import Login from "./views/login/Login";
import List from "./views/list/List";
import Offers from "./views/offers/Offers";
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
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="offers" element={<Offers/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

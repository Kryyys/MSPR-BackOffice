import Home from "./views/home/Home";
import Login from "./views/login/Login";
import List from "./views/list/List";
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

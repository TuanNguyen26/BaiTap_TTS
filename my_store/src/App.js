import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import { path } from "./compoents/Ultils/Constant";
import LayoutStore from "./compoents/Layout/LayoutStore";
import LayOutContent from "./compoents/Layout/LayOutContent";
import LoginForm from "./compoents/public/Login";
import SearchMovies from "./compoents/searchProduct/SearchProduct";
import InfoUser from "./compoents/User/InfoUser";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.HOME} element={<LoginForm></LoginForm>}></Route>

        <Route element={<Protected />}>
          <Route element={<LayoutStore></LayoutStore>}>
            <Route
              path={path.CONTENT}
              element={<LayOutContent></LayOutContent>}
            ></Route>
            <Route
              path={path.SEARCH}
              element={<SearchMovies></SearchMovies>}
            ></Route>
            <Route path={path.USER} element={<InfoUser></InfoUser>}></Route>
          </Route>
        </Route>
      </Routes>

      {/* <AddFormProduct></AddFormProduct> */}
    </div>
  );
}

export default App;

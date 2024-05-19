import { Route, Routes } from "react-router-dom";
import "./Header/Header.scss";
import Layout from "./Layout";
import Main from "./Main/Main";
import Search from "./Serach/Search";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default App;

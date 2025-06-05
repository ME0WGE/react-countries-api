import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import Home from "./pages/Home/Home";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

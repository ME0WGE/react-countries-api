import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import Home from "./pages/Home/Home";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
      ) //https://restcountries.com/v3.1/all ne fonctionne plus pour fetch les informations donc l'URL a été modifiée dans la fonction get().
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home countries={data} />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

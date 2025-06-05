import CountryCard from "../../components/CountryCard/CountryCard";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import "./Home.css";

export default function Home({ countries }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  return (
    <>
      {/* SearchBar & Filter */}
      <div className="search-filter">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <div className="homeContainer">
        <CountryCard countries={countries} />
      </div>
    </>
  );
}

import CountryCard from "../../components/CountryCard/CountryCard";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import "./Home.css";

export default function Home({ countries }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (!countries) return;

    let result = [...countries];

    // PS: Les deux filtres (Search & Dropdown) sont vérifiées simultanément. Cela empêche par ex. de trouver "Belgique" en la recherchant dans la searchbar quand la région ne correspond pas au pays, par ex. "Asie".
    // Filtrer par terme de recherche (si non vide)
    if (searchTerm.trim() !== "") {
      result = result.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par région sélectionnée (si non vide)
    if (selectedRegion) {
      result = result.filter((country) => country.region === selectedRegion);
    }

    setFilteredCountries(result);
  }, [countries, searchTerm, selectedRegion]);

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
        <CountryCard countries={filteredCountries} />
      </div>
    </>
  );
}

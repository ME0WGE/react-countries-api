import { useState } from "react";
import "./Filter.css";

export default function Filter({ selectedRegion, setSelectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Handle the dropdown menu toggle
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle the region selection
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  // Clear region filter
  const clearRegionFilter = (e) => {
    e.stopPropagation(); // Éviter le déclenchement du dropdown
    setSelectedRegion("");
  };

  return (
    <>
      {/* Filter container for the SearchBar & the Dropdown menu */}
      <div className="filter-container">
        <div className="filter-dropdown" onClick={toggleDropdown}>
          <span>{selectedRegion || "Filter by Region"}</span>
          {selectedRegion && (
            <button className="clear-filter" onClick={clearRegionFilter}>
              ×
            </button>
          )}
          {/* Arrow is Up or Down depending on the current state */}
          <i className={`arrow ${isOpen ? "up" : "down"}`}></i>
        </div>

        {/* If the dropdown menu is open, then execute this code */}
        {isOpen && (
          <div className="dropdown-content">
            {regions.map((region) => (
              <div
                key={region}
                className="dropdown-item"
                onClick={() => handleRegionSelect(region)}>
                {region}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

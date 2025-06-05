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

  return (
    <>
      {/* Filter container for the SearchBar & the Dropdown menu */}
      <div className="filter-container">
        <div className="filter-dropdown" onClick={toggleDropdown}>
          <span>{selectedRegion || "Filter by Region"}</span>
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

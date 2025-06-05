import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="search-filter">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}

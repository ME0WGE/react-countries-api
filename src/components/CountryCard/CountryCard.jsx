import { Link } from "react-router-dom";
import "./CountryCard.css";

export default function CountryCard({ countries = [] }) {
  if (!countries.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="divCardGlo">
      {countries.map((country) => (
        <Link
          to={`/country/${country.name.common}`}
          key={country.name.common}
          className="card-link">
          <div className="divCardOne">
            <div className="cardImg">
              <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
            <div className="cardText">
              <h4>{country.name.common}</h4>
              <p>
                <b>Population: </b>
                {country.population.toLocaleString()}
              </p>
              <p>
                <b>Région: </b>
                {country.region}
              </p>
              <p>
                <b>Capitale: </b>
                {country.capital?.[0] || "N/A"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

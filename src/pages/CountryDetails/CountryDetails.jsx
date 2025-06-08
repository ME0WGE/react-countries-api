import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Récupération des informations du pays spécifique par son nom
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        // On stocke le premier pays trouvé (devrait être le seul avec fullText=true)
        const countryData = response.data[0];
        setCountry(countryData);

        // Si le pays a des pays frontaliers
        if (countryData.borders && countryData.borders.length > 0) {
          // On récupère les informations des pays frontaliers
          axios
            .get(
              `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
                ","
              )}`
            )
            .then((bordersResponse) => {
              setBorderCountries(bordersResponse.data);
              setLoading(false);
            })
            .catch((error) => {
              console.log(
                "Erreur lors de la récupération des pays frontaliers:",
                error
              );
              // On continue même si on n'a pas les pays frontaliers
              setLoading(false);
            });
        } else {
          // Pas de pays frontaliers
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération du pays:", error);
        setError("Impossible de trouver ce pays");
        setLoading(false);
      });
  }, [name]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!country) return <div className="error">Pays non trouvé</div>;

  // Extraire les informations du pays
  const nativeName =
    Object.values(country.name.nativeName || {})[0]?.common ||
    country.name.common;

  const currencies = Object.values(country.currencies || {})
    .map((currency) => currency.name)
    .join(", ");

  const languages = Object.values(country.languages || {}).join(", ");

  return (
    <div className="country-details-container">
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Link>

      <div className="country-details-content">
        <div className="country-flag-large">
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        </div>

        <div className="country-info">
          <h1>{country.name.common}</h1>

          <div className="info-columns">
            <div className="info-column-left">
              <p>
                <span className="detail-label">Native Name:</span> {nativeName}
              </p>
              <p>
                <span className="detail-label">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="detail-label">Region:</span> {country.region}
              </p>
              <p>
                <span className="detail-label">Sub Region:</span>{" "}
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="detail-label">Capital:</span>{" "}
                {country.capital?.[0] || "N/A"}
              </p>
            </div>

            <div className="info-column-right">
              <p>
                <span className="detail-label">Top Level Domain:</span>{" "}
                {country.tld?.[0] || "N/A"}
              </p>
              <p>
                <span className="detail-label">Currencies:</span>{" "}
                {currencies || "N/A"}
              </p>
              <p>
                <span className="detail-label">Languages:</span>{" "}
                {languages || "N/A"}
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="border-countries">
              <div className="border-title">Border Countries:</div>
              <div className="border-buttons">
                {borderCountries.map((border) => (
                  <Link
                    key={border.cca3}
                    to={`/country/${border.name.common}`}
                    className="border-button">
                    {border.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

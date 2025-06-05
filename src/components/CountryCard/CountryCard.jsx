import "./CountryCard.css";
import { useEffect, useState } from "react";


export default function CountryCard({countries = []}) {
  if (!countries.length) {
    return <div>Loading...</div>;
  } 


  return(


    <div className="divCardGlo">
      {countries.map((country) => (

        <div key={country.name.common} className="divCardOne">
          <div className="cardImg">
            <img src={country.flags.svg} alt={country.flags.alt} />
          </div>
          <div className="cardText">

            <h4>{country.name.common}</h4>
            <p><b>Population: </b>{country.population}</p>
            <p><b>Région: </b>{country.region}</p>
            <p><b>Capitale: </b>{country.capital}</p>
          </div>

        </div>
      ))}


    </div>
  )
}

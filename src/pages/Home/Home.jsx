import CountryCard from "../../components/CountryCard/CountryCard";
import "./Home.css";


export default function Home({countries}) {
  return(

    <div className="homeContainer">
      <CountryCard countries={countries}/>
    </div>
  )
}

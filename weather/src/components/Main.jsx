
import React, { useEffect, useState } from "react";
import { setFunction } from "./icons";
import Card from "./Card";

function Main() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bengaluru");
  const [icon, setIcon] = useState(null);



  useEffect(() => {

    async function getWeatherData() {
      //   const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=b8ef5d8cbca6753fb9c659635103c723`;
      
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b8ef5d8cbca6753fb9c659635103c723`;

      try {
        let response = await fetch(api);
        let datas = await response.json();
        setCity(datas);
        if(datas.name){
            setIcon(datas.weather[0].icon)
        }
      } catch (err) {
        console.log("city not found : ", err.message);
      }
    }
    getWeatherData();
  }, [search]);


  console.log(icon);
  console.log(city);

  return (
    <div id="map">
      <header>
        <h1>Welcome</h1>
      </header>
      <input className="searchBar"
        type="search"
        placeholder="search weather"
        onChange={(e) => setSearch(e.target.value)
        }
      />
      {city?.name ? (

        <Card search={search} city={city} url={setFunction(icon)} />
      
      ) : (
        <h1 className="notFound">City Not Found!</h1>
      )}
    </div>
  );
}

export default Main;


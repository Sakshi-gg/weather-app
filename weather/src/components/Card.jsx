import React from "react";

import { FaLocationDot  } from "react-icons/fa6"

function Card({ search, city, url }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="place">
        <FaLocationDot className="loc" />
          <h2>  {search}</h2>
          <span>({city.sys.country})</span>
        </div>

        <div className="main-temp">
          <img src={url} alt="" width={200} height={200} />
          <div>
            <div>
              <h2 className="temp">{city?.main?.temp + '\xB0'} C  </h2>
              <span>(Feels like {city?.main?.feels_like + '\xB0'} C)  </span>
              <h2>{city?.weather[0]?.description}</h2>
            </div>

            <div className="subTemps">
              <p>Min Temp : {city?.main?.temp_min + '\xB0'} C</p>
              <p>Max Temp : {city?.main?.temp_max + '\xB0'} C</p>
            </div>
            <div>
            <p>Humidity : {city?.main?.humidity}</p>

            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Card;
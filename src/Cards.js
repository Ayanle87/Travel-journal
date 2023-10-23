import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Cards(props) {
  return (
    <main>
      <div className="cards-img">
        <img src={props.imageUrl} className="img" alt="Bild" />
      </div>

      <div className="main-info">
        <div className="card-info">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="fa-location" />
            {props.location}
          </p>
          <p>
            <a
              className="card-google"
              href={props.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on Google maps
            </a>
          </p>
        </div>

        <div>
          <h1>{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </main>
  );
}

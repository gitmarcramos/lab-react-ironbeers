import React from 'react';
import './BeerCard.css';
import {Link} from 'react-router-dom';

export default function BeerCard(props) {
  const { data } = props;

  return (
    <>
      <Link to={"/beer/" + data._id} data={data}>
        <div className="beer-card">
          <img
            className="beer_card-image"
            src={data.image_url}
            alt={`The ${data.name} image`}
          />
          <div className="beer_card-infos">
            <h2>{data.name}</h2>
            <h3>{data.tagline}</h3>
            <h4>
              Created by: <span>{data.name}</span>
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
}

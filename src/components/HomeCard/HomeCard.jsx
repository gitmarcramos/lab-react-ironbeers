import React from 'react';
import './HomeCard.css';
import { Link } from 'react-router-dom';

export default function HomeCard (props) {
  const data = {
    image: props.image || 'default',
    alt: props.alt || 'Some image',
    title: props.title || 'Title',
    body: props.body || 'I love beer',
    url: props.url || '/'
  };

  return (
    <Link to={data.url}>
      <div className="homeCard">
        <img src={data.image} alt={data.alt} />
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </Link>
  );
}

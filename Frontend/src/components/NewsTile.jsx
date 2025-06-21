// src/components/NewsTile.jsx
import React from "react";
import "../styles/newsPage.css";      // ← import your media-query CSS here

export default function NewsTile({ img, title, location, blurb, url }) {
  return (
    <div className="newsTile">
      <a href={url} target="_blank" rel="noopener noreferrer" className="tileLink">
        <div className="imgWrapper">
          <img
            src={img || "https://via.placeholder.com/300x200?text=No+Image"}
            alt={title}
          />
        </div>
        <div className="textTile">
          <header>
            <h3>{title}</h3>
            <small>{location}</small>
          </header>
          <p>{blurb}</p>
        </div>
      </a>
    </div>
  );
}

// src/components/MPPTileCard.jsx
import React from "react";
import "../styles/MPPTileCard.css";  // new CSS

export default function MPPTileCard({
  name,
  party,
  riding,
  email,
  phone,
  photoUrl,
}) {
  return (
    <div className="billsTile"> {/* reuse the same card class */}
      <h2>{name}</h2>            {/* main heading */}
      <h3>Party: {party}</h3>     {/* subheading */}
      <p><strong>Riding:</strong> {riding}</p>
      {email && <p><strong>Email:</strong> {email}</p>}
      {phone && <p><strong>Phone:</strong> {phone}</p>}
    </div>
  );
}

// src/components/MPPDashComp.jsx
import React, { useEffect, useState } from "react";
import { getAllMPPs } from "../services/mppService";
import MPPTileCard from "./MPPTileCard";
import WhiteLogo from "../assets/images/white_logo.png";
import "../styles/MPPDash.css";        // ← new CSS

export default function MPPDashComp() {
  const [mpps, setMpps]     = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllMPPs().then(setMpps).catch(console.error);
  }, []);

  const filtered = mpps.filter(
    (m) =>
      m.name.toLowerCase().includes(filter.toLowerCase()) ||
      m.riding.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="BillsDashComp">  {/* reuse the same wrapper class */}
      <a href="http://localhost:5173/">
        <img src={WhiteLogo} alt="RaiseIt Logo" className="billsLogo" />
      </a>

      <h2>Your MPPs Dashboard</h2>

      <input
        type="text"
        placeholder="Filter by name or riding"
        className="filterBox"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="tileHolder">
        {filtered.map((mpp) => (
          <MPPTileCard
            key={mpp._id}
            name={mpp.name}
            party={mpp.party}
            riding={mpp.riding}
            email={mpp.email}
            phone={mpp.phone}
            photoUrl={mpp.photoUrl}
          />
        ))}
      </div>
    </div>
  );
}

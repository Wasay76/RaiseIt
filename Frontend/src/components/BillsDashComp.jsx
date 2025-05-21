import { useEffect, useState } from "react";
import { getAllBills } from "../services/billsService";
import BillsTileCard from "./BillsTileCard";
import WhiteLogo from "../assets/images/white_logo.png"; // Your logo
import "../styles/BillsDash.css"; // <-- Import here

export default function BillsDashComp() {
  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchBills() {
      try {
        const billsData = await getAllBills();
        console.log("Fetched bills:", billsData);
        setBills(billsData);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    }
    fetchBills();
  }, []);

  const filteredBills = bills.filter((bill) =>
    bill.title?.toLowerCase().includes(filter.toLowerCase())
  );

  function showTiles() {
    return filteredBills.map((bill) => (
      <BillsTileCard
        key={bill._id}
        billNumber={bill.billNumber}
        title={bill.title}
        sponsors={bill.sponsors}
        year={bill.year}
        session={bill.session}
        primarySponsor={bill.primarySponsor}
        currentStatus={bill.currentStatus}
        billOverview={bill.billOverview}
        coSponsors={bill.coSponsors}
        issueAddressed={bill.issueAddressed}
        rootCause={bill.rootCause}
        proposedSolution={bill.proposedSolution}
        keyBenefits={bill.keyBenefits}
        potentialDrawbacks={bill.potentialDrawbacks}
        votingHistory={bill.votingHistory}
      />
    ));
  }

  return (
    <div className="BillsDashComp">
      {/* Clickable logo that links to the homepage */}
      <a href="http://localhost:5173/">
        <img
          src={WhiteLogo}
          alt="RaiseIt Logo"
          className="billsLogo"
        />
      </a>

      {/* You can keep or remove this heading as you wish */}
      <h2>Your Bills Dashboard</h2>

      <input
        onChange={(e) => setFilter(e.target.value)}
        className="filterBox"
        type="text"
        placeholder="Filter Bills"
      />

      <div className="tileHolder">{showTiles()}</div>
    </div>
  );
}

export default function BillsTileCard({
    billNumber,
    title,
    sponsors,
    year,
    session,
    primarySponsor,
    currentStatus,
    billOverview,
  
    coSponsors,
    issueAddressed,
    rootCause,
    proposedSolution,
    keyBenefits,
    potentialDrawbacks,
    votingHistory,
  }) {
    return (
      <div className="billsTile">
        <h2>Bill Number: {billNumber}</h2>
        <h3>Title: {title}</h3>
        <p><strong>Sponsors:</strong> {sponsors?.join(", ")}</p>
        <p><strong>Primary Sponsor:</strong> {primarySponsor}</p>
        <p><strong>Status:</strong> {currentStatus}</p>
        <p><strong>Overview:</strong> {billOverview}</p>
        
        {/* Add the extra fields here */}
        <p><strong>Co-Sponsors:</strong> {coSponsors?.join(", ")}</p>
        <p><strong>Issue Addressed:</strong> {issueAddressed}</p>
        <p><strong>Root Cause:</strong> {rootCause}</p>
        <p><strong>Proposed Solution:</strong> {proposedSolution}</p>
        <p><strong>Key Benefits:</strong> {keyBenefits}</p>
        <p><strong>Potential Drawbacks:</strong> {potentialDrawbacks}</p>
        {votingHistory && (
          <p>
            <strong>Voting History:</strong> For: {votingHistory.for}, Against: {votingHistory.against}, Abstain: {votingHistory.abstain}
          </p>
        )}
  
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Session:</strong> {session}</p>
      </div>
    );
  }
  
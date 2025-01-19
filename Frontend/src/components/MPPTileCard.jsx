
export default function MPPTile(props){
    // SEE ISSUECARD BECAUSE THEY FOLLOW SIMLAR FORMAT AND THE COMMENT THERE APPLIES HERE

    return(
        <div className="mppTile">
            <h1>{props.title}</h1>
            <h2>Related Bill Title: {props.relatedBillTile}</h2>
            <h2># Questions Raised: {props.questionsNum}</h2>
            <h2>Recent State: {props.recentState}</h2>
        </div>
    )
}
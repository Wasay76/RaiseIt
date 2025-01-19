
export default function MPPTile(props){
    return(
        <div className="mppTile">
            <h1>{props.title}</h1>
            <h2>Related Bill Title: {props.relatedBillTile}</h2>
            <h2># Questions Raised: {props.questionsNum}</h2>
            <h2>Recent State: {props.recentState}</h2>
        </div>
    )
}
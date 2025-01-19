import "../styles/issueCard.css"

export default function IssueCard(props){
    return(
        <div style={{ backgroundImage: `url(${props.img})` }} className="issueCard">
            <h2>Rising Crime Rates</h2>
            <a href={props.article}>Learn More</a>
        </div>
    )

}
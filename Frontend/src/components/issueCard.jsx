import "../styles/issueCard.css"

export default function IssueCard(props){
    // INDIVIDUAL CARD COMPONENT THAT GETS MAPPED
    // NOT A LOT OF ERROR HANDLING HERE SO MAKE SURE THE DATA GETS PASSED IN THE FORMAT YOU SEE BELOW
    // AS PROPS
    return(
        <div style={{ backgroundImage: `url(${props.img})` }} className="issueCard">
            <h2>Rising Crime Rates</h2>
            <a href={props.article}>Learn More</a>
        </div>
    )

}

export default function newsTile(props){

    return(
        <div className="newsTile">
            <img src={props.img} alt="tileImage" />
            <div className="textTile">
                <header>
                    <h3>{props.catagory}</h3>
                    <h3>{props.location}</h3>
                </header>
                <p>{props.blurb}</p>
            </div>
            {/* <progress id="for" value="70" max="100"> 32% </progress> */}
            <button>RaiseIt</button>
        </div>
    )
}

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
            {/* IF YOU EVER GET RIME YOU CAN IMPLEMENT THIS PROGRESS BAR */}
            {/* I WOULD RECOMEND MAKING IT A COMPONENT BECASUE YOU ARE VERY LIMITED WITH THE PROGRESS TAG*/}
            <button>RaiseIt</button>
        </div>
    )
}
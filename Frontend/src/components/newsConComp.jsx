import "../styles/newsPage.css";
import NewsTile from "./NewsTile";

export default function NewsContainer() {

    // will be replaced by axios.get
    
    const data = [
        {
            img: "https://i.cbc.ca/1.6459277.1696538355!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/toronto-car-theft.JPG",
            title: "A major increase in auto thefts in 2022 has victims and industry experts calling for action",
            location: "Toronto",
            blurb: "Toronto saw over 8,000 vehicles stolen in 2022, largely due to organized crime and electronic security breaches.",
            catagory: "Crime"
        },
        {
            img: "https://www.theglobeandmail.com/resizer/v2/FFJ56LQKIBEMFFDOZRPIO6NVZU.JPG?auth=39c942dc825f119b64e0756a0774361da8119cc6ac3451f5efa4f662ea097d79&width=650&quality=80",
            title: "The construction of Highway 413 would negatively impact the environment, not help it, say scientific researchers",
            location: "Ontario",
            blurb: "Environmental concerns over Highway 413 highlight risks to natural habitats and urban sprawl.",
            catagory: "Environment"
        },
        {
            img: "https://i.cbc.ca/ais/1.6558190,1717218355285/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3BResize%3D%28620%29",
            title: "56% of Canadians say they can't keep pace with high cost of living, according to survey",
            location: "Canada",
            blurb: "A survey shows over half of Canadians struggling financially as inflation and interest rates rise.",
            catagory: "Cost of Living"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaxaxj2-FChd-NI-dhdlVCCCNB8pOVy7Q8Q&s",
            title: "Police investigating northern Ontario death as homicide as victim identified",
            location: "Ontario, Canada",
            blurb: "The OPP is treating the death of 34-year-old Preston Daultrey in Magnetawan as a homicide, with no threat to public safety as investigations continue.",
            catagory: "Crime"
        }
    ];
    
    function showTiles() {
        return data.map((each, index) => {
            return <NewsTile 
                        key={index} 
                        img={each.img} 
                        catagory={each.catagory} 
                        blurb={each.blurb} 
                        location={each.location}
                    />;
        });
    }

    return (
        <div className="newsContainer">
            <h3>November 26</h3>
            <h2><a href="/">RaiseIt</a></h2>
            <div className="tileContainer">
                {showTiles()}
            </div>
        </div>
    );
}

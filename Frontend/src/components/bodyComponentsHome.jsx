import "../styles/homeBodyComp.css"
import MPPS from "../assets/images/mpps.png"
import olaVid from "../assets/images/OLA_VID.mp4"
import IssueCard from "./issueCard"
import { useEffect, useRef, useState } from "react"

// ONCE YOU GET THE BACKEND DONE AND THE REQUESTS READY, REPLACE THE CARDINFO PLACEHOLDER WITH
// A USEEFFECT THAT DOES THE REQUEST AND STORES THE DATA IN A USESTATE VARIABLE WHICH IS INITIALLY
// AN EMPTY ARRAY AND GETS MAPPED IN THE CARDS FUNCTION

const cardinfo = [
    {
        img: "https://images.squarespace-cdn.com/content/v1/63d1e8b46a9cb503deaf7b11/1677119192335-55ITC98GSJUI3I1TAK12/unsplash-image-JXg7Yq5b1wE.jpg?format=1500w",
        article: "https://www.cbc.ca/news/canada/toronto/auto-thefts-increase-2022-1.6684532"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/63d1e8b46a9cb503deaf7b11/1677113040799-2IQNBWHH78WM9I3OR1Q6/unsplash-image-76HhAKI5JXI.jpg?format=1500w",
        article: "https://www.cbc.ca/news/business/angus-reid-survey-aug-2022-1.6558248"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/63d1e8b46a9cb503deaf7b11/1677118898090-RWOH7HBQXEBMHYOFRN7Z/unsplash-image-K5KmnZHv1Pg.jpg?format=1500w",
        article: "https://www.theglobeandmail.com/politics/article-highway-413-environmental-impact-ontario/"
    }

]

function Cards(){   
    return cardinfo.map((each, index)=>{
        return <IssueCard key= {index} img={each.img} article={each.article}/>
    })
}

export default function HomeBodyComponents(props){
    const startRef = useRef(null)
    const [transition, setTransition] = useState(true)

    useEffect(()=>{
        const target = parseInt(startRef.current.getBoundingClientRect().top)

        if(props.yValue > target + 200){
            setTransition(false)
        }
        else{
            setTransition(true)
        }

    }, [props.yValue])

    return(
        // FEEL FREE TO CHANGE THE TEXT WITHIN THE COMPONENTS
        // MOST OF THESE WERE PLACEHOLDERS
        <div id="HOMEBODYCOMP">
            <div className="section1">
                <h1>Your MPPS, Your Business</h1>
                <div className="bottomSection1">
                    <div className={transition? "section1Text": "section1Text showTextSec1"}>
                        <h2>Hero1</h2>
                        <p>This is us and we are a </p>
                        <h2>Hero1</h2>
                        <p>This is us and we are a </p>
                        <h2>Hero1</h2>
                        <p>This is us and we are a </p>
                    </div>
                    <img ref={startRef} src={MPPS} alt="" />
                </div>
            </div>

            <div className="olaVideo">
                <video className="OLAVID" src={olaVid} autoPlay loop muted playsInline></video>
                <h3>Catchy hook... See what's been going on without seeing whats been going on</h3>
            </div>

            <div className="raiseitCall">
                <h2>Top Issues To Raise</h2>
                
                <div className="horScroll">
                    <Cards />
                    {/* THIS COMP IS THE FUNCTION ABOVE THAT MAPS ALL OF THE ELEMENTS IN THE ARRAY ABOVE */}
                </div>

                <h1 style={{marginBottom:"5%"}}>The Future is in your hands</h1>
                <h3>Raise Public Issues to responsible Decision Makers and hold them Accountable to address the issues</h3>
                <button className="button-27">RaiseIt</button>
            </div>

        </div>
    )
}
import HeaderComp from "./headerComp";
import "../styles/homePage.css"
import video from "../assets/images/torontoBROLL.mp4"
import { useEffect, useState } from "react";

export default function TopOfHomePage(props){
    const [transition, setTransition] = useState(false)
    const [width, setWidth] = useState("100%")
    const [radius, setRadius] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setTransition(true)
        }, 300);
    }, [])

    useEffect(()=>{

        if(props.yValue == 0){
            setWidth("100%")
            setRadius(true)
        }

        else if(props.yValue > 0 && props.yValue < 50){
            setWidth((100 - parseInt(props.yValue/5)).toString() + "%")
            setRadius(false)
        }
        else if (props.yValue >= 40){
            setWidth("90%")
            setRadius(false)
        }

    }, [props])

    return(
        
        <div className={radius? "topOfHomePage": "topOfHomePage afterBorder"} style={{width: width}}>
            <div className={radius? "dimmer": "dimmer afterBorder"}>
                <video className="brollVid" src={video} autoPlay loop muted playsInline></video>
                <HeaderComp yValue={props.yValue}/>
                <div className="belowTop">
                    <h1 className={transition? "h1Before h1After": "h1Before"}>RaiseIt To Build A Better Tomorrow</h1>
                </div>
            </div>
        </div>
    )
}
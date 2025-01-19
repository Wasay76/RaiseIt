import { useEffect, useRef, useState } from "react"
import WhiteLogo from "../assets/images/white_logo.png"
import "../styles/header.css"

export default function HeaderComp(props){
    const[transition, setTransition] = useState(false)
    const headerRef = useRef(null)
    const [listText, setListText] = useState(false)

    const handleScroll = ()=>{
        if(props.yValue > 75){
            headerRef.current.classList.add("pushUpHead")
            console.log(headerRef.classList)
        }
        else if(props.yValue <= 75){
            headerRef.current.classList.remove("pushUpHead")
        }

    }

    useEffect(()=>{
        handleScroll(props.yValue)
    }, [props.yValue])

    useEffect(()=>{
        setTimeout(() => {
            setTransition(true)
        }, 400);        
    },[])

    return(
        <header>
            <div className="topHeader">
                <img src={WhiteLogo} alt="" />
                <button className="contactButton">Contact Us</button>
            </div>
            <nav ref={headerRef} className={transition? "beforeNav afterNav": "beforeNav"}>
                <ul className={transition? "beforeUl afterUl": "beforeUl"}>
                    <li><a className="aTag" href="/">Home</a></li>
                    <li><a className="aTag" href="/about">About</a></li>
                    <li><a className="aTag" href="/issues">Issues</a></li>
                    <li><a className="aTag" href="/MPPDash">Mpps</a></li>
                </ul>
            </nav>

        </header>
    )
}
import { useEffect, useRef, useState } from "react"
import WhiteLogo from "../assets/images/white_logo.png"
import "../styles/header.css"

export default function HeaderComp(props){
    // THIS CONTAINS LINKS TO OTHER PAGES IN THE HREF PORTION OF LINKS
    // TRY NOT TO MESS TOO MUCH WITH THE FUNCTIONALITY HERE ITS ALL COSMETICS FOR THE ANIMATIONS
    // IF YOU ADD MORE PAGES ADD THE LINK HERE, SET THE PATH IN APP.JSX AND YOU SHOULD BE OK
    // I USED THE REACT ROUTER FOR THE LINKS SO WHEN YOU HOST MAKE SURE YOU USE A REWRITE AND NOT A REDIRECT

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
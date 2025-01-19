import { useEffect, useState } from "react";
import HomeBodyComponents from "../components/bodyComponentsHome";
import TopOfHomePage from "../components/topOfHomePage";


export default function HomePage(){
    const [yValue, setYvalue] = useState(0)

    const handleScroll = ()=>{
        setYvalue(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    })

    return(
        <>
            <TopOfHomePage yValue={yValue}/>
            <HomeBodyComponents yValue={yValue}/>
        </>
        
    )
}
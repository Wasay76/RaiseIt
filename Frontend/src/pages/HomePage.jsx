import { useEffect, useState } from "react";
import HomeBodyComponents from "../components/bodyComponentsHome";
import TopOfHomePage from "../components/topOfHomePage";


export default function HomePage(){
    // THIS HANDLES THE SCROLL FUNCTIONALITY
    // IF YOU ADD A NEW COMPONENT TO THE HOMEPAGE AND NEED TO LISTEN TO THE WINDOW SCROLL EVENT
    // ADD THE yValue AS A PROP AND THEN USE A USEEFFECT TO CONSOLE.LOG THE VALUE IN THAT COMPONENT

    const [yValue, setYvalue] = useState(0)

    const handleScroll = ()=>{
        setYvalue(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    })

    return(
        // ONCE YOU ADD A COMPONENT THAT YOU WANT TO ASSOCIATE WITH THE HEIGHT
        // JUST ADD THE yValue AS A PROP
        <>
            <TopOfHomePage yValue={yValue}/>
            <HomeBodyComponents yValue={yValue}/>
        </>
        
    )
}
import { useEffect, useState } from "react"
import "../styles/MPPDash.css"
import MPPTile from "./MPPTileCard"

export default function MPPDashComp(){
    const [filter, setFilter] = useState("")
    const [tiles, setTiles]= useState([])
    const [postalCode, setPostalCode] = useState("")
    const [yourMPP, setYourMpp] = useState({
        name: "",
        riding: "",
        party: ""
    })

    // will be replaced with axios.get(params)
    // params will be bare bones
    // likely just location data and sort accordingly
    // will let the filter do the work
    // will be filled with info from the database

    const dummyData = [
        {
            tile: "Health Care",
            relatedBillTile: "Vote",
            questionsNum: "''",
            recentState: "..."
        },
        {
            tile: "Transportation",
            relatedBillTile: "Vote",
            questionsNum: "''",
            recentState: "..."
        },
        {
            tile: "Education",
            relatedBillTile: "Vote",
            questionsNum: "''",
            recentState: "..."
        },
        {
            tile: "Environment",
            relatedBillTile: "Pending",
            questionsNum: "5",
            recentState: "Reviewing proposals"
        },
        {
            tile: "Housing",
            relatedBillTile: "Debate",
            questionsNum: "3",
            recentState: "Awaiting committee review"
        },
        {
            tile: "Economy",
            relatedBillTile: "Vote",
            questionsNum: "7",
            recentState: "Amendments added"
        },
        {
            tile: "Public Safety",
            relatedBillTile: "Passed",
            questionsNum: "2",
            recentState: "Signed into law"
        }
    ]    

    useEffect(()=>{
        setTiles(dummyData)
    }, [])

    useEffect(()=>{

        const filteredTiles = dummyData.filter((each) =>
            each.tile.toLowerCase().includes(filter.toLowerCase())
        )

        setTiles(filteredTiles)

    }, [filter])

    function yourInfoSubmit(){
        if(postalCode !== ""){
            return console.log(postalCode)
        }
        return alert("Postal Code Cannot Be Empty")
    }

    function showTiles(){
        return tiles.map((each, index)=>{
            return <MPPTile key={index} title={each.tile} relatedBillTile={each.relatedBillTile} questionsNum={each.questionsNum} recentState={each.recentState} />
        })
    }

    return(
        <div className="MPPDashComp">
            <h1><a href="/">RaiseIt</a></h1>
            <h2>Your MPP Dashboard</h2>
            <div className="postalForm">
                <input onChange={(e)=>{setPostalCode(e.target.value)}} type="text" placeholder="Enter Your Postal Code"/>
                <button onClick={yourInfoSubmit}>Submit</button>
            </div>

            <input onChange={(e)=>{setFilter(e.target.value)}} className="filterBox" type="text" placeholder="Filter" />

            <div className="yourInfo">
                <h3>MPP Name: {yourMPP.name}</h3>
                <h3>Riding: {yourMPP.riding}</h3>
                <h3>Party: {yourMPP.party}</h3>
            </div>

            <div className="tileHolder">
                {showTiles()}
            </div>
            
        </div>
    )
}
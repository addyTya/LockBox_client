import React,{useEffect, useState} from "react";
import Axios  from "axios"


export default function getPass(){
    const [pass,setPass] = useState("")
    const [decPass,setDec] = useState("")
    const [read,setRead] = useState(true)



    //here I want to implement a post function which will send the title of the 
    //source and then give you the result that maps to it
    async function handleClick(event){
        event.preventDefault()
        
        await Axios.post(`https://lockbox-server.onrender.com/revealpassword`,{title:pass}).then((response)=>{
            console.log("button clicked")
            setRead(true)
            if(response.data === "Error: 404; Data entry not found!!"){
                alert("No entry for the given source")
                setRead(false)
            }
            setDec(response.data)
  
        })
    }
    return (
        <><div className="setter">
            <h1>Get your password</h1>
            <div className="settercont">
                <input type="text" placeholder="ex.Twitter" onChange={(event)=>{setPass(event.target.value)}}/>
                <button onClick={handleClick}>
                    Reveal Password
                </button>
                
                <input type={read ? "password" : "text"} placeholder="view your password here" value={decPass} onClick={()=>{setRead(!read)} } />
                <p>💡Note: click on the password to toggle decrypt</p>

                
            </div>
            </div>
        </>
    )
}
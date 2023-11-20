import { FaRegThumbsUp } from "react-icons/fa";
import "./contentCard.css";

export default function ContentCard({item,top}){
  return(
    <div className="contentCard-container" style={{position:"absolute",top:`${1000+top}px`}}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <h1 style={{marginLeft:"100px"}}>{item.title}</h1>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"300px"}}>
            <div style={{backgroundColor:"#FDC33E",width:"30px",height:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}>
            <FaRegThumbsUp/>
            </div>
            </div>
      </div>
      <div className="text-container">
            <p className="text">{item.text}</p>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"80px",marginLeft:"100px",marginRight:"300px"}}>
        <h3><h3 style={{color:"#99C4C8",display:"inline"}}>thought</h3> by {item.person}</h3>
        <h2 style={{color:"grey"}}>{item.time} . {item.timeToread} Read . {item.views} Views</h2>
      </div>
    </div>
  )
}
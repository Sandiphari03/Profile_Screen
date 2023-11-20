import "./profileCard.css";
import { IoDiamond } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegThumbsUp,FaEye,FaRegHeart  } from "react-icons/fa";
import CustomButton from "./CustomButton"

export default function ProfileCard(){
  return(
    <div className="profileCard-container">
      <div className="profile-info">
        <div className="profile-image"></div>
        <div className="profile-name">
          <h2 style={{display:"flex",flexDirection:"row",letterSpacing:"3px",fontWeight:"bold"}}>Ankit Kumar <div style={{backgroundColor:"blue",width:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}> <IoDiamond  size={20} /></div><div style={{backgroundColor:"#5FDFA0",width:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}> <TiTick /></div></h2>
          <div style={{display:"flex",flexDirection:"row",marginLeft:"20px"}}>
         <CustomButton number={6482} text="Followers" />
          <CustomButton number={245} text="Following" />
          </div>
        </div>
      </div>
          <div>
            <h2 style={{color:"grey",margin:"0px"}}>Co-founder & CEO at terribly Tiny Tales</h2>
            <a className="link" href="#">http://www.instagram.com</a>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"#A2CFDA",width:"30px",height:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}>
               <IoMdStarOutline size={30} /> 
            </div>
            <h5 color="grey">125</h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"#FDC33E",width:"30px",height:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}>
            <FaRegThumbsUp/>
            </div>
            <h5 color="grey">12</h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"grey",width:"30px",height:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}>
               <FaEye/> 
            </div>
            <h5 color="grey">57.8k</h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"#B52551",width:"30px",height:"30px", display:"flex",justifyContent:'center',alignItems:'center',borderRadius:"50%",margin:"10px"}}>
               <FaRegHeart/> 
            </div>
            <h5 color="grey">26.0k</h5>
            </div>
          </div>
    </div>
  )
}
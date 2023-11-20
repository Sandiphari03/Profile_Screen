import "./header.css"
import { PiTextTThin } from "react-icons/pi";


export default function Header(){
  return(
    <div className="header-div">
      <div className="logo-container">
        <div className="logo"><PiTextTThin size={40}/></div>
        <div class="vl"></div>
        <div>
          <h2 className="title">STORIES</h2>
        </div>
      </div>
      <div className="header-button">
        <h2>Courses</h2>
      </div>
    </div>
  )
}
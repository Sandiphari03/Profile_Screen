import "./customButton.css";

export default function CustomButton({number,text}){
  return(
    <div>
    <div className="customButton-container">
        <h3 style={{color:"grey"}}>{number}</h3>
      </div>
      <h3 style={{color:"grey",marginTop:"0px"}}>{text}</h3>
    </div>
  )
}
import AutismAcceptanceMonth from "../../components/AutismAcceptanceMonth";
import AAMImage from "../../components/AutismAcceptanceMonth/AutismAcceptanceMonth.jpeg"
function PonyPerspectives() {
    return (
      <div className="page-background">
      <br/>
      <h1>Pony Perspectives</h1>
      <br/>
      <img src={AAMImage} className="carousel-image"></img>
      <p>This month I’ll be sharing my story and links to autism-friendly accounts 🦄</p>
      <AutismAcceptanceMonth/>
      <br/>
      </div>
    );
  }
  
  export default PonyPerspectives;
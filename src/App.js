import Header from "./components/header";
import "./app.css"
import ProfileCard from "./components/ProfileCard";
import ContentCard from "./components/contentCard";
import { content } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="image-container"></div>
      <div className="profile-holder">
        <ProfileCard />
        <div className="posts">
          137 Posts
        </div>
      </div>
      {
        content.map((item,index)=>{
          return(
             <ContentCard item={item} key={index} top={index*350} />
          )
        })
      }
    </div>
  );
}

export default App;

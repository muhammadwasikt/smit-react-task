
import { useParams } from "react-router"
import Card from "./components/common/card/Card"
import profileData from "./utils/constant/profile-data"

function App() {
  useParams()
  console.log(useParams());
  return (
    
    <div className="cards-parrent">
      {
    profileData.map((item)=>{
      return(  
      <Card key={item.id} item={item} />
    )
    })
  }
  </div>
  )
}

export default App

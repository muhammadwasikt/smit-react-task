
import { useParams } from "react-router-dom"
import Card from "./components/common/card/Card"
import profileData from "./utils/constant/profile-data"
import Detail from "./components/common/detail/Detail"

function App() {
  return (
    <Detail />
  //   <div className="cards-parrent">
  //     {
  //   profileData.map((item)=>{
  //     return(  
  //     <Card key={item.id} item={item} />
  //   )
  //   })
  // }
  // </div>
  )
}

export default App

import { useParams } from "react-router-dom"


import Card from "../components/common/card/Card"
import { profileData } from "../utils/constant/profile-data"

const UserProfile = () => {
    return (
        <div className="cards-parrent">
          {
        profileData.map((item)=>{
          return(  
          <Card  key={item.id} item={item} />
        )
        })
      }
      </div>
      )
}

export default UserProfile

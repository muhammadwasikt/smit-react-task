import { useParams } from "react-router";
import { profileData } from "../utils/constant/profile-data";
import './pages.css'
import deafult from '/assest/images/default.jfif'


const UsersDetail = () => {
useParams()
const {id} = useParams()
const singleData = profileData.find((item)=>{
    return item.id === Number(id)
})
console.log(singleData)
const {name , profession , fullDescription , background , profileImage} = singleData

  return (
    <div className="user-detail">
      <img id="bg-img" src={background} alt="" />
        <div className="user-data">
          <div className="user-bio">
        <img src={profileImage ? profileImage : deafult} alt="" />
        <div>
        <h1>{name}</h1>
        <p>{profession}</p>
        </div>
        </div>
        <p id="desc">{fullDescription}</p>
        </div>
    </div>
  )
}

export default UsersDetail;

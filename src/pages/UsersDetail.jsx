import { useParams } from "react-router";
import { profileData } from "../utils/constant/profile-data";
import './pages.css'

const UsersDetail = () => {
useParams()
const {id} = useParams()
const singleData = profileData.find((item)=>{
    return item.id === Number(id)
})
console.log(singleData)
const {name , profession , fullDescription , background} = singleData

  return (
    <div className="user-detail" style={{background:`url(${background})`}}>
        <div className="user-data">
        <h1>{name}</h1>
        <p>{profession}</p>
        <p id="desc">{fullDescription}</p>
        </div>
    </div>
  )
}

export default UsersDetail;

import { NavLink } from 'react-router-dom'
import './card.css'


const Card = ({item }) => {
  const {id , background   , profileImage , name , description , profession} = item
    return (
    <div className="user-profile">
      <div className="card-image">
          <img id='background-img' src={background} alt="" />
          <img id={profileImage ? 'profile-img': null} src={profileImage} alt="" />
          <div className="card-detail">
          <p id='userName'>{name}</p>
          <p id='profession'>{profession}</p>
          <p id='description'>{description}</p>
          <NavLink className="view-btn" to={`/userprofile/${id}`}>
            <button id="view-btn">View Profile</button>
          </NavLink>
          </div>
          </div>
    </div>
    )
  }
  
  export default Card
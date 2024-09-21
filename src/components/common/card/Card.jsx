import { NavLink } from 'react-router-dom'
import './card.css'
import deafult from '/assest/images/default.jfif'


const Card = ({item }) => {
  const {id , background   , profileImage , name , description , profession} = item
    return (
    <div className="user-profile">
      <div className="card-image">
          <img id='background-img' src={background} alt="" />
          <img id='profile-img' src={profileImage ? profileImage : deafult} alt="" />
          <div className="card-detail">
          <p id='userName'>{name}</p>
          <p id='profession'>{profession}</p>
          <p id='description'>{description}</p>
          <NavLink to={`/userprofile/${id}`}>
            <button className='view-btn'>View Profile</button>
          </NavLink>
          </div>
          </div>
    </div>
    )
  }
  
  export default Card
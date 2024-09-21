import profileData from "../../../utils/constant/profile-data"

const Detail = () => {
    console.log(profileData)
    const {background , name , profession , fullDescription} = profileData[0]
  return (
    <div className="user-profile">
      <div className="card-image">
          <img id='background-img' src={background} alt="" />
          <div className="card-detail">
          <p id='userName'>{name}</p>
          <p id='profession'>{profession}</p>
          <p id='description'>{fullDescription}</p>
          </div>
          </div>
    </div>
  )
}

export default Detail

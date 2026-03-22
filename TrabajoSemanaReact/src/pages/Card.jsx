import React from 'react'
import ProfileCard from '../components/ProfileCard'
import shuichiImg from '../img/shuichi.png'

const Card = () => {
  return (
    <div>
        <ProfileCard name="Carlos Rodríguez" profession={"Detective profesional"} age={"26"} city={"Nueva York"} img={shuichiImg}/>
    </div>
  )
}

export default Card
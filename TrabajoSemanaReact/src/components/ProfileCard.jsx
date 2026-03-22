import React from 'react'
import shuichiImg from '../img/shuichi.png'

const ProfileCard = ({name, age, profession, city, img}) => {

    return (
        <div className='d-flex justify-content-center bg-secondary min-vh-100 align-items-center gap-3'>
            <div className="card2">
                <img src={img} alt=""/>
                <section>
                    <h2>{name}</h2>
                    <h6>{profession} | {age} años</h6>
                    <p>Vivo en la ciudad de {city} y soy una increíble persona.</p>
                </section>
            </div>

            <div className="card2 dark">
                <img src={img} alt="" />
                <section>
                    <h2>{name}</h2>
                    <h6 className='color-white'>{profession} | {age} años</h6>
                    <p>Vivo en la ciudad de {city} y soy una increíble persona.</p>
                </section>
            </div>
        </div>
    )
}

export default ProfileCard
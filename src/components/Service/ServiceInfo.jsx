import React from 'react'
import './Service.css'
import { arrow, logo_C, mysql } from '../../assets/assets'
import { GiBottomRight3dArrow } from 'react-icons/gi'

const ServiceInfo = () => {
    return (
        <div className='serviceInfo'>
            <div className="serviceTitle">
                <h2 className='service-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequuntur?</h2>
                <p className='service-info'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid sapiente architecto similique quaerat explicabo facilis! Quis consequuntur sit perferendis, molestiae velit eius voluptatibus odit.
                </p>

            </div>
            <div className="serviceInfo-left">
                <h2 className='info-title'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                <p className='info-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio in placeat non, suscipit quam perspiciatis, provident repellat quis unde sint maiores reprehenderit nam mollitia voluptas illum aliquam laudantium? Exercitationem, architecto! Atque minima consequuntur vitae facilis recusandae. Beatae vel debitis ad adipisci exercitationem! Minus molestias sint ex, doloribus autem ad.
                </p>
                {/* <span className='icon-over'>
                <GiBottomRight3dArrow />
                    <img src={arrow} alt="" />
                </span> */}
            </div>
            <div className="serviceInfo-center">
                <div className="center-info">
                    <h2 className='info-title'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                    <p className='info-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio in placeat non, suscipit quam perspiciatis, provident repellat quis unde sint maiores reprehenderit nam mollitia voluptas illum aliquam laudantium? Exercitationem, architecto! Atque minima consequuntur vitae facilis recusandae. Beatae vel debitis ad adipisci exercitationem! Minus molestias sint ex, doloribus autem ad.
                    </p>
                    <span className='icon-overs'>
                        {/* <GiBottomLeft3dArrow /> */}
                    </span>
                </div>
            </div>
            <div className="serviceInfo-right">
                <h2 className='info-title'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                <p className='info-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio in placeat non, suscipit quam perspiciatis, provident repellat quis unde sint maiores reprehenderit nam mollitia voluptas illum aliquam laudantium? Exercitationem, architecto! Atque minima consequuntur vitae facilis recusandae. Beatae vel debitis ad adipisci exercitationem! Minus molestias sint ex, doloribus autem ad.
                </p>
            </div>
            <div className="serviceInfo-off">
                <div className="center-info">
                    <h2 className='info-title'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                    <p className='info-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio in placeat non, suscipit quam perspiciatis, provident repellat quis unde sint maiores reprehenderit nam mollitia voluptas illum aliquam laudantium? Exercitationem, architecto! Atque minima consequuntur vitae facilis recusandae. Beatae vel debitis ad adipisci exercitationem! Minus molestias sint ex, doloribus autem ad.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo

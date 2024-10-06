import React from 'react'
import './Service.css'
import { blob_1, blob_2, blob_3, blob_4 } from '../../assets/assets'
import { TbDatabaseSearch } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import { MdOutlineDevicesOther } from 'react-icons/md'
import { GrUserExpert } from 'react-icons/gr'

const ServiceCard = () => {
    return (
        <div className='service-wrapper'>
            <div className="services-card">
                <ul>
                    {/* Ajouter une référence pour chaque élément du service */}
                    <li className='forme-animated'>
                        <h3>Conception de SII</h3>
                        <span className="service-icon">
                            <img src={blob_1} alt="" />
                            <span><TbDatabaseSearch /></span>
                        </span>
                        <p className="services-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem suscipit, obcaecati molestias sapiente quidem?
                        </p>
                    </li>
                    <li className='forme-animated'>
                        <h3>Support informatique</h3>
                        <span className="service-icon">
                            <img src={blob_2} alt="" />
                            <span><BiSupport /></span>
                        </span>
                        <p className="services-desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa numquam in ut repellat eius est?
                        </p>
                    </li>
                    <li className='forme-animated'>
                        <h3>Développement logiciel</h3>
                        <span className="service-icon">
                            <img src={blob_3} alt="" />
                            <span><MdOutlineDevicesOther /></span>
                        </span>
                        <p className="services-desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut sequi hic? Quis, nulla doloremque?
                        </p>
                    </li>
                    <li className='forme-animated'>
                        <h3>Consultance et expertise</h3>
                        <span className="service-icon">
                            <img src={blob_4} alt="" />
                            <span><GrUserExpert /></span>
                        </span>
                        {/* <div className="trait"></div> */}
                        <p className="services-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore saepe exercitationem, nobis atque eveniet doloribus?
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceCard

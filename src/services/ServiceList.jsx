import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'As your weather guide, we provide accurate, real-time forecasts and insights to help you plan your travels with confidence.',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'As your tour guide, we bring each destination to life with expert knowledge, personalized insights, and unforgettable experiences.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'we offer personalized customization to create the perfect itinerary tailored to your unique preferences.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList

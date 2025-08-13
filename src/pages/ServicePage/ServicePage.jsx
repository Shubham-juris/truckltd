import React from 'react'
import Services from '../../components/Servicecomponent/Services'
import ServiceHero from '../../components/Servicecomponent/ServiceHero'
import StatsSection from '../../components/Homecomponent/StateSection'
import Servicecontent from '../../components/Homecomponent/Servicecontent'

const ServicePage = () => {
  return (
    <>
    <ServiceHero/>
    <Servicecontent />
     <Services/> 
     <StatsSection/>
    </>
  )
}

export default ServicePage

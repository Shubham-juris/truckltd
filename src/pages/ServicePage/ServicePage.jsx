import React from 'react'
import Services from '../../components/Servicecomponent/Services'
import ServiceHero from '../../components/Servicecomponent/ServiceHero'
import StatsSection from '../../components/Homecomponent/StateSection'

const ServicePage = () => {
  return (
    <>
    <ServiceHero/>
     <Services/> 
     <StatsSection/>
    </>
  )
}

export default ServicePage

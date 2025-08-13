import React from 'react'
import Services from '../../components/Servicecomponent/Services'
import ServiceHero from '../../components/Servicecomponent/ServiceHero'
import Servicecontent from '../../components/Homecomponent/Servicecontent'
import WarehousingDetails from '../../components/Servicecomponent/WarehousingDetails'

const ServicePage = () => {
  return (
    <>
    <ServiceHero/>
    <Servicecontent />
     <Services/> 
     <WarehousingDetails/>
    </>
  )
}

export default ServicePage

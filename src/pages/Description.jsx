import React from 'react'

import Header from '../components/Header'
import Slider from '../components/Slider'
import Host from '../components/Host'
import Tags from '../components/Tags'
import Stars from '../components/stars'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Error from './Error'


import { useParams, Navigate } from 'react-router-dom'
import logements from '../logements/logements.json'

export default function Description() {

  const { id } = useParams()
  const logementCurrent = logements.find((logement) => logement.id === id)

 


   
    if (!logementCurrent) {
        return <Error /> 
    }


  return (
   
    <main className="description">
      <Header />
      <Slider PicturesSlider={logementCurrent.pictures} />

      <section className="information">
        <div className="title_place">
          <div className="title">
            <h1>{logementCurrent.title}</h1>
            <h2 className="place">{logementCurrent.location}</h2>
          </div>
            <Tags tags={logementCurrent.tags} />
        </div>
        
        <div className="hostAndstar">
          <Host name= {logementCurrent.host.name} picture ={logementCurrent.host.picture}/>
          
          <Stars  rating={logementCurrent.rating}/>
     
        </div>
      </section>

      <section className="Collapse">
        <Collapse title="Description" text={logementCurrent.description} />
        <Collapse
          title="Equipement"
          text={
            <ul>
              {logementCurrent.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
      <Footer />
    </main>
  )
}

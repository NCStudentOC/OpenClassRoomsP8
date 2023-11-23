import React from 'react'

import Header from '../components/Header'
import Slider from '../components/Slider'
import Host from '../components/Host'
import Tags from '../components/Tags'
import Stars from '../components/stars'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

import redStar from '../assets/red_star.png'
import greyStar from '../assets/grey_star.png'

import { useParams } from 'react-router-dom'
import logements from '../logements/logements.json'

export default function Description() {

  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  return (
   
    <main className="description">
      <Header />
      <Slider PicturesSlider={logement.pictures} />

      <section className="information">
        <div className="title_place">
          <div className="title">
            <h1>{logement.title}</h1>
            <h2 className="place">{logement.location}</h2>
          </div>
            <Tags />
        </div>
        
        <div className="hostAndstar">
           <Host />
            <Stars />
     
        </div>
      </section>

      <section className="Collapse">
        <Collapse title="Description" text={logement.description} />
        <Collapse
          title="Equipement"
          text={
            <ul>
              {logement.equipments.map((equipment, index) => (
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

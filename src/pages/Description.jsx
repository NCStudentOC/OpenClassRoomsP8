import React from 'react'

import Header from '../components/Header'
import Slider from '../components/Slider'
// import Host from '../components/Host'
// import Tags from '../components/Tags'
import Stars from '../components/stars'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

import redStar from '../assets/red_star.png'
import greyStar from '../assets/grey_star.png'

import { useParams } from 'react-router-dom'
import logements from '../logements/logements.json'

export default function Description() {
  // recuperation de l'id
  const { id } = useParams()

  // l'id doit etre egale à logementid
  //pourquoi ne peut t'on pas utiliser filter
  const logement = logements.find((logement) => logement.id === id)
  return (
    // Main qui englobe tout EN FLEX COLUMN
    <main className="description">
      <Header />
      <Slider PicturesSlider={logement.pictures} />

      {/* Section qui englobe le titre, le lieu les tags, la photo le nom et les stars */}

      <section className="information">
        <div className="title_place">
          <div className="title">
            <h1>{logement.title}</h1>
            <h2 className="place">{logement.location}</h2>
          </div>

          {/*          
            <Tags tags={logement.tags} /> */}

          <div className="Position_tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* 
        <Host host={logement.host} /> */}
        <div className="host_star">
          <div className="host">
            <p className="host_name">{logement.host.name}</p>
            <img
              className="host_picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          {/* <Stars /> */}

          <div className="host_stars">
            {[...Array(5)].map((star, index) => {
              const starValue = index + 1
              return (
                <img
                  key={index}
                  src={starValue <= logement.rating ? redStar : greyStar}
                  alt="star"
                />
              )
            })}
          </div>
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

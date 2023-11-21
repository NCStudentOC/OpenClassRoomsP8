import Header from '../components/Header'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Image from '../assets/about_image.png'

export default function Home() {
  const abouts = [
    {
      title: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <div className="home">
      <Header />
      <Banner BannerTitle="" BannerImage={Image} />
      <main className="Collapse_main">
        {abouts.map((about, index) => {
          return (
            <Collapse
              key={index}
              type="text"
              title={about.title}
              text={about.description}
            />
          )
        })}
      </main>
      <Footer />
    </div>
  )
}

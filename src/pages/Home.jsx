import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Image from '../assets/home_Image.png'
import Loader from '../components/loader'

export default function Home() {
  return (
    <div>
   <Loader />
    <div className="home">
       
      <Header />
      <Banner
        BannerTitle="Chez vous, partout et ailleurs"
        BannerImage={Image}
      />
      <Gallery />
      <Footer />
    </div></div>
  )
}

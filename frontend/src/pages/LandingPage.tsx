import Hero from '../components/landing_page/Hero'
import ImageCarousel from '../components/landing_page/ImageCarousel'

const LandingPage = ({isLoggedIn}) => {
  return (
    <div>
        <Hero isLoggedIn={isLoggedIn}/>
        <ImageCarousel/>
    </div>
  )
}

export default LandingPage
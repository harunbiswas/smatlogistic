import ContactCard from './ContactCard'
import Quote from './Quote'
import Review from './Review'
import InfoCards from './static/InfoCards'
import Testimonial from './static/Testimonial'
import TrustpilotInfo from './static/TrustpilotInfo'

export default function HomeComp() {
  return (
    <main className='home'>
      <div className='container'>
        <div className='home-wrp'>
          <div className='home-main-wrp'>
            <div className='home-main'>
              <h3>Get Online Quote</h3>
              <Quote />
            </div>
            <InfoCards />
            <Testimonial />
          </div>

          <div className='contact-wrp'>
            <ContactCard />
            <Review />
            <TrustpilotInfo />
          </div>
        </div>
      </div>
    </main>
  )
}

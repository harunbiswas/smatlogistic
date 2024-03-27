import ContactCard from './ContactCard'
import Quote from './Quote'
import Review from './Review'

export default function HomeComp() {
  return (
    <main className='home'>
      <div className='container'>
        <div className='home-wrp'>
          <div className='home-main'>
            <h3>Get Online Quote</h3>
            <Quote />
          </div>

          <div className="contact-wrp">
          <ContactCard />
          <Review />

          </div>
         
        </div>
      </div>
    </main>
  )
}

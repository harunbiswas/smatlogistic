import ContactCard from './ContactCard'
import Quote from './Quote'

export default function HomeComp() {
  return (
    <main className='home'>
      <div className='container'>
        <div className='home-wrp'>
          <div className='home-main'>
            <h3>Get Online Quote</h3>
            <Quote />
          </div>
          <ContactCard />
        </div>
      </div>
    </main>
  )
}

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeComp from '@/components/Home'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51IlvJZAN9GQfnzeX5V1tfAS9T8eSUosEmgrDSvEohLAf6iXlFZUhpkJk1fuQg65kioFVRUHoxwPgW9hJy1d7OHC900FCWORSjn'
)
export default function Home() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Header />
        <HomeComp />
        <Footer />
      </Elements>
    </>
  )
}

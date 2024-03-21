// components/PaymentForm.js
import { useElements, useStripe } from '@stripe/react-stripe-js'

function Payment({ createCheckoutSession, about }) {
  const stripe = useStripe()
  const elements = useElements()

  return (
    <form>
      <button onClick={handleSubmit}>pay</button>
    </form>
  )
}

export default Payment

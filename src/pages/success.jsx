import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Success() {
  const router = useRouter()
  useEffect(() => {
    const queryParams = router.query

    if (Object.keys(router.query).length) {
      axios
        .post('/api/success', queryParams)
        .then(response => {
          console.log('POST request successful:', response.data)
          // You can handle the response data as needed
        })
        .catch(error => {
          console.error('POST request failed:', error)
          // Handle errors
        })
    }
  }, [router.query])

  return (
    <div className='success-container'>
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase!</p>
      {/* You can display additional details or a summary of the transaction here */}
      <div className='transaction-details'>
        <h2>Transaction Details:</h2>
        <ul>
          <li>Order Id ID: {router.query.sessionId}</li>
          <li>Name: {router.query.firstName} {router.query.lastName} </li>
          {/* Add more details as needed */}
        </ul>
      </div>
      {/* Home Button */}
      <Link className='home-button' href='https://thesmartlogistics.com/'>
        Go to Home
      </Link>
      {/* Add styling for additional content or customization */}
    </div>
  )
}

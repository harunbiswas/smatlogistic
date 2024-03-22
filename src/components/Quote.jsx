import values from '@/values'
import { useState } from 'react'
import { FaChair } from 'react-icons/fa6'
import { GiSofa } from 'react-icons/gi'
import { IoBed } from 'react-icons/io5'
import { MdNearbyError, MdOutlineTableRestaurant } from 'react-icons/md'
import { PiTelevisionFill } from 'react-icons/pi'
import About from './About'
import Price from './Price'
import Type from './Type'
import Amount from './form/Amount'

import { FaBox } from 'react-icons/fa'

import { useElements, useStripe } from '@stripe/react-stripe-js'

const createCheckoutSession = async body => {
  const response = await fetch('/api/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()
  return data
}

export default function Quote() {
  const [condition, setCondition] = useState(false)
  const [basePrice, setBasePrice] = useState(0)
  const numbers = [1, 2, 3, 4, 5]
  const [active, setActive] = useState(1)
  const [type, setType] = useState(null)
  const [postCode, setPostCode] = useState({
    from: '',
    to: '',
  })
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState('')
  const [item, setItem] = useState('')
  const [note, setNote] = useState('')

  const [about, setAbout] = useState({
    fName: '',
    lName: '',
    phone: '',
    email: '',
  })
  const [fromInfo, setFormInfo] = useState({
    address1: '',
    address2: '',
    city: '',
    porperty: '',
  })
  const [toInfo, setToInfo] = useState({
    address1: '',
    address2: '',
    city: '',
    porperty: '',
  })
  const [errors, setErrors] = useState({})
  const [isDate, setIsDate] = useState(false)

  const [subCat, setSubCat] = useState([
    { title: 'Sofa', icon: <GiSofa /> },
    { title: 'Boxe', icon: <FaBox /> },
    { title: 'Table', icon: <MdOutlineTableRestaurant /> },
    { title: 'Chair', icon: <FaChair /> },
    { title: 'Wardrobe', icon: <MdNearbyError /> },
    { title: 'Bed ', icon: <IoBed /> },
    { title: 'Television', icon: <PiTelevisionFill /> },
  ])

  const [data, setData] = useState([
    {
      select: false,

      title: 'All day Packing service labour only',
      price: 300,
    },
    { select: false, count: 1, title: 'Rardboard box', price: 6 },
    { select: false, count: 1, title: 'Rardrobe box', price: 20 },
    { select: false, count: 1, title: 'Roll of bubble wrap', price: 40 },
    {
      select: false,
      count: 1,
      title: 'Assembly/Disassembly service',
      price: 40,
    },
  ])

  // payment
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const error = false

    if (error) {
      console.error(error)
    } else {

      
      // Send the token to your server to create a Checkout session
      const response = await createCheckoutSession({
        amount: price,
        about,
        type,
        postCode,
        date,
        item,
        note,
        fromInfo,
        toInfo,
        data,
      })



      // Redirect to the Checkout page
      const sessionId = response.sessionId
      const { error: redirectToCheckoutError } = stripe.redirectToCheckout({
        sessionId,
      })

     

      if (redirectToCheckoutError) {
        console.error(redirectToCheckoutError)
      }
    }
  }

  return (
    <div className='quote'>
      <ul className='intigator'>
        {numbers.map((num, i) => (
          <li className={(num <= active && 'active') || ''} key={i}>
            <span>{num}</span>
          </li>
        ))}
      </ul>

      <div className='quote-main'>
        {(active === 1 && (
          <Type setItem={setItem} type={type} setType={setType} />
        )) ||
          (active === 2 && (
            <Amount
              subCat={subCat}
              setSubCat={setSubCat}
              isDate={isDate}
              setIsDate={setIsDate}
              errors={errors}
              setErrors={setErrors}
              item={item}
              setItem={setItem}
              postCode={postCode}
              setPostCode={setPostCode}
              type={type}
              note={note}
              setNote={setNote}
              date={date}
              setDate={setDate}
            />
          )) ||
          (active === 3 && (
            <Price
              data={data}
              setData={setData}
              price={price}
              setPrice={setPrice}
              postCode={postCode}
              item={item}
              type={type}
              active={active}
              basePrice={basePrice}
              setBasePrice={setBasePrice}
            />
          )) ||
          (active === 4 && (
            <About
              about={about}
              setAbout={setAbout}
              fromInfo={fromInfo}
              setFormInfo={setFormInfo}
              toInfo={toInfo}
              setToInfo={setToInfo}
              postCode={postCode}
              date={date}
              setDate={setDate}
              condition={condition}
              setCondition={setCondition}
            />
          ))}
      </div>

      <div className='quote-btns'>
        {active > 1 && (
          <button
            onClick={() => {
              setActive((active > 1 && active - 1) || active)
            }}
            disabled={active < 2}
          >
            Back
          </button>
        )}
        {type && (
          <button
            onClick={e => {
              if (active === 2) {
                if (!values.postcodeRegex.test(postCode?.from)) {
                  setErrors(prev => {
                    return {
                      ...prev,
                      from: true,
                    }
                  })
                }

                if (!values.postcodeRegex.test(postCode?.to)) {
                  setErrors(prev => {
                    return {
                      ...prev,
                      to: true,
                    }
                  })

                  return
                }
                setActive(3)
              } else if (active === 5) {
                handleSubmit(e)
              } else {
                setActive((active < 5 && active + 1) || active)
              }
            }}
            className='next'
            disabled={
              (active === 2 &&
                (!postCode.from ||
                  !postCode.to ||
                  (type !== 'Vehicle' && !item))) ||
              (active === 4 &&
                (!about.fName ||
                  !condition ||
                  !about.lName ||
                  !about.phone ||
                  !about.email ||
                  !fromInfo.address1 ||
                  !fromInfo.city ||
                  !toInfo.address1 ||
                  !toInfo.city))
            }
          >
            {(active === 5 && 'Make Payment') || 'Next'}
          </button>
        )}
      </div>
    </div>
  )
}

import values from '@/values'
import axios from 'axios'
import { useEffect, useState } from 'react'

const storeData = [
  '16sqft',
  '25sqft',
  '35sqft',
  '50sqft',
  '75sqft',
  '100sqft',
  '125sqft',
  '150sqft',
  '175sqft',
  '200sqft',
  '225sqft',
  '250sqft',
  '300sqft',
  '350sqft',
  '500sqft',
]

const homeData = [
  '1 Bedroom',
  '2 Bedroom',
  '3 Bedroom',
  '4 Bedroom',
  '5 Bedroom',
  '6 Bedroom',
]

export default function Price({
  type,
  postCode,
  item,
  price,
  setPrice,
  data,
  setData,
  active,
  basePrice,
  setBasePrice,
}) {
  const [distance, setDistance] = useState('')

  const toggleSelect = (index, d, name) => {
    const newData = [...data]
    newData[index] = { ...newData[index], [name]: d }
    setData(newData)
  }

  useEffect(() => {
    axios
      .get(
        `${values.base_url}/distance?from=${postCode?.from}&to=${postCode?.to}`
      )
      .then(d => {
        setDistance(Number(d.data))
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    if (type === 'EU Moves') {
      setPrice(2800 + distance * 1.3)
    } else if (type === 'Vehicle') {
      setPrice(550 + distance * 1.8)
    } else if (type === 'Store') {
      switch (item) {
        case storeData[0]:
          setPrice(180)
          break
        case storeData[1]:
          setPrice(200)
          break
        case storeData[2]:
          setPrice(210)
          break
        case storeData[3]:
          setPrice(280)
          break
        case storeData[4]:
          setPrice(400)
          break
        case storeData[5]:
          setPrice(470)
          break
        case storeData[6]:
          setPrice(550)
          break
        case storeData[7]:
          setPrice(860)
          break
        case storeData[8]:
          setPrice(940)
          break
        case storeData[9]:
          setPrice(990)
          break
        case storeData[10]:
          setPrice(1020)
          break
        case storeData[11]:
          setPrice(1150)
          break
        case storeData[12]:
          setPrice(1530)
          break
        case storeData[13]:
          setPrice(2030)
          break

        case storeData[14]:
          setPrice(2500)
          break
        default:
          setPrice(0)
      }
    } else if (type === 'Furniture & Other Items') {
      setPrice(80 + item.length * 15 + distance * 2.5)
    } else if (type === 'Home Removals') {
      console.log('test')
      switch (item) {
        case homeData[0]:
          setPrice(360 + distance * 2.5)
          setBasePrice(360 + distance * 2.5)
          break
        case homeData[1]:
          setPrice(750 + distance * 2.5)
          setBasePrice(750 + distance * 2.5)
          break
        case homeData[2]:
          setPrice(1350 + distance * 2.5)
          setBasePrice(1350 + distance * 2.5)
          break
        case homeData[3]:
          setPrice(1800 + distance * 2.5)
          setBasePrice(1800 + distance * 2.5)
          break
        case homeData[4]:
          setPrice(2400 + distance * 2.5)
          setBasePrice(2400 + distance * 2.5)
          break
        case homeData[5]:
          setPrice(3000 + distance * 2.5)
          setBasePrice(3000 + distance * 2.5)
          break

        default:
          setPrice(0)
          setBasePrice(0)
      }
    }
  }, [distance])

  useEffect(() => {
    if (type === 'Home Removals') {
      const totalPrice = data.reduce(
        (total, item) =>
          item.select
            ? (item.count && total + item.count * item.price) || item.price
            : total,
        0
      )
      setPrice(basePrice + totalPrice)
    }
  }, [data, basePrice])

  return (
    <div className='price'>
      <h4 className='title'>Pricing</h4>
      <div className='price-top'>
        <div className='price-top-title'>
          <h4>
            Door to Door price <span>(Including VAT)</span>
          </h4>
          <strong>£{price}</strong>
        </div>
        <div className='price-top-items'>
          <span>Moving Form: {postCode?.from}</span>
          <span>Moving to: {postCode?.to}</span>
          <span>
            Moving Amount: {type !== 'Vehicle' && item + ' ' + '-'} Up to{' '}
            {distance} (Miles)
          </span>
          {type === 'Store' && (
            <span>
              This is the fixed storage unit sizes and monthly pricing for the
              UK only Prices include insurance up to£35k
            </span>
          )}
        </div>
      </div>

      {type === 'Home Removals' && (
        <div className='price-bottom'>
          <h4 className='price-bottom-title'>
            Extras <span>(Including VAT)</span>
          </h4>
          <ul className='price-bottom-body'>
            <li className='price-bottom-body-header'>
              <span className='price-bottom-body-title '>Options</span>
              <span className='price-bottom-body-title right'>Count</span>

              <span className='price-bottom-body-price'>Cost (£)</span>
              <span>Selected</span>
            </li>
            {data.map((d, i) => (
              <li className={`${(!d.count && 'noncount') || ''}`} key={i}>
                <span className={`price-bottom-body-title `}>{d.title}</span>
                <div className='price-bottom-body-count'>
                  {d.count && d.select && (
                    <select
                      value={d.count}
                      onChange={e => toggleSelect(i, e.target.value, 'count')}
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                    </select>
                  )}
                </div>

                <span className='price-bottom-body-price'>
                  {' '}
                  {(d.count && d.count * d.price) || d.price}
                </span>
                <input
                  onChange={e => toggleSelect(i, e.target.checked, 'select')}
                  type='checkbox'
                  checked={d.select}
                  name=''
                  id=''
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

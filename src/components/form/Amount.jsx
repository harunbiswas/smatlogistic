import Dropdown from '../Dropdown'
import SubCat from './SubCat'
import UeAmount from './UeAmount'

export default function Amount({
  type,
  setPostCode,
  postCode,
  item,
  setItem,
  note,
  setNote,
  date,
  setDate,
  errors,
  setErrors,
  isDate,
  setIsDate,
  subCat,
  setSubCat,
  country,
  setCountry,
  ueSubCat,
  setUeSubCat
}) {
  const homeData = [
    '1 Bedroom',
    '2 Bedroom',
    '3 Bedroom',
    '4 Bedroom',
    '5 Bedroom',
    '6 Bedroom',
  ]
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

  return (
    <div className='quote-form'>
      {/* <h4 className='title'>Move Amount</h4> */}

      <div className='quote-form-wrp'>
        <div className='quote-form-group'>
          {type !== 'Vehicle' && (
            <label htmlFor='amount'>
              {(type === 'EU Moves' && 'Select Country') || 'Amount To Move '}
              <span>*</span>
            </label>
          )||
           <div className='quote-form-wrp'>
          <div className='quote-form-group'>
            <label htmlFor='from'>Vehicle Info
               <span></span>
            </label>
            <input
              value={note}
              onChange={e => {
                setNote(e.target.value)
              }}
              placeholder=' Vehicle Info'
              id='from'
            />
          </div>
          </div> }
          {((type === 'Home Removals' || type === 'Storage') && (
            <Dropdown
              data={(type === 'Home Removals' && homeData) || storeData}
              prev={item}
              handler={d => {
                setItem(d)
              }}
            />
          )) ||
            (type === 'Furniture & Other Items' && (
              <SubCat
                subCat={subCat}
                setSubCat={setSubCat}
                item={item}
                setItem={setItem}
              />
            )) ||
            (type === 'EU Moves' && (
              <UeAmount
                note={note}
                setNote={setNote}
                country={country}
                setCountry={setCountry}
                subCat={ueSubCat}
                setSubCat={setUeSubCat}
                item={item}
                setItem={setItem}
              />
            ))}
        </div>
      </div>
      <div className='quote-form-wrp'>
        <div className='quote-form-group'>
          <label htmlFor='from'>
            From <span>*</span>
          </label>
          <input
            className={(errors?.from && 'error') || ''}
            value={postCode?.from}
            onChange={e => {
              setErrors(prev => {
                return {
                  ...prev,
                  from: false,
                }
              })
              setPostCode(prev => {
                return {
                  ...prev,
                  from: e.target.value,
                }
              })
            }}
            placeholder='Postcode'
            id='from'
          />
        </div>
        <div className='quote-form-group'>
          <label htmlFor='to'>
            To <span>*</span>
          </label>
          <input
            className={(errors?.to && 'error') || ''}
            value={postCode?.to}
            onChange={e => {
              setErrors(prev => {
                return {
                  ...prev,
                  to: false,
                }
              })
              setPostCode(prev => {
                return {
                  ...prev,
                  to: e.target.value,
                }
              })
            }}
            placeholder='Postcode'
            id='to'
          />
        </div>
      </div>

      <div className='quote-form-wrp'>
        <div className='quote-form-group checkbox '>
          <input
            onChange={e => setIsDate(e.target.checked)}
            className=''
            type='checkbox'
            name='isDate'
            id='date'
            checked={isDate}
          />
          <label htmlFor='date'>
            I have a confirmed move date and would like to enter it
          </label>
        </div>
      </div>
      {(isDate && (
        <div className='quote-form-wrp'>
          <div className='quote-form-group'>
            <input
              value={date}
              onChange={e => {
                setDate(e.target.value)
              }}
              type='date'
              name='date'
              id=''
            />
          </div>
        </div>
      )) ||
        ''}
    </div>
  )
}

import Dropdown from '../Dropdown'
import SubCat from './SubCat'

export default function UeAmount({ item, setItem, country, setCountry, note, setNote, setSubCat, subCat }) {
  const data = [
    'France',
    'Italy',
    'Germany',
    'Switzerland',
    'Netherlands',
    ' Poland',
    'Sweden',
    'Norway',
    'Romania',
    'Cyprus',
    'Monaco',
    'Montenegro',
  ]
  return (
    <div className='ue-amount'>
      <Dropdown
        prev={country}
        handler={d => {
          setCountry(d)
        }}
        data={data}
      />
      <div className='quote-form-wrp'>
        <div className='quote-form-group'>
          <label htmlFor='from'>
          List items to be transported<span>*</span>
          </label>
          <SubCat
                subCat={subCat}
                setSubCat={setSubCat}
                item={item}
                setItem={setItem}
              />
        </div>
      </div>
    </div>
  )
}




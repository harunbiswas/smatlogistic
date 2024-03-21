import Dropdown from '../Dropdown'

export default function UeAmount({ item, setItem, note, setNote }) {
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
        prev={item}
        handler={d => {
          setItem(d)
        }}
        data={data}
      />
      <div className='quote-form-wrp'>
        <div className='quote-form-group'>
          <label htmlFor='from'>
            Delivery notes <span></span>
          </label>
          <input
            value={note}
            onChange={e => {
              setNote(e.target.value)
            }}
            placeholder=' Delivery notes'
            id='from'
          />
        </div>
      </div>
    </div>
  )
}

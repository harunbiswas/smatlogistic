import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

export default function Dropdown({ data, handler, prev }) {
  const [active, setActive] = useState('')
  const [show, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  useEffect(() => {
    setActive(prev)
  }, [])

  useEffect(() => {
    handler(active)
  }, [active])

  return (
    <div ref={ref} className='dropdown'>
      <div onClick={() => setShow(!show)} className='dropdown-top'>
        <span>{active || 'Select a Item'}</span>
        <span>{(!show && <FaAngleDown />) || <FaAngleUp />}</span>
      </div>
      <div className={`dropdown-body ${(show && 'show') || ''}`}>
        {data?.map((d, i) => (
          <button
            onClick={() => {
              setActive(d)
              setShow(false)
            }}
            key={i}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  data: PropTypes.array.isRequired,
}

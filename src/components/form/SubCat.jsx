import { GoPlus } from 'react-icons/go'
import { MdNearbyError } from 'react-icons/md'

import { useEffect, useState } from 'react'

export default function SubCat({ item, setItem, subCat, setSubCat }) {
  const [isAdd, setIsAdd] = useState(false)
  const [value, setValue] = useState('')
  const [active, setActive] = useState([])

  useEffect(() => {
    setActive(item)
  }, [])

  useEffect(() => {
    setItem(active)
  }, [active])

  const handleItemClick = title => {
    // Check if the item is already in the state
    const itemIndex = active.indexOf(title)

    if (itemIndex === -1) {
      // If not in the state, add it
      setActive(prevItems => [...prevItems, title])
    } else {
      // If already in the state, remove it
      const updatedItems = [...active]
      updatedItems.splice(itemIndex, 1)
      setActive(updatedItems)
    }
  }
  return (
    <ul className='subcat'>
      {subCat.map((d, i) => (
        <li
          key={i}
          className={`subcat-item ${
            (active.includes(d.title) && 'select') || ''
          }`}
        >
          <button onClick={() => handleItemClick(d.title)}>
            {d.icon}
            <span>{d.title}</span>
          </button>
        </li>
      ))}

      {(!isAdd && (
        <li className='subcat-item'>
          <button
            onClick={() => {
              setIsAdd(true)
            }}
          >
            <GoPlus />
            <span>Add Item</span>
          </button>
        </li>
      )) || (
        <form
          onSubmit={() => {
            setValue('')
            setIsAdd(false)
            value &&
              setSubCat(prev => {
                return [...prev, { title: value, icon: <MdNearbyError /> }]
              })

            value && handleItemClick(value)
          }}
        >
          <input value={value} onChange={e => setValue(e.target.value)} />
        </form>
      )}
    </ul>
  )
}

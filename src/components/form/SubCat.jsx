import { GoPlus } from 'react-icons/go'
import { MdNearbyError } from 'react-icons/md'
import { BiSolidCustomize } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

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

  const deleteSubCat = (index) => {
    const updatedSubCat = [...subCat];
    updatedSubCat.splice(index, 1);
    setSubCat(updatedSubCat);
  };

  const deleteItem = (title) => {
    const updatedSubCat = item.filter(item => item.title !== title);
    setItem(updatedSubCat);
  };

  console.log(item, subCat)
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
            {d.delatable &&<div className="del" onClick={(e)=>{
              deleteSubCat(i);
              deleteItem(d.title)
            }}>
              <MdDelete />
            </div>}
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
                return [...prev, { title: value, icon: <BiSolidCustomize />, delatable: true }]
              })

            value && handleItemClick(value)
          }}
        >
          <input value={value} autoFocus onChange={e => setValue(e.target.value)} />
          <button type="submit">add</button>
        </form>
      )}
    </ul>
  )
}

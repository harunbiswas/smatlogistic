import { FaCarSide, FaStoreAlt } from 'react-icons/fa'
import { GiEuropeanFlag } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'

import { SiHomeassistantcommunitystore } from 'react-icons/si'

export default function Type({ type, setType, setItem }) {
  const items = [
    {
      name: 'Home Removals',
      icon: <IoHome />,
    },
    {
      name: 'Furniture & Other Items',
      icon: <SiHomeassistantcommunitystore />,
    },
    {
      name: 'EU Moves',
      icon: <GiEuropeanFlag />,
    },
    {
      name: 'Storage',
      icon: <FaStoreAlt />,
    },
    {
      name: 'Vehicle',
      icon: <FaCarSide />,
    },
  ]

  return (
    <div className='type'>
      <h4 className='type-title'>
        Select Move Type <span>*</span>
      </h4>

      <div className='type-body'>
        {items.map((item, i) => (
          <button
            onClick={() => {
              setType(item.name)
              setItem('')
            }}
            className={(type === item.name && 'select') || ''}
            key={i}
          >
            {item.icon}
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>
    </div>
  )
}

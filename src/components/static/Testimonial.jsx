import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

export default function Testimonial() {
  const data = [
    {
      img: 'https://thesmartlogistics.com/wp-content/uploads/2022/06/PHOTO-2022-06-13-21-08-01-5.jpg',
      name: 'Bradley',
      text: 'We wanted to thank Sam and the team for being so patient with us during our unsure move dates prior to the Stamp duty break. We managed to secure and exchange at the last minute and whilst every other company turned us down they were there to help with our move.',
    },
    {
      img: 'https://thesmartlogistics.com/wp-content/uploads/2022/06/PHOTO-2022-06-13-21-08-00.jpg',
      name: 'Tom',
      text: 'Having not moved for many years we were unsure what to expect however from the very first conversation with Sam he set all our worries aside and we were happy to have used smart logistics who delivered to all our expectations.',
    },
    {
      img: 'https://thesmartlogistics.com/wp-content/uploads/2022/06/PHOTO-2022-06-13-21-08-01-3.jpg',
      name: 'Harry',
      text: 'Having never moved before we were given a very clear explanation of what to expect for our move with smart logistics. The guys were very helpful and even though we have a lot of fragile items nothing broke during transport and we are well pleased with the service provided so thanks again guys.',
    },
  ]

  const iterations = Array.from({ length: 5 })
  return (
    <div className='Testimonial home-contact'>
      <h2 className='title'>What Our Customers Say!</h2>

      <ul className='Testimonial-wrp'>
        {data.map((d, i) => (
          <li key={i} className='Testimonial-item'>
            <div className='img'>
              <Image src={d.img} alt='' width={100} height={100} />
            </div>

            <strong>{d.name}</strong>
            <ul className='star'>
              {iterations.map((n, j) => (
                <li key={j}>
                  <FaStar />
                </li>
              ))}
            </ul>

            <p>{d.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

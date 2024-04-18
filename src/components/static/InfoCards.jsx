import { FaCheck } from 'react-icons/fa6'

export default function InfoCards() {
  const data = [
    {
      title: 'Trustworthy Removal Company',
      text: 'As a result of our quality we have gained the trust of our many clients.',
    },
    {
      title: 'Safe Environment',
      text: 'We work safely throughout each stage of our transport process.',
    },
    {
      title: 'Always up for a challenge',
      text: 'Whether moving Locally, Nationally or Internationally we rise to the challenge.',
    },
  ]
  return (
    <div className='infocards home-main'>
      {data.map((d, i) => (
        <div key={i} className='infocards-item'>
          <div className='icon'>
            <FaCheck />
          </div>
          <strong>{d.title}</strong>
          <span>{d.text}</span>
        </div>
      ))}
    </div>
  )
}

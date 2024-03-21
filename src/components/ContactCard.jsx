import Image from 'next/image'

export default function ContactCard() {
  return (
    <div className='home-contact'>
      <div className='home-contact-card'>
        <Image src='/images/contact.png' alt='' width={1000} height={1000} />
        <div className='content'>
          <strong>Contact us 24/7</strong>
          <a href='https://thesmartlogistics.com/contact/'>Click here</a>
        </div>
      </div>
    </div>
  )
}

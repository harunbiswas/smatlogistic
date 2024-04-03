export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <a href='https://thesmartlogistics.com/' className='brand'>
          <img
            src='https://thesmartlogistics.com/wp-content/uploads/2021/02/The-Smart-Logistics-1.png'
            alt=''
          />
        </a>
        <p className='footer-text'>The Smart Logistics and Shipping</p>
        <p className='footer-text'>Company registration 13113412</p>
        <div className='copyright'>
          <p>
            Copyright &copy;{new Date().getFullYear()} thesmartlogistics.com |
            Design & Developed By{' '}
            <a href='https://wpmhs.com/'>WPMHS.COM</a>
          </p>
        </div>
      </div>
    </div>
  )
}

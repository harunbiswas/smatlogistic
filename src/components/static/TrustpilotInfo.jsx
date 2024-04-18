import Image from 'next/image'

export default function TrustpilotInfo() {
  const info = [
    {
      text: 'All your moving and transport services including supplies provided by us',
    },
    {
      text: 'House and Office moves including Disassembly and Reassembly',
    },
    {
      text: 'Same day 24hour Transport Service',
    },
    {
      text: 'Reliable Man and Van services',
    },
    {
      text: 'Storage and Warehousing',
    },
    {
      text: 'Store to door collections and deliveries',
    },
    {
      text: 'Student moves including in room furniture setup.',
    },
    {
      text: 'Consignment fulfilment and forwarding',
    },
    {
      text: 'Vehicle transport and Freight forwarding',
    },
    {
      text: 'Receive cash back on any booking reserved within 24hours of enquiry',
    },
  ]
  return (
    <div className='trustpilotinfo home-contact'>
      <h2>
        Smarter Moving With The Most Reliable Removals And Relocations Provider
        In The UK.
      </h2>
      <ul className='trustpilotinfo-list'>
        {info.map((item, i) => (
          <li key={i}>{item?.text}</li>
        ))}
      </ul>

      <div className='trustpilotinfo-card'>
        <p>
          We wanted to thank Sam and the team for being so patient with us
          during our unsure move dates prior to the Stamp duty break. We managed
          to secure and exchange at the last minute and whilst every other
          company turned us down they were there to help with our move.
        </p>
        <div className='trustpilotinfo-card-author'>
          <div className='img'>
            <Image
              src='https://thesmartlogistics.com/wp-content/uploads/2022/06/PHOTO-2022-06-13-21-08-01-5.jpg'
              alt='thesmartlogistics'
              width={100}
              height={100}
            />
          </div>
          <span>Bradley</span>
        </div>
      </div>
    </div>
  )
}

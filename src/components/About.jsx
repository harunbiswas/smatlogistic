export default function About({
  about,
  setAbout,
  fromInfo,
  setFormInfo,
  toInfo,
  setToInfo,
  postCode,
  date,
  setDate,
  condition,
  setCondition,
  type,
}) {
  return (
    <div className='about'>
      <h4 className='title'>About</h4>

      <div className='about-from'>
        <div className='quote-form-wrp'>
          <div className='quote-form-group'>
            <label htmlFor='fristName'>
              First Name <span>*</span>
            </label>
            <input
              value={about?.fName}
              onChange={e => {
                setAbout(prev => {
                  return {
                    ...prev,
                    fName: e.target.value,
                  }
                })
              }}
              placeholder='First Name'
              id='fristName'
            />
          </div>
          <div className='quote-form-group'>
            <label htmlFor='lastName'>
              Last Name <span>*</span>
            </label>
            <input
              placeholder='Last Name'
              id='lastName'
              value={about?.lName}
              onChange={e => {
                setAbout(prev => {
                  return {
                    ...prev,
                    lName: e.target.value,
                  }
                })
              }}
            />
          </div>
        </div>
        <div className='quote-form-wrp'>
          <div className='quote-form-group'>
            <label htmlFor='Number'>
              Phone Number <span>*</span>
            </label>
            <input
              placeholder='Number'
              id='Number'
              value={about?.phone}
              onChange={e => {
                setAbout(prev => {
                  return {
                    ...prev,
                    phone: e.target.value,
                  }
                })
              }}
            />
          </div>
          <div className='quote-form-group'>
            <label htmlFor='email'>
              Email <span>*</span>
            </label>
            <input
              value={about?.email}
              onChange={e => {
                setAbout(prev => {
                  return {
                    ...prev,
                    email: e.target.value,
                  }
                })
              }}
              type='email'
              placeholder='email'
              id='email'
            />
          </div>
        </div>
        {type !== 'Storage' && (
          <>
            {/* moving from  */}
            <br />
            <h4 className='title'>
              {(type === 'Vehicle' && 'Move vehicle from') ||
                'About Where You Are Moving From'}
            </h4>
            <div className='quote-form-wrp'>
              <div className='quote-form-group'>
                <label htmlFor=''>
                  Address Line 1 <span>*</span>
                </label>
                <input
                  placeholder='Address Line 1'
                  id=''
                  value={fromInfo?.address1}
                  onChange={e => {
                    setFormInfo(prev => {
                      return {
                        ...prev,
                        address1: e.target.value,
                      }
                    })
                  }}
                />
              </div>
              <div className='quote-form-group'>
                <label htmlFor='lastName'>Address Line 2</label>
                <input
                  placeholder='Address Line 2'
                  id='lastName'
                  value={fromInfo?.address2}
                  onChange={e => {
                    setFormInfo(prev => {
                      return {
                        ...prev,
                        address2: e.target.value,
                      }
                    })
                  }}
                />
              </div>
            </div>{' '}
            <div className='quote-form-wrp'>
              <div className='quote-form-group'>
                <label htmlFor='fristName'>
                  Town/City <span>*</span>
                </label>
                <input
                  placeholder=' Town/City '
                  id='fristName'
                  value={fromInfo?.city}
                  onChange={e => {
                    setFormInfo(prev => {
                      return {
                        ...prev,
                        city: e.target.value,
                      }
                    })
                  }}
                />
              </div>
              <div className='quote-form-group'>
                <label htmlFor='lastName'>
                  Postalcode<span>*</span>
                </label>
                <input
                  placeholder='Postalcode'
                  id=''
                  disabled
                  value={postCode?.from}
                />
              </div>
            </div>
            <div className='quote-form-wrp'>
              <div className='quote-form-group'>
                <label htmlFor='fristName'>Property Type</label>
                <input
                  placeholder='(e.g. house, flat) and floor this property'
                  id='fristName'
                  value={fromInfo?.porperty}
                  onChange={e => {
                    setFormInfo(prev => {
                      return {
                        ...prev,
                        porperty: e.target.value,
                      }
                    })
                  }}
                />
              </div>
            </div>
            {/* moving to  */}
            <br />
            <h4 className='title'>
              {(type === 'Vehicle' && 'Move vehicle to') ||
                'About Where You Are Moving to'}
            </h4>
            <div className='quote-form-wrp'>
              <div className='quote-form-group'>
                <label htmlFor='fristName'>
                  Address Line 1 <span>*</span>
                </label>
                <input
                  placeholder='Address Line 1'
                  id='fristName'
                  value={toInfo?.address1}
                  onChange={e => {
                    setToInfo(prev => {
                      return {
                        ...prev,
                        address1: e.target.value,
                      }
                    })
                  }}
                />
              </div>
              <div className='quote-form-group'>
                <label htmlFor='lastName'>Address Line 2</label>
                <input
                  placeholder='Address Line 2'
                  id='lastName'
                  value={toInfo?.address2}
                  onChange={e => {
                    setToInfo(prev => {
                      return {
                        ...prev,
                        address2: e.target.value,
                      }
                    })
                  }}
                />
              </div>
            </div>{' '}
            <div className='quote-form-wrp'>
              <div className='quote-form-group'>
                <label htmlFor='fristName'>
                  Town/City <span>*</span>
                </label>
                <input
                  placeholder=' Town/City '
                  id='fristName'
                  value={toInfo?.city}
                  onChange={e => {
                    setToInfo(prev => {
                      return {
                        ...prev,
                        city: e.target.value,
                      }
                    })
                  }}
                />
              </div>
              <div className='quote-form-group'>
                <label htmlFor='lastName'>
                  Postalcode<span>*</span>
                </label>
                <input
                  placeholder='Postalcode'
                  id=''
                  disabled
                  value={postCode?.to}
                />
              </div>
            </div>
            <div className='quote-form-wrp'>
              <div className='quote-form-group'>
                <label htmlFor='fristName'>Property Type</label>
                <input
                  placeholder='(e.g. house, flat) and floor this property'
                  id='fristName'
                  value={toInfo?.porperty}
                  onChange={e => {
                    setToInfo(prev => {
                      return {
                        ...prev,
                        porperty: e.target.value,
                      }
                    })
                  }}
                />
              </div>
            </div>
            {/* moving date  */}
          </>
        )}
        <br />
        <h4 className='title'>
          {(type === 'Storage' && 'Storage date required') || 'Move Date'}
        </h4>
        <div className='quote-form-wrp'>
          <div className='quote-form-group'>
            <label htmlFor='fristName'>
              Date {type === 'Storage' && <span>*</span>}
            </label>
            <input
              type='date'
              id='fristName'
              value={date}
              onChange={e => {
                setDate(e.target.value)
              }}
            />
          </div>
        </div>{' '}
        {/* moving date  */}
        <br />
        <div className='quote-form-wrp'>
          <div className='quote-form-group checkbox'>
            <input
              type='checkbox'
              id='privacy'
              checked={condition}
              onChange={e => {
                setCondition(e.target.checked)
              }}
            />

            <label htmlFor='privacy'>
              By ticking the box, I have read and agree to the{' '}
              <a href=''>Privacy Notice</a> ,<a href=''> Cookie Policy</a>. and{' '}
              <a href=''> Terms and conditions</a>.
            </label>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

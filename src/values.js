const values = {}

values.postcodeRegex =
/^[0-9A-Za-z\s-]+$/



values.checkPostCode = async(postcode)=>{
  const apiKey = 'AIzaSyBh1riFGXiryZ5VZ-sGKy4hWOl47Aw-9Wc'
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${apiKey}`);
    const data = await response.json();

    return (data.status === 'OK' && data.results.length > 0);
  } catch (error) {
    console.error('Error fetching data:', error);
    return(false)
  }
}
// values.base_url = 'http://localhost:3000/api'
values.base_url = 'https://portal.thesmartlogistics.com/api'

export default values

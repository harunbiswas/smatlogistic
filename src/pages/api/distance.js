const axios = require('axios')

export default async function distance(req, res) {
  const apiKey = 'AIzaSyBh1riFGXiryZ5VZ-sGKy4hWOl47Aw-9Wc'
  try {
    const { from, to } = req.query
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${apiKey}`
    )

    const route = response.data.routes[0]
    const distance =
      route.legs.reduce((acc, leg) => acc + leg.distance.value, 0) / 1000 // Convert meters to kilometers

    const mile = kilometersToMiles(distance)
    res.status(200).json(mile.toFixed())
  } catch (error) {
    res.status(500).json(error)
  }
}

function kilometersToMiles(kilometers) {
  const conversionFactor = 0.621371
  const miles = kilometers * conversionFactor
  return miles
}

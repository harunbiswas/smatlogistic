const Stripe = require('stripe')

const stripe = new Stripe(
  'sk_test_51IlvJZAN9GQfnzeXLrZhwHgvvRnSXYsHXzZeCzCPp8FKs165bVG4NLtclySxkAomfaBHLJKIlTDcTRF4cxtGCeDl00Uyt5VEfO',
  { apiVersion: '2020-08-27' } // Use the latest version available
)

const host = 'https://portal.thesmartlogistics.com'

export default async function handler(req, res) {
  const { method, body } = req

  if (method === 'POST') {
    try {
      const date = new Date().toISOString()

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'GBP',
              product_data: {
                name: 'INV-' + date,
              },
              unit_amount: body.amount * 100 || 0,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        cancel_url: `https://portal.thesmartlogistics.com/error`,
        success_url: `https://portal.thesmartlogistics.com/success?sessionId={CHECKOUT_SESSION_ID}&firstName=${encodeURIComponent(
          body.about.fName
        )}&lastName=${encodeURIComponent(
          body.about.lName
        )}&Phone=${encodeURIComponent(
          body.about.phone
        )}&email=${encodeURIComponent(
          body.about.email
        )}&type=${encodeURIComponent(
          body.type
        )}&deliveryDate=${encodeURIComponent(
          body.date
        )}&item=${encodeURIComponent(
         JSON.stringify( body.item)
        )}&deliveryNote=${encodeURIComponent(
          body.note
        )}&country=${encodeURIComponent(
          body.country
        )}&collectedAddress1=${encodeURIComponent(
          body.fromInfo.address1
        )}&collectedAddress2=${encodeURIComponent(
          body.fromInfo.address2
        )}&collectedCity=${encodeURIComponent(
          body.fromInfo.city
        )}&collectedPorperty=${encodeURIComponent(
          body.fromInfo.porperty
        )}&deliveryAddress1=${encodeURIComponent(
          body.toInfo.address1
        )}&deliveryAddress2=${encodeURIComponent(
          body.toInfo.address2
        )}&deliveryCity=${encodeURIComponent(
          body.toInfo.city
        )}&deliveryPorperty=${encodeURIComponent(
          body.toInfo.porperty
        )}&AllDayPackingServiceLabour=${encodeURIComponent(
          body.data[0].select
        )}&RardboardBox=${encodeURIComponent(
          (body.data[1].select && body.data[1].count) || 0
        )}&RardrobeBox=${encodeURIComponent(
          (body.data[2].select && body.data[4].count) || 0
        )}&RollOfBubbleWrap=${encodeURIComponent(
          (body.data[3].select && body.data[3].count) || 0
        )}&AssemblyDisassemblyService=${encodeURIComponent(
          (body.data[4].select && body.data[4].count) || 0
        )}`,

        // description: 'Invoice Description',
        // Add metadata with additional order information
        metadata: {
          firstName: body.about.fName,
          lastName: body.about.lName,
          Phone: body.about.phone,
          email: body.about.email,
          type: body.type,

          deliveryDate: body.date,
          item: JSON.stringify(body.item),
          deliveryNote: body.note,
          country:body.country,

          collectedAddress1: body.fromInfo.address1,
          collectedAddress2: body.fromInfo.address2,
          collectedCity: body.fromInfo.city,
          collectedPorperty: body.fromInfo.porperty,

          deliveryAddress1: body.toInfo.address1,
          deliveryAddress2: body.toInfo.address2,
          deliveryCity: body.toInfo.city,
          deliveryPorperty: body.toInfo.porperty,
          'All day Packing service labour': body.data[0].select,
          'Rardboard box': (body.data[1].select && body.data[1].count) || 0,
          'Rardrobe box ': (body.data[2].select && body.data[4].count) || 0,
          'Roll of bubble wrap':
            (body.data[3].select && body.data[3].count) || 0,
          'Assembly/Disassembly service':
            (body.data[4].select && body.data[4].count) || 0,
        },
      })

      res.status(200).json({ sessionId: session.id })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Error creating checkout session' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}

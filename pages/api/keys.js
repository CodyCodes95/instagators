const handler = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            publishableKey: process.env.STRIPE_PUBLIC
        })
    } else {
        res.status(405).end('Method not allowed')
    }
}

export default handler
export default function Home(params) {
    app.get('/:col/:key', async (req, res) => {
        const col = req.params.col
        const key = req.params.key
        console.log(`from collection: ${col} get key: ${key} with params ${JSON.stringify(req.params)}`)
        const item = await db.collection(col).get(key)
        console.log(JSON.stringify(item, null, 2))
        res.json(item).end()
      })
}
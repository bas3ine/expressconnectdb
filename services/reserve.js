module.exports = (app, db) => {

	app.get('/reserve', (req, res) => {
		db.reserve.findAll()
			.then((result) => res.status(201).json(result))
			.catch((err) => res.status(400).json(err))
	})


	app.post('/reservelist', async (req, res) => {
		boatId = req.body.boatId
		sailorId = req.body.sailorId
		const date = req.body.date
		try {
			const boat = await db.boat.findByPk(boatId)
			const sailor = await db.sailor.findByPk(sailorId)

			const result = await boat.addSailor(sailor, {
				through: {
					date: date
				}
			})
			res.status(201).json(result)
		} catch (err) {
			console.log(err)
			res.status(400).json(err)
		}
	})
	app.put("/updateboat/:id", (req, res) => {
		db.boat.update({
				name: req.body.name,
				color: req.body.color
			}, {
				where: {
					id: req.params.id
				}
			})
			.then((result) => {
				res.status(203).json(result)
			})
			.catch((err) => {
				res.status(400).json(err)
			})
	})

	app.delete("/deleteboat/:id", (req, res) => {
		db.boat.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((result) => {
				res.status(204).json()
			})
			.catch((err) => {
				res.status(400).json()
			})
	})

}

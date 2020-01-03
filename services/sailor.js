module.exports = (app, db) => {

    //---------Promise-----------
    //     app.get('/boats',(req,res)=>{
    //         db.boat.findAll().then(
    //             (result) => res.status(201).json(result))
    //     })
    // }
    // ---------Async,await-----------
    app.get('/sailor', async (req, res) => {
        let result = await db.sailor.findAll()
        // db.sailor.findAll({ include: [db.boat] })   //query all include relate db table
        res.status(201).json(result)
    })

    app.post('/sailorlist', async(req, res) => {
        sailorName = req.body.name
        sailorRating = req.body.rating
        sailorAge = req.body.age
        db.sailor.create(
            {
                name :sailorName,
                rating:sailorRating,
                age:sailorAge
            }).then((result) => {
                res.status(201).json(result)
            }).catch((err) =>{
                res.status(400).json({ErrorMessage : err.message})
            })
    })

    app.post('/boatslist', (req, res) => {
        boatName = req.body.name
        boatColor = req.body.color
        db.boat.create(
            {
                name :boatName,
                color:boatColor
            }).then((result) => {
                res.status(201).json(result)
            }).catch((err) =>{
                res.status(400).json(err)
            })
    })

    app.put("/updatesailor/:id",(req,res) => {
        db.sailor.update(
            {
                name :req.body.name,
                color:req.body.rating,
                age : req.body.age
            },
            {
                where : {id : req.params.id}
            }
        )
        .then((result) => {
            res.status(203).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    })
    app.delete("/deletesailor/:id",(req,res) =>{
        db.sailor.destroy(
            {
                where : {id : req.params.id}
            }
        )
            .then((result) =>{
                res.status(204).json()
            })
            .catch((err)=> {
                res.status(400).json()
            })
    })
}
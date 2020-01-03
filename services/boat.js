module.exports = (app, db) => {

    //---------Promise-----------
    //     app.get('/boats',(req,res)=>{
    //         db.boat.findAll().then(
    //             (result) => res.status(201).json(result))
    //     })
    // }
    // ---------Async,await-----------
    app.get('/boats', async (req, res) => {
        let result = await db.boat.findAll()
        res.status(201).json(result)
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

    app.put("/updateboat/:id",(req,res) => {
        db.boat.update(
            {
                name :req.body.name,
                color:req.body.color
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

    app.delete("/deleteboat/:id",(req,res) =>{
        db.boat.destroy(
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
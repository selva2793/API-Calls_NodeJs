var blogPost = require("./model")
var getModel = require("./get_Method")
module.exports = function (router) {


    router.get("/sampleGEtApi", function (req, res) {
        getModel.find({Name: "selva"},
            function (error, data) {
                console.log(error)
                res.send(data)
            })
    })

    router.post("/samplePostApi", function (req, res) {
        //name
        //age
        console.log(req.body)
        getModel.find({Name: req.body.name,
        Age: req.body.age},
            function (error, data) {
                console.log(error)
                res.send(data)
            })
    })

    // router.post("/dateapi",function(req,res){
    //     console.log(req.query.display)
    //     res.send(req.query.display)
    // })

    return router
}

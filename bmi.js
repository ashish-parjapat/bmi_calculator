const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmi.html")

})
app.post("/", function(req, res) {
    var hei = parseFloat(req.body.height);
    var wei = parseFloat(req.body.weight);

    var result = parseFloat(wei / (hei * hei));
    // if (result < 16) {
    //     res.send("you are in Severe Thinness Category");
    // }
    res.send("your bmi=" + result);

})












app.listen(3000, function() {
    console.log("server started at port 3000")
})
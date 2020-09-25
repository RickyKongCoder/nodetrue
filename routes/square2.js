import { Router } from "express";
var router2 = Router();

router2.post('/', function (req, res) {
    var input = req.body['input'];
   // let result = JSON.stringify(parseInt(input) * parseInt(input));
    var result =  input.sort();
    console.log("My result--> %s", result);
    res.send(result);
});


export default router2;

import express from 'express' ;

import petData from '../pets.json' assert {type: 'json'}
//console.log(petData);

const app = express();

app.use(express.json());

app.use(logger);




app.get('/pets', (req, res) => {
    res.send(petData)
})

app.get('/pets/:index', (req, res) => {
    const index = req.params.index
    console.log("index: ", typeof index, index)
    console.log("Data being returned", petData[index])
    if (petData[index] === undefined){
        res.status(404).send("Not Found")
    }
    res.send(petData[index])
})

app.post('/pets', (req, res) => {
    let pet = req.body
    petData.push(pet)
    res.status(200).send(pet)
})

app.patch('/pets/:index', (req, res)=>{
    let index = req.params.index;
    let userInput = req.body
    // if(userInput.name != '' || userInput.age != number || userInput.kind != ''){
    //     res.status(401).send('error')
    // }

    for (let key in userInput){
        
        petData[index][key] = userInput[key]
    } 
    res.status(200).send('patched')
})

app.delete('/pets/:index', (req, res)=>{
    let index = req.params.index
    if (petData[index] === undefined){
        res.status(400).send('error')
    }
    let splicedPet = petData.splice(index, 1)
    res.status(200).send(splicedPet);
})

app.listen(8000, () => {
    console.log("App listening at port 8000")
})

function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Reqest Path: ", req.url);
    next();
};
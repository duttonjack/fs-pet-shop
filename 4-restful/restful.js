import express from 'express' ;
import pg from 'pg';
const { Pool } = pg // imports the pool class from the pg library

const db = new Pool({ // create a new instance of the pool class with database connection details
    user: "duttonjack",
    password: "postgres",
    host: "localhost",
    database: "petshop"
});
await db.connect()

const app = express();

app.use(express.json());
// app.use(logger);

app.get('/pets', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM pets;');
        res.status(200).send(result.rows);
    }   catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

app.get('/pets/:index', async (req, res) => {
    let index = req.params.index
    try {
        const result = await db.query("SELECT name, age, kind FROM pets WHERE id = $1;", [index])
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send("Internal Server Error")
    }
})

app.post('/pets', async (req, res) => {
    let petInfo = req.body
    console.log("petInfo at name, age, kind: ", petInfo.name, petInfo.age, petInfo.kind)
    let queryParams = [petInfo.name, petInfo.age, petInfo.kind];
    try {
        const result = await db.query("INSERT INTO pets (name, age, kind) VALUES ($1, $2, $3);", queryParams)
        res.status(200).send("Successfully Added Pet")
    } catch (err) {
        console.error(err)
        res.status(500).send("Internal Server Error")
    }
})

app.delete('/pets/:index', (req, res) => {
    let index = req.params.index
    db.query("DELETE FROM pets WHERE id = $1;", [index])
        .then((result) => res.status(200).send(`Pet id: ${index} was deleted!`))
        .catch((error) => {
            console.error(error)
            res.status(500).send("Error - failed to delete pet")
        })
})


//UPDATE pets SET ...  WHERE id = :index
app.patch('/pets/:index', (req, res) => {
    let index = req.params.index
    let { age, kind, name } = req.body

    let updateFields = []
    let queryParams = [index]

    if (name) {
        updateFields.push(`name = $${queryParams.length + 1}`)
        queryParams.push(name)
    }
    if (age) {
        updateFields.push(`age = $${queryParams.length + 1}`)
        queryParams.push(age)
    }
    if (kind) {
        updateFields.push(`kind = $${queryqueryParamsParmas.length + 1}`)
        queryParams.push(kind)
    }

    let updateQuery = `UPDATE pets SET ${updateFields.join(', ')} WHERE id = $1`

    db.query(updateQuery, queryParams)
        .then((result) => res.status(200).send(`Pet's name updated`))
        .catch((error) => {
            console.error(error)
            res.status(500).send("Error - failed to update pet")
        })
})


app.listen(8000, () => {
    console.log("App listening at port 8000")
})


// app.get('/pets/:index', (req, res) => {
//     const index = req.params.index
//     console.log("index: ", typeof index, index)
//     console.log("Data being returned", petData[index])
//     if (petData[index] === undefined){
//         res.status(404).send("Not Found")
//     }
//     res.send(petData[index])
// })


// app.post('/pets', (req, res) => {
//     let pet = req.body
//     petData.push(pet)
//     res.status(200).send(pet)
// })


// app.patch('/pets/:index', (req, res)=>{
//     let index = req.params.index;
//     let userInput = req.body
//     for (let key in userInput){ 
//         console.log('userInput[key]: ', userInput[key])
//         console.log('key: ', typeof key, key)
//         if (key === "age" && typeof userInput[key] !=='number'){
//                 res.status(401).send('Age value must be a number!')
//         }
//         if (key === "kind" && typeof userInput[key] !== "string"){
//             res.status(401).send('Kind value must be a string!')  
//         }
//         if (key === "name" && typeof userInput[key] !== "string"){
//             res.status(401).send('Name value must be a string!')  
//         }
//         petData[index][key] = userInput[key]
//     } 
//     console.log("made it here")
//     res.status(200).send('patched')
// })


// app.delete('/pets/:index', (req, res)=>{
//     let index = req.params.index
//     if (petData[index] === undefined){
//         res.status(400).send('error')
//     }
//     let splicedPet = petData.splice(index, 1)
//     res.status(200).send(splicedPet);
// })


// app.listen(8000, () => {
//     console.log("App listening at port 8000")
// })


// function logger(req, res, next) {
//     console.log("Request Method: ", req.method);
//     console.log("Reqest Path: ", req.url);
//     next();
// };
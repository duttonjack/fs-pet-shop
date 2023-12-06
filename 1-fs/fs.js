const fs = require("fs")
const acceptable = ["create", "destroy", "update", "read"]

// Error Handling for Invalid Commands
if (!(acceptable.includes(process.argv[2]))){ 
    console.error("Usage: nodefs.js [read | create | update | destroy]")
    process.on("exit", () => {
        console.log('Process exited with code 5')
    })
}

if (process.argv[2] === "read"){
    let petIndex = process.argv[3]
    fs.readFile('../pets.json', (err, data) => {
        if (err) throw err;
        let petArray = JSON.parse(data)

        if (petIndex > petArray.length -1 || petIndex < 0){
            console.error(`Usage: nodefs.js read INDEX`)
            console.log("Acceptable index values: 0 to 1")
        } else {
            console.log(petArray[petIndex])
        }
    })
}

if (process.argv[2] === "create"){
  let age = process.argv[3]
  let kind = process.argv[4]
  let name = process.argv[5]
  if (age && kind && name){
    createFunction(Number(age), kind, name)
  } else {
    console.log("Usage: node fs.js create AGE KIND NAME")
    process.on("exit", () => {
        console.log('Process exited with code 4')
    })
  }
}

function createFunction(age, kind, name){
  newPet = {
    age: age,
    kind: kind,
    name: name
  }
  console.log(newPet)
  fs.readFile('../pets.json', (err, data) => {
    if (err) throw err;
    let petArray = JSON.parse(data)
    petArray.push(newPet)
    console.log(petArray)
    fs.writeFile('../pets.json', JSON.stringify(petArray), function(err){
        if (err) throw err;
    })
  });
}
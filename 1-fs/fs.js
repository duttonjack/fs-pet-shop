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
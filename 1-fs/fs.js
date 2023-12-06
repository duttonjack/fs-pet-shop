
console.log(typeof process.argv[2], process.argv[2])
const acceptable = ["create", "destroy", "update", "read"]

// Error Handling for Invalid Commands
if (!(acceptable.includes(process.argv[2]))){ 
    console.error("Usage: nodefs.js [read | create | update | destroy]")
    process.on("exit", () => {
        console.log('Process exited with code 5')
    })
}


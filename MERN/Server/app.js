// // const readline = require("readline-sync")

// // const num1 = readline.questionInt("Enter Number 1:")
// // const num2 = readline.questionInt("Enter Number 2:")

// // console.log(`The sum is ${num1 + num2}`)

// // NodeJS -> Nodejs is a runtime environment for executing JavaScript
// // code outside of a web browser

// // npm -> Node Package Manager

// // local Modules or core Modules or Built-in Modules, Third Party Modules

// // core Modules -> Nodejs comes with core modules -> installation is not required

// // examples of core modules -> fs, path, os, http, url, events, crypto, dns

// // fs -> file system -> file system is a module that provides a way of working with the file system
// // path -> path module -> path is a module that provides a way of working with file and directory paths
// // os -> operating system -> operating system is a module that provides a way of working with the operating system
// // http -> http module -> http is a module that provides a way of working with the http protocol
// // url -> url module -> url is a module that provides a way of working with the url protocol
// // events -> events module -> events is a module that provides a way of working with events
// // crypto -> crypto module -> crypto is used for encrypting and decrypting data
// // dns -> dns module -> dns is a module that provides a way of working with the domain name system

// // os, dns, fs

// // os -> operating system -> operating system is a module that provides a way of working with the operating system

// // const os = require("os")

// // console.log(os.version());
// // console.log(os.uptime());
// // console.log(os.platform());
// // console.log(os.release());
// // console.log(os.networkInterfaces());
// // console.log(os.userInfo());
// // console.log(os.type());

// // const dns = require("dns")

// // // dns -> Domain name system -> dns is a module that provides a way of working with the domain name system

// // dns.lookup("www.google.com", (err, address, family) => {
// //     console.log(address);
// //     console.log(family);
// //     console.log(err);
// // })

// // fs -> file system -> file system is a module that provides a way of working with the file system.

const fs = require("fs")

// // create and write a file
// fs.writeFile("fs_sample.txt", "Hello World", () => {
//     console.log("File created");
// })

// // read a file
// fs.readFile("fs_sample.txt", { encoding: "utf-8" }, (err, text) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(text);
// })

// // Modify a file
// fs.appendFile("fs_sample.txt", " Hey there", () => {
//     console.log("File modified");
// })

// // Delete a file
// // fs.unlink("fs_sample.txt", () => {
// //     console.log("File deleted");
// // })

// // Rename a file
// fs.rename("fs_sample.txt", "fs.txt", () => {
//     console.log("File renamed");
// })

// streams -> Working with files in a more efficient way
// small chunks of data -> Readable and Writable streams

// readable stream -> Readable stream is a stream that can be read from
// writable stream -> Writable stream is a stream that can be written to

const readableStream = fs.createReadStream("streams.txt", { encoding: "utf-8" }) 
const writableStream = fs.createWriteStream("streams_result.txt", { encoding: "utf-8" })

// pipe -> pipe is a method that can be used to pipe a readable stream to a writable stream

// using events
readableStream.on("data", (chunk) => {
    writableStream.write("CHUNK: " + chunk)
})

readableStream.on("error", (err) => {
    console.log(err.message);
})

readableStream.on("end", () => {
    console.log("Stream ended");
})

// using pipe()
readableStream.pipe(writableStream)
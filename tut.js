const fs = require('fs').promises;

async function helloWorld(){
  console.log("started the process")
  await fs.writeFile('helloworld.txt', 'Hello World!');
  console.log('Yay we succesfully wrote to a file!')
}

helloWorld();
console.log("The hello world function is still");
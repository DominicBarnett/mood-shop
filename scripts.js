import data from './data.js'

const itemsContainer = document.querySelector('#items')

//Length of the data determines how many time the loop goes
for (let i = 0; i < data.length; i += 1){
    //creates new div element and adds class name
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    // creates an image element
    const img = document.createElement('img');

    img.src = data[i].image
    img.width = 300
    img.height = 300

    newDiv.appendChild(img)
    console.log(img)
    itemsContainer.appendChild(newDiv)
}
import data from './data.js'

const itemsContainer = document.querySelector('#items')

//Length of the data determines how many time the loop goes
// LINE 7 - 29 is the stretch challenge ES6 foreach loop attempt keep trying
// itemsContainer.foreach(data, data);{
//     //creates new div element and adds class name
//     const newDiv = document.createElement('div');
//     newDiv.className = 'item'
//     // creates an image element
//     const img = document.createElement('img');

//     img.src = data[i].image
//     img.width = 300
//     img.height = 300

//     newDiv.appendChild(img)
//     console.log(img)
//     itemsContainer.appendChild(newDiv)

//     const desc = document.createElement('P')
//     desc.innerText = data[i].desc
//     newDiv.appendChild(desc)

//     const price = document.createElement('P')
//     price.innerText = data[i].price
//     newDiv.appendChild(price)
// }
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

    const desc = document.createElement('P')
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)

    const price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
}
const cart = [ ]

// const obj = {name:"Shoe", price: 9.99, qty: 3}
//     console.log(obj)

function addItem(name, price){
    for(let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name){
            cart[i].qty += 1
            return
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item)
}
function showItems(){
    // let qty = 0
    // for (let i = 0; i < cart.length; i += 1) {
    //     qty += cart[i].qty
    // }
//     console.log(cart[0]) 
//     console.log(cart.length)
        console.log(`You have ${getQty()} items in your cart`)
        for (let i = 0; i < cart.length; i += 1){
            console.log(`${ cart[i].name } ${cart[i].price} x ${cart[i].qty} `)
        }
        // let total = 0
        // for (let i = 0; i < cart.length; i += 1){
        //     total += cart[i].price * cart[i].qty
        // }
        console.log(`Total in cart $${getTotal()}`)
}

function getQty(){
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}
function getTotal(){
    let total = 0
        for (let i = 0; i < cart.length; i += 1){
            total += cart[i].price * cart[i].qty
        }
        return total.toFixed(2)
}
addItem('apple', 0.99)
addItem('frisbee', 9.99)
addItem('orange', 0.99)
addItem('opinion', 0.02)
addItem('apple', 0.99)
addItem('apple', 0.99)
addItem('orange', 0.99)
addItem('stuff', 7.36)
addItem('stuff', 7.36)
addItem('stuff', 7.36)
addItem('stuff', 7.36)
showItems()

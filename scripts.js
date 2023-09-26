import data from './data.js'

const itemsContainer = document.querySelector('#items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')


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
    // console.log(img)
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

const all_items_button = Array.from(document.querySelectorAll("button"))
all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))
const cart = [ ]

// --------------------------
//handle change envents on update input
itemList.onchange = function (e) {
    if (e.target && e.target.classList.contains('update')){
        const name = e.target.dataset.name
        const qty = parseInt(e.target.value)
        // (e.console.logtarget)
        updateCart(name, qty)

    }
}
// handle clicks on list
itemList.onclick = function(e) {
    // console.log("clicked list")
    // console.log(e.target)
    if (e.target && e.target.classList.contains('remove')){
                
                const name = e.target.dataset.name //data-name=""
                removeItem(name)
        }
    else if (e.target && e.target.classList.contains('add-one')){
        const name = e.target.dataset.name
        addItem(name)
    }
    else if (e.target && e.target.classList.contains('remove-one')){
        const name = e.target.dataset.name
        removeItem(name, 1)
    }
}

// const obj = {name:"Shoe", price: 9.99, qty: 3}
//     console.log(obj)
//-----------------------------------------------------------------
// Add item
function addItem(name, price){
    for(let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name){
            cart[i].qty += 1
            showItems()
            return
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item)
}
// ----------------------------------------------------------
// Show items
// function showItems(){
//     // let qty = 0
//     // for (let i = 0; i < cart.length; i += 1) {
//     //     qty += cart[i].qty
//     // }
//     //     console.log(cart[0]) 
//     //     console.log(cart.length)
//         let itemStr = '' 
        
//         cartQty.innerHTML = `You have ${getQty()} items in your cart`
//         for (let i = 0; i < cart.length; i += 1){
//             // console.log(`${ cart[i].name } ${cart[i].price} x ${cart[i].qty} `)
//             // const name = cart[i].name
//             // const price = cart[i].price
//             // const qty = cart[i].qty
            
//             const {name, price, qty} = cart[i]
//             let itemTotal = price * qty
//             itemStr += `<li> 
//             ${ name } 
//             ${price} x ${qty} = 
//             ${itemTotal.toFixed(2)}
//             <button class="remove" data-name="${name}">Remove</button>
//             <button class="add-one" data-name="${name}">+</button>
//             <button class="remove-one" data-name="${name}">-</button>
//             </li> `
//         }
//         // let total = 0
//         // for (let i = 0; i < cart.length; i += 1){
//         //     total += cart[i].price * cart[i].qty
//         // }
        
//        cartTotal.innerHTML = `Total in cart $${getTotal()}`

   
//         itemList.innerHTML = itemStr


// }
// ----------------------------------------------------------------



// Get quantity
function getQty(){
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}
// -----------------------------------------------------------------
// Get Total
function getTotal(){
    let total = 0
        for (let i = 0; i < cart.length; i += 1){
            total += cart[i].price * cart[i].qty
        }
        return total.toFixed(2)
}
// --------------------------------------------------------------
function removeItem (name, qty = 0){
    
    for (let i = 0; i < cart.length; i +=1){
        // if (cart[i].name === name) {
        //     cart.splice(i, 1)
        //     return
        // }
        if (cart[i].name === name) {
            if (qty > 0){
                cart[i].qty -= qty
            }
            // cart[i].qty -= 1
            if (cart[i].qty < 1 || qty === 0){
                cart.splice(i, 1)  
            }
            showItems()
            return
        }
    }
}
// --------------------------------------------------------------
//update cart function
function updateCart(name, qty){
    // console.log("updateCart")
    // console.log(cart.length)
    for (let i = 0; i < cart.length; i += 1){
        // console.log(cart[i].name , name, qty)
        if (cart[i].name === name){
            cart[i].qty = qty
            // console.log(qty)
            showItems()
            return
        }
    }

}
function showItems(){
    // let qty = 0
    // for (let i = 0; i < cart.length; i += 1) {
    //     qty += cart[i].qty
    // }
//     console.log(cart[0]) 
//     console.log(cart.length)
        let itemStr = '' 
        
        cartQty.innerHTML = `You have ${getQty()} items in your cart`
        for (let i = 0; i < cart.length; i += 1){
            // console.log(`${ cart[i].name } ${cart[i].price} x ${cart[i].qty} `)
            // const name = cart[i].name
            // const price = cart[i].price
            // const qty = cart[i].qty
            
            const {name, price, qty} = cart[i]
            let itemTotal = price * qty
            itemStr += `<li> 
            ${ name } 
            ${price} x ${qty} = 
            ${itemTotal.toFixed(2)}
            <button class="remove" data-name="${name}">Remove</button>
            <button class="add-one" data-name="${name}">+</button>
            <button class="remove-one" data-name="${name}">-</button>
            <input class="update" type="number" data-name="${name}">
            </li> `
        }
        // let total = 0
        // for (let i = 0; i < cart.length; i += 1){
        //     total += cart[i].price * cart[i].qty
        // }
        
       cartTotal.innerHTML = `Total in cart $${getTotal()}`

   
        itemList.innerHTML = itemStr


}
// addItem('apple', 0.99)
// addItem('frisbee', 9.99)
// addItem('orange', 0.99)
// addItem('opinion', 0.02)
// addItem('apple', 0.99)
// addItem('apple', 0.99)
// addItem('orange', 0.99)
// addItem('stuff', 7.36)
// addItem('stuff', 7.36)
// addItem('stuff', 7.36)
// addItem('stuff', 7.36)

// removeItem('stuff', 1)
// removeItem('opinion')
// showItems()

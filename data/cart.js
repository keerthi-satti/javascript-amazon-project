export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){
    cart =[{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 2
        },
        {
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 1
        }

    ]
}
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
export function addToDo(productId){
    let matchingItem ;
    cart.forEach((item)=>{
        if(item.productId === productId){
            matchingItem = item;
        }});
    if (matchingItem){
        matchingItem.quantity+=1;
    }else{
        cart.push({
        productId : productId,
        quantity : 1
    });
    }
    saveToStorage();
}

export function removeCartItem(productId){
    let newcart = [];
    cart.forEach((product) =>{
        if (product.productId !== productId){
        newcart.push(product);
    }
    });
    cart = newcart;
    saveToStorage();
}
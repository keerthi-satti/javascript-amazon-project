export const orders = JSON.parse(localStorage.getItem('orders'))  || [];

export function addOrder(order){
    orders.unshift(order);
    addToStorage();
}

function addToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}
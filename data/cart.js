export const cart =[
    
]
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
}
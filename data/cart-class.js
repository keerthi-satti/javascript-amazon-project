class Cart{
        cartItem;
        #localStorageKey;

        constructor(localStorageKey){
            this.#localStorageKey = localStorageKey;
            this.#loadFromStorage();
        }
        #loadFromStorage(){
            this.cartItem = JSON.parse(localStorage.getItem(this.#localStorageKey));
            if (!this.cartItem){
                this.cartItem =[{
                    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity : 2,
                    deliveryOptionId : 1
                    },
                    {
                    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity : 1,
                    deliveryOptionId : 2
                    }

                ]
            }
        }

        saveToStorage(){
            localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItem))
        }

        addToDo(productId){
            let matchingItem ;
            this.cartItem.forEach((item)=>{
                if(item.productId === productId){
                    matchingItem = item;
                }});
            if (matchingItem){
                matchingItem.quantity+=1;
            }else{
                this.cartItem.push({
                productId : productId,
                quantity : 1,
                deliveryOptionId : 1
            });
            }
            this.saveToStorage();
        }

        removeCartItem(productId){
            let newcart = [];
            this.cartItem.forEach((product) =>{
                if (product.productId !== productId){
                newcart.push(product);
            }
            });
            this.cartItem = newcart;
            this.saveToStorage();
        }

        updateDeliveryOption (productId, deliveryOptionId){
            let matchingItem ;
            this.cartItem.forEach((item)=>{
                if(item.productId === productId){
                    matchingItem = item;
                }});
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    }

const cart = new Cart('cart-oop');

const businessCart = new Cart('business-cart');

console.log(cart);
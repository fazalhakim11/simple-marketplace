import { create } from "zustand";

const useProductStores = create((set) => (
    {
        products: [
            {
                id: 1,
                img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dc7ffff-ab5b-4c05-b93a-97ed846b7bcd/W+NIKE+AL8.png",
                title: "Nike AL8",
                desc: "Inspired by the '90s but ready for the future, the AL8 is the perfect mix of nostalgia and the modern comfort you love.",
                alt: "Nike AL8",
                price: 1399000,
            },
            {
                id: 2,
                img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/NIKE+AIR+MAX+97.png",
                title: "Nike Air Max 97",
                desc: "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
                alt: "Nike Air Max 97",
                price: 2389000,
            },
            {
                id: 3,
                img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e19a5fa-fc20-493c-98d0-5ed734d13f62/custom-nike-air-max-97-shoes-by-you.png",
                title: "Nike Air Max 97 By You",
                desc: "The AM97 was the shapeshifter of its time, and it's your turn to do the same. Customise every part of the shoe.",
                alt: "Nike Air Max 97 By You",
                price: 3049000,
            },
            {
                id: 4,
                img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/87ccf587-04de-4425-a356-1056322dc98e/W+NIKE+AIR+MAX+NUAXIS.png",
                title: "Nike Air Max Nuaxis",
                desc: "The Air Max Nuaxis is ready for everyday life. You can count on it to look good and feel good too, thanks to breathable mesh and an intuitive Air unit. ",
                alt: "Nike Air Max Nuaxis",
                price: 1399000,
            },
            {
                id: 5,
                img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05ebf414-e671-41d3-9698-705cc5b5ec2c/NIKE+INTERACT+RUN+SE.png",
                title: "Nike Interact Run SE",
                desc: "Can you see the future? Fast-forward your footsteps in the cutting-edge Nike Interact Run. It's set up with all the running goodness you need: a lightweight Flyknit upper, soft foam midsole and comfort where it counts.",
                alt: "Nike Interact Run SE",
                price: 1199000,
            }
        ],
        cart: [],
        deleteCart: (newCart)=> set(({cart: newCart})),
        isChecked: (id)=> set((state)=> {
            const updatedCart = state.cart.map(item => {
                if (id === item.id){
                    return {...item, selected: !item.selected}
                } return item
            })
            return {cart: updatedCart}
        }),
        checkedAll: ()=>set((state)=>{
            const allSelected = state.cart.every(item=> item.selected)
            const updatedCart = state.cart.map(item=>({
                ...item,
                selected: !allSelected
            }))
            return {...state, cart: updatedCart}
        }),
        // addToCart: (product) => set((state)=> ({cart: [product, ...state.cart]})),
        addToCart: (productToadd) => set((state)=> {
            const productIndex = state.cart.findIndex(item=> item.id === productToadd.id);
            if (productIndex !== -1){
                const updatedCart = [...state.cart];
                updatedCart[productIndex].quantity += 1;
                return {cart: updatedCart};
            } else {
                return {cart: [{...productToadd, quantity: 1, selected: false}, ...state.cart]};
            }
        }),
        decreaseQuantity: (productId)=> set((state)=>{
            const updatedCart = state.cart.map(item => {
                if (item.id === productId) {
                    const updatedQuantity = item.quantity - 1
                    if (updatedQuantity <= 0){
                        return null
                    }else{
                        return {...item, quantity: updatedQuantity}
                    }
                }
                return item            
            }).filter(Boolean)
            return {cart: updatedCart}
        }),
        removeFromCart: (i) => set((state)=>({cart: state.cart.filter((product, index)=> index !== i)})),
        formatNumber: (number)=>{
            let numStr = number.toString()
            numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            return numStr
          }, 
    }
));

export default useProductStores;

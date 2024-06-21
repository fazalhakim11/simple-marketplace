import { create } from "zustand";

const useProductStores = create((set) => (
    {
        products: [
            {
                id: 1,
                img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/4/035c6d04-ef2a-4d2f-9ee0-82ac0c9337b7.jpg",
                title: "Jersey Real Madrid",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aspernatur?",
                alt: "Jersey Real Madrid",
                price: 78000,
            },
            {
                id: 2,
                img: "https://img.ws.mms.shopee.co.id/id-11134207-7qukx-lkhomno2iv56c0",
                title: "Jersey MU",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, quas.",
                alt: "Jersey MU",
                price: 85000,
            },
            {
                id: 3,
                img: "https://img.staticdj.com/bda32a25ec5e311f409de5ae080d78df.jpg",
                title: "Jersey Liverpool",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, error maxime!",
                alt: "Jersey Liverpool",
                price: 93000,
            },
            {
                id: 4,
                img: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lqk5ng5l6sxy54",
                title: "Jersey Inggris",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aspernatur?",
                alt: "Jersey Inggris",
                price: 87000,
            },
            {
                id: 5,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPXjkYYL57eIR2Ts-Zu9Rl6EsSutwfFVmzQ&s",
                title: "Jersey Jerman",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, quas.",
                alt: "Jersey Jerman",
                price: 92000,
            }
        ],
        cart: [],
        deleteCart: ()=> set(({cart: []})),
        // addToCart: (product) => set((state)=> ({cart: [product, ...state.cart]})),
        addToCart: (productToadd) => set((state)=> {
            const productIndex = state.cart.findIndex(item=> item.id === productToadd.id);
            if (productIndex !== -1){
                const updatedCart = [...state.cart];
                updatedCart[productIndex].quantity += 1;
                return {cart: updatedCart};
            } else {
                return {cart: [{...productToadd, quantity: 1}, ...state.cart]};
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

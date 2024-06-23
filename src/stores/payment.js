import { create } from "zustand";

const usePayment = create((set)=>{
    return (
    {   
        paymentAmount: "",
        setPaymentAmount: (res)=> set({paymentAmount: res}),
        orderHistory: [],
        setOrderHistory: (products, totalPrice, paymentAmount)=> set((state)=> {
            const today = new Date()
            const year = today.getFullYear()
            const month = today.getMonth()+1
            const day = today.getDate()
            const hour = today.getHours()
            const minute = today.getMinutes()
            const formatedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour}:${minute}`    
        return(
            {orderHistory: [
                {
                    ...products, 
                    date: formatedDate, 
                    totalPrice: totalPrice,
                    paymentAmount: paymentAmount,
                    change: paymentAmount-totalPrice
                }, 
                ...state.orderHistory]
            }
        )}),
    }
)})

export default usePayment
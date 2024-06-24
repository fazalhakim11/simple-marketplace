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
            const dayWeek = today.getDay()
            const daysOfWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            const dayName = daysOfWeek[dayWeek]
            const hour = today.getHours()
            const minute = today.getMinutes()
            const formatedDate = `${dayName}, ${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`    
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
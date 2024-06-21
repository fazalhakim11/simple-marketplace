import { create } from "zustand";

const usePayment = create((set)=>{
    return (
    {
        paymentAmount: "",
        setPaymentAmount: (res)=> set({paymentAmount: res}),
        orderHistory: [],
        setOrderHistory: (products)=> set((state)=> ({orderHistory: [{...products}, ...state.orderHistory]}))
    }
)})

export default usePayment
import { create } from "zustand";

const usePayment = create((set)=>(
    {
        paymentAmount: "",
        setPaymentAmount: (res)=> set({paymentAmount: res}),
        orderHistoty: [],
        setOrdetHistory:(product)=> set((state)=> [])
    }
))

export default usePayment
import { create } from "zustand";

const useProductStores = create((set) => (
    {
        products: [
            {
                img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/4/035c6d04-ef2a-4d2f-9ee0-82ac0c9337b7.jpg",
                title: "Jersey Real Madrid",
                desc: "Produk jersey bola murah meriah kualias top tiada duanya",
                alt: "Jersey Real Madrid"
            },
            {
                img: "https://img.ws.mms.shopee.co.id/id-11134207-7qukx-lkhomno2iv56c0",
                title: "Jersey MU",
                desc: "Produk jersey bola murah meriah kualias top tiada duanya",
                alt: "Jersey MU"
            },
            {
                img: "https://img.staticdj.com/bda32a25ec5e311f409de5ae080d78df.jpg",
                title: "Jersey Liverpool",
                desc: "Produk jersey bola murah meriah kualias top tiada duanya",
                alt: "Jersey Liverpool"
            },
            {
                img: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lqk5ng5l6sxy54",
                title: "Jersey Inggris",
                desc: "Produk jersey bola murah meriah kualias top tiada duanya",
                alt: "Jersey Inggris"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPXjkYYL57eIR2Ts-Zu9Rl6EsSutwfFVmzQ&s",
                title: "Jersey Jerman",
                desc: "Produk jersey bola murah meriah kualias top tiada duanya",
                alt: "Jersey Jerman"
            }
        ],
    }
));

export default useProductStores;

import toast from "react-hot-toast";


export const notifyEmail = () => toast('Email: michaelutoh21@gmail.com', {
    duration: 4000,
    position: 'top-center',
    style: {
        background: "#141414",
        color: "#fff",
        width: "100%"
    }
});
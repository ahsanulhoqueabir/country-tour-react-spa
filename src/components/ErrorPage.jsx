import Lottie from "lottie-react";
import err from '../assets/error.json'
const ErrorPage = () => {
    return (
        <div className=" flex justify-center items-center h-screen">
            <Lottie className="w-[60%] flex-1" animationData={err}></Lottie>
        </div>
    );
};

export default ErrorPage;